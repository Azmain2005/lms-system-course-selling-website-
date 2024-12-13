import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ohiVai from "../assets/ohiVai.png";

function CourseDetails() {
  const location = useLocation(); // Get the current location
  const course = location.state; // Get the course data from the state

  return (
    <div>
      <Navbar />
      <div className="container grid grid-cols-1 gap-4 lg:grid-cols-2 mt-24">
        <div className="order-2 lg:order-1 sm:order-2">
          <p className="text-3xl font-bold">Teachers:</p>
          <div className="flex">
            <div className="p-3">
              <img
                src={course.teacherImage || ohiVai} // Use the course's teacher image or a default one
                className="w-[50px] h-[50px] rounded-full mr-10"
                alt=""
              />
              <p>
                {course.teacher || "Unknown Teacher"},
                <br />
                BUET
              </p>
            </div>
            {/* Add more teachers if needed */}
          </div>
          <hr />
          <p>{course.bigDescription}</p>
          {/* More course details can be added here */}
        </div>

        <div className="order-1 lg:order-2 sm:order-1">
          <div>
            {/* YouTube Embed */}
            <img
                            className="rounded-lg"
                            src={course.image}
                            alt={course.title}
                          />

            {/* Course Features List */}
            <ul className="grid grid-cols-2 gap-[0.3rem] bg-slate-100 p-10 rounded-lg">
              {/* List features here */}
            </ul>

            <div className="flex justify-between items-center bg-red-100">
              <p className="text-ostad-warning-100 text-h5 sm:!text-[30px] p-3">
                ৳{course.price || "N/A"} {/* You can add a price field in course data */}
              </p>
              <button
                type="submit"
                className="flex justify-center gap-2 items-center m-3 shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
              >
                Buy this course  
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default CourseDetails;
