import React from "react";
import heroImage from "../assets/heroBanner.png";
import { IoTimeSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

function Hero() {
  return (
    <>
      <section className="bg-red-200 py-20 ">
        <div className="container">
          <div className=" grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* column 1 */}
            <div className=" order-2 lg:order-1">
              <p className="text-black">The best access to easy learning</p>
              <h1 className="text-5xl font-bold mb-4">
                The best <span className="text-red-500">Platform</span> for
                Enhanced Education
              </h1>
              <p className="text-gray-700 mb-6">
                Working collaboratively to ensure every student achieves
                academically, socially, and emotionally.
              </p>
              <div className="flex">
                <div className="flex items-center">
                  <IoTimeSharp className="text-red-700 m-2" size={23} />
                  <p className="pr-6  text-gray-700">Lifetime access</p>
                </div>
                <div className="flex items-center">
                  <FaBookOpen className="text-red-700 m-2" size={23} />
                  <p className="pr-6 text-gray-700">Expert Instructor</p>
                </div>
                <div className="flex items-center">
                  <FaSchool className="text-red-700 m-2" size={23} />
                  <p className=" text-gray-700">Learn from anywhere</p>
                </div>
              </div>
            </div>
            {/* colomn 2 */}
            <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
              <img
                src={heroImage}
                alt=""
                className="rounded-lg shadow-lg"
                style={{
                  boxShadow: "0px 2px 20px 1px rgba(0 0 0 / 0.14)" // Override Tailwind's default shadow
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between text-center md:text-center">
          <div className="flex-1 ">
            <h2 className="text-5xl font-bold ">500+</h2>
            <p className="mt-2 text-red-500 text-lg ">online classes</p>
          </div>

          <div className="border-l-2 border-red-600 h-16 mx-8 hidden sm:block"></div>

          <div className="flex-1">
            <h2 className="text-5xl font-bold">100+</h2>
            <p className="mt-2 text-red-500 text-lg">expert mentors</p>
          </div>

          <div className="border-l-2 border-red-600 h-16 mx-8 hidden sm:block"></div>

          <div className="flex-1">
            <h2 className="text-5xl font-bold">1 million+</h2>
            <p className="mt-2 text-red-500 text-lg">rate and review</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
