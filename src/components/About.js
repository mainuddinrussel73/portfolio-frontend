// src/components/About.js
import React from 'react';
import propic from '../assets/images/propic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser, faPhone, faEnvelope, faMusic, faPlane, faFilm, faCamera } from '@fortawesome/free-solid-svg-icons';


const About = ({userData}) => {
  const categories = {
    FaMusic: faMusic,
    FaPlane: faPlane,
    FaFilm: faFilm,
    FaCamera: faCamera
  }
    
  return (
    <section id="about" className=" bg-white">
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="flex md:flex-row flex-col w-fit mx-20 bg-white rounded-lg ">
          
          {/* Left Section - Image */}
          <div className="relative w-auto h-min p-8 md:mx-20 mx-10 md:mt-10 bg-gray-100">
            <img
              src={propic}
              alt="Person"
              className="w-auto h-96 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 border-t-4 border-l-4 border-blue-500 w-10 h-10"></div>
            <div className="absolute bottom-4 right-4 border-b-4 border-r-4 border-blue-500 w-10 h-10"></div>
          </div>
          
          {/* Right Section - Content */}
          <div className="md:w-1/2 w-full p-8">
            {/* Title and Intro */}
            <p className="text-blue-500 text-lg font-semibold">My intro</p>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">About Me</h2>
            <p className="text-gray-600 mt-4">
                {userData.details}
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-blue-500 mr-2" />
                <span className="text-gray-800 font-semibold w-20">Name</span>
                <span className="text-gray-500 mx-2">:</span>
                <span className="text-gray-800">{userData.name}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
                <span className="text-gray-800 font-semibold w-20">Phone</span>
                <span className="text-gray-500 mx-2">:</span>
                <span className="text-gray-800">{userData.mobile}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
                <span className="text-gray-800 font-semibold w-20">Email</span>
                <span className="text-gray-500 mx-2">:</span>
                <span className="text-gray-800">{userData.email}</span>
              </div>
            </div>

            {/* Interests */}
            <h3 className="text-2xl font-bold text-gray-800 mt-10">My Interests</h3>
            <div className="flex space-x-8 mt-4 text-gray-800">
              {userData.interests.map((category, index) => (
                <div key={index} className="flex flex-col items-center">
                  <FontAwesomeIcon icon={categories[category.icon]} className='text-blue-500 text-xl' />
                  <span className="mt-2 text-sm">{category.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
