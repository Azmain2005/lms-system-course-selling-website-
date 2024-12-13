import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Webcam from 'react-webcam';  // Import the Webcam component

import heroBanner from '../assets/heroBanner.png';
import logo from '../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);  // Camera state
  const [selfie, setSelfie] = useState(null);  // Selfie photo data
  const navigate = useNavigate();

  const webcamRef = React.useRef(null);  // Reference for the Webcam component

  const handleSubmit = async (e) => {
    e.preventDefault();   
    try {
      const { emailArray, phoneArray, userData } = await fetchUserEmailsAndPhones();
      let isMatchFound = false;
      for (let i = 0; i < emailArray.length; i++) {
        if (emailArray[i] === email && phoneArray[i] === number) {
          isMatchFound = true;
          console.log("matched");

          // Store user data in localStorage
          localStorage.setItem('user', JSON.stringify(userData[i]));
          
          navigate('/mycourses');
          break;
        }
      }
  
      if (isMatchFound) {
        setError(null);  
      } else {
        setError(<>
          Email or phone number does not<br />
          match our records.
        </>);
      }
  
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };
  
  async function fetchUserEmailsAndPhones() {
    const emailArray = [];
    const phoneArray = [];
    const userData = [];
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/formusers/");
      const data = await response.json();
  
      data.forEach(user => {
        emailArray.push(user.email);
        phoneArray.push(user.phone);
        userData.push(user);
      });
  
      return { emailArray, phoneArray, userData };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  // Open camera for selfie verification
  const openCamera = () => {
    setIsCameraOpen(true);
  };

  // Capture selfie from Webcam
  const captureSelfie = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSelfie(imageSrc);
    setIsCameraOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div
        className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-red-300 opacity-50 blur-md" />
        <div className="rounded-xl bg-white px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 relative z-10">
          <div className="text-black">
            <div className="mb-8 flex flex-col items-center">
              <img src={logo} width="150" alt="Logo" />
              <h1 className="mb-2 text-2xl">Break the Fear</h1>
              <span className="text-gray-700">Enter Login Details</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="email"
                  placeholder="id@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  name="number"
                  placeholder="your mobile number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              {/* Button to verify by selfie */}
              <div className="mb-4 text-lg flex justify-center">
                <button
                  type="button"
                  onClick={openCamera}
                  className="rounded-3xl bg-blue-500 px-6 py-2 text-white shadow-lg outline-none backdrop-blur-md transition-colors duration-300 hover:bg-blue-700"
                >
                  Verify by Selfie
                </button>
              </div>

              {error && <p className="text-red-500">{error}</p>}

              {/* Submit Button */}
              <div className="mt-8 flex justify-center text-lg">
                <button
                  type="submit"
                  className="rounded-3xl bg-red-400 bg-opacity-50 px-10 py-2 text-black border-4 border-red-400 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600 hover:text-white"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Webcam Modal for Capturing Selfie */}
        {isCameraOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white p-4 rounded-lg">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/png"
                className="w-full rounded-lg mb-4"
              />
              <button
                onClick={captureSelfie}
                className="rounded-3xl bg-green-500 px-6 py-2 text-white shadow-lg outline-none backdrop-blur-md transition-colors duration-300 hover:bg-green-700"
              >
                Capture Selfie
              </button>
            </div>
          </div>
        )}

        {/* Display Captured Selfie */}
        {selfie && (
          <div className="absolute bottom-12 left-2 p-2 bg-white rounded-lg shadow-lg z-20">
            <h3 className="text-center font-bold mb-2">Captured Selfie</h3>
            <img src={selfie} alt="Selfie" className="w-32 h-32 object-cover rounded-full mx-auto" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
