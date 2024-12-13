import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link

const Admission = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/courses/")
      .then((response) => {
        console.log("API Response:", response.data);
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, []);

  return (
    <>
      <div id="admission">
        <p className="text-4xl font-bold text-center mt-10">
          Admission Programme HSC-2024
        </p>
      </div>

      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {courses.length > 0 ? (
              courses.map((course) => (
                <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
                  <Link to={`/course/${course.id}`} state={course}> {/* Use Link for navigation */}
                    <div className="shadow rounded-lg hover:border-2 border-red-400">
                      <div className="max-w-sm bg-white rounded-lg">
                        <div className="p-4">
                          <img
                            className="rounded-lg"
                            src={course.image}
                            alt={course.title}
                          />
                        </div>
                        <div className="p-5">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
                            {course.title}
                          </h5>
                          <p className="text-gray-700">{course.description}</p>
                          <p className="text-black font-bold text-sm pt-4">
                            Created at: {new Date(course.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-xl">No courses available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admission;
