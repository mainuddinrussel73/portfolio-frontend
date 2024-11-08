// src/components/Hero.js
import React from 'react';
import propic from '../assets/images/propic.png'
import { FaAward, FaClipboardCheck, FaHeadset } from 'react-icons/fa';

const Hero = ({userData}) => {
  return (
    <section id='home' className="flex flex-col items-center justify-center  py-10">
    <div className="flex flex-col md:flex-row items-center md:justify-between w-full pt-20 pb-12 bg-gray-300 mx-auto ">
      {/* Left Side - Text Content */}
      <div className="flex-1 text-center mx-20 md:text-left space-y-4">
        <p className="text-blue-500 text-lg">Hi, I am</p>
        <h1 className="text-4xl font-bold text-gray-800">{userData.name}</h1>
        <p className="text-xl text-gray-600">{userData.intro}</p>
        <p className="text-gray-500 mt-2">
          {userData.details}
        </p>
        {/* Buttons */}
        <div className="mt-6 md:space-x-4 space-y-4">
          <button onClick={()=> window.open(userData.cvDriveLink, "_blank")} className="px-5 py-2 md:mr-0 mr-1 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300">
            Download CV
          </button>
          <button className="px-5 py-2 border-2 border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-100 transition duration-300">
            Contact Me
          </button>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="flex-1 mt-8 md:mt-0 md:mr-40 flex justify-center">
        <img
          src={propic}
          alt="Stev Homlez"
          className=" w-40 h-auto md:w-48 md:h-auto"
        />
      </div>
    </div>

    {/* Stats Bar */}
    <div className="flex flex-col md:flex-row md:justify-between  md:items-center bg-white md:rounded-full rounded-lg shadow-md  p-4 w-auto max-w-4xl mx-auto -mt-12">
      
      {/* Card 1 */}
      <div className="flex  items-center space-x-4 p-4 ml-4 mr-4  border-r-0 md:border-r-2 md:border-gray-200">
        <div className="bg-blue-100 p-3 rounded-full">
          <FaAward className="text-blue-500 w-6 h-6" />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className="text-lg font-semibold text-gray-800">{userData.totalExperience} Job</h3>
          <p className="text-blue-500">Experience</p>
        </div>
      </div>
      
      {/* Card 2 */}
      <div className="flex items-center space-x-4 p-4 ml-4 mr-4 border-r-0 md:border-r-2 md:border-gray-200">
        <div className="bg-blue-100 p-3 rounded-full">
          <FaClipboardCheck className="text-blue-500 w-6 h-6" />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className="text-lg font-semibold text-gray-800">50+ Projects</h3>
          <p className="text-blue-500">Completed</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center space-x-4 p-4 ml-4 mr-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <FaHeadset className="text-blue-500 w-6 h-6" />
        </div>
        <div className='flex flex-col justify-center'>
          <h3 className="text-lg font-semibold text-gray-800">Support</h3>
          <p className="text-blue-500">Online 24/7</p>
        </div>
      </div>
      
    </div>
  </section>    
  );
};

export default Hero;
