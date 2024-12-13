import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

// CourseCard Component
const CourseCard = ({ course, onClick }) => (
  <div
    className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
    onClick={() => onClick(course.id)} // Trigger onClick when clicked
  >
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-60 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {course.title}
      </h3>
      <p className="text-gray-600">{course.description}</p>
    </div>
  </div>
);

// VideoList Component to display videos for the selected course
const VideoList = ({ videos }) => {
  const extractVideoId = (url) => {
    const urlParts = url.split("v=");
    return urlParts[1] ? urlParts[1].split("&")[0] : null;
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Course Videos</h3>
      <div className="flex flex-wrap -mx-2">
        {videos.map((video) => {
          const videoId = extractVideoId(video.VidLink);

          return (
            <div
              key={video.id}
              className="bg-gray-100 p-2 rounded-lg w-full sm:w-1/2 md:w-1/4 mb-4 m-2"
            >
              <h4 className="font-semibold mb-2">{video.VidTitle}</h4>
              <LiteYouTubeEmbed
                id={videoId}
                title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};



const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [videos, setVideos] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [pdfPreviewStates, setPdfPreviewStates] = useState({});

  const previewFunc = (pdfId) => {
    setPdfPreviewStates((prevStates) => ({
      ...prevStates,
      [pdfId]: !prevStates[pdfId], // Toggle the preview state for the specific PDF
    }));
  };

  // PDFList Component to display PDFs for the selected course
  const PDFList = ({ pdfs }) => (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Course PDFs</h3>
      <div className="flex flex-wrap -mx-2">
        {pdfs.map((pdf) => {
          const isPreviewing = pdfPreviewStates[pdf.id] || false; // Check if this PDF is being previewed
          const funcW = isPreviewing ? 400 : 0;
          const funcH = isPreviewing ? 600 : 0;

          return (
            <div
              key={pdf.id}
              className="bg-gray-100 rounded-lg w-full mb-4"
            >
              <h4 className="font-semibold mb-2">{pdf.title}</h4>
              <button onClick={() => previewFunc(pdf.id)}>View PDF</button>

              <iframe
                id={`preview-${pdf.id}`}
                width={funcW}
                height={funcH}
                src="https://drive.google.com/file/d/1rowB1NYLJDCNlNUnyrabKFIZp-fLFgMP/preview"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );

  useEffect(() => {
    const fetchCourses = async () => {
      if (user && user.courses) {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/courses/");
          const allCourses = await response.json();
          const userCourses = allCourses.filter((course) =>
            user.courses.includes(course.id)
          );
          setCourses(userCourses);
        } catch (error) {
          console.error("Failed to fetch courses:", error);
        }
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchVideosAndPdfs = async () => {
      if (selectedCourseId) {
        try {
          // Fetch videos
          const videoResponse = await fetch(
            "http://127.0.0.1:8000/api/videos/"
          );
          const allVideos = await videoResponse.json();
          const courseVideos = allVideos.filter(
            (video) => video.course === selectedCourseId
          );
          setVideos(courseVideos);

          // Fetch PDFs
          const pdfResponse = await fetch("http://127.0.0.1:8000/api/pdfs/");
          const allPdfs = await pdfResponse.json();
          const coursePdfs = allPdfs.filter(
            (pdf) => pdf.course === selectedCourseId
          );
          setPdfs(coursePdfs);
        } catch (error) {
          console.error("Failed to fetch videos or PDFs:", error);
        }
      }
    };

    fetchVideosAndPdfs();
  }, [selectedCourseId]);

  // Handle course selection
  const handleCourseClick = (courseId) => {
    setSelectedCourseId(courseId);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">My Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={handleCourseClick}
            />
          ))}
        </div>

        {/* Show PDFs for the selected course */}
        {selectedCourseId && pdfs.length > 0 && <PDFList pdfs={pdfs} />}

        {/* Display videos for the selected course */}
        {selectedCourseId && videos.length > 0 && <VideoList videos={videos} />}

        {/* Show a message if no videos or PDFs are available for the selected course */}
        {selectedCourseId && videos.length === 0 && pdfs.length === 0 && (
          <p className="text-gray-600 mt-4">
            No videos or PDFs available for this course.
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyCourses;
