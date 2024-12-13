import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const OfflineForm = () => {
  // State to manage form inputs and file upload
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    class: '',
    phone: '',
    gender: '',
    email:'',
    image: null, // For storing the image file
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle form submission including file
    const formSubmissionData = new FormData();
    formSubmissionData.append('name', formData.name);
    formSubmissionData.append('phone', formData.phone);
    formSubmissionData.append('batch', formData.batch);
    formSubmissionData.append('Class', formData.class);
    formSubmissionData.append('gender', formData.gender);
    formSubmissionData.append('email', formData.email);
    if (formData.image) {
      formSubmissionData.append('image', formData.image);
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/formusers/', {
        method: 'POST',
        body: formSubmissionData,
      });

      if (response.ok) {
        const responseData = await response.json(); // Get the response data
        alert('Form submitted successfully!');
        console.log('Response data:', responseData);

        // Clear the form fields after successful submission
        setFormData({
          name: '',
          batch: '',
          class: '',
          phone: '',
          gender: '',
          email:'',
          image: null,
        });
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-red-500 mb-6">Offline Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            />
          </div>

          {/* Batch */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Batch</label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleInputChange}
              placeholder="Enter your batch"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            />
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              placeholder="Enter your class"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            />
          </div>

          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            />
          </div>
          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default OfflineForm;
