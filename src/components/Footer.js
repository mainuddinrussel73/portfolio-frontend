import React from 'react';
import { CIcon } from '@coreui/icons-react';
import {  cibLeetcode } from '@coreui/icons';

const Footer = ({userData}) => {
  return (
    <footer className="bg-[#0e0b33] text-white py-12 flex flex-col items-center space-y-6">
      
      {/* Logo */}
      <div className="bg-white text-[#0e0b33] font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-md">
        R.
      </div>
      
      {/* Description Text */}
      <p className="text-center text-gray-400 max-w-md text-sm leading-relaxed">
       {userData.details}
      </p>
      
      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a onClick={()=> window.open(userData.socialMediaLinks.facebook, "_blank")} className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
          <i className="fab fa-facebook-f text-white"></i>
        </a>
        <a onClick={()=> window.open(userData.socialMediaLinks.twitter, "_blank")} className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
          <i className="fab fa-twitter text-white"></i>
        </a>
        <a onClick={()=> window.open(userData.socialMediaLinks.linkedin, "_blank")} className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
          <i className="fab fa-linkedin-in text-white"></i>
        </a>
        <a onClick={()=> window.open(userData.socialMediaLinks.leetcode, "_blank")} className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
        <CIcon icon={cibLeetcode} size="xl"/>

        </a>
        <a onClick={()=> window.open(userData.socialMediaLinks.github, "_blank")} className="bg-blue-500 w-8 h-8 flex items-center justify-center rounded-full">
          <i className=" fab fa-github text-white">
          </i>
        </a>
      </div>
      
      {/* Copyright Text */}
      <p className="text-gray-500 text-sm">
        All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;