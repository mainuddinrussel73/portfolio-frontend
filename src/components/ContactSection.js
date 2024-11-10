import React from 'react';

const ContactForm = ({userData}) => {
  return (
    <div id='mycontact' className="bg-white min-h-screen flex justify-center items-center py-12">
      <div className="w-full mx-auto px-4 lg:px-0">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-blue-500 font-semibold">Contact Me</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Get in Touch</h2>
        </div>

        {/* Form and Contact Info Container */}
        <div className="flex flex-col lg:flex-row">
          
          {/* Contact Form */}
          <div className="space-y-8 w-fit md:w-3/5 md:ml-6 ml-0 ">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
            <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 w-full md:w-2/5 md:ml-10 ml-2  mt-10 md:mt-0 ">
             
            {/* Contact Method 1 - Call Me */}
            <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                <p className="text-gray-800 font-semibold">Call Me</p>
                <p className="text-gray-600">{userData.mobile}</p>
                <p className="text-gray-600">{userData.mobile}</p>
                </div>
            </div>

            {/* Contact Method 2 - E-mail */}
            <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
                <i className="fas fa-envelope"></i>
                </div>
                <div>
                <p className="text-gray-800 font-semibold">E-mail</p>
                <p className="text-gray-600">{userData.email}</p>
                <p className="text-gray-600">mainuddinrussell@outlook.com</p>
                </div>
            </div>

            {/* Contact Method 3 - Location */}
            <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white md:w-16 w-20 h-10 flex items-center justify-center rounded-full">
                <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                <p className="text-gray-800 font-semibold">Location</p>
                <p className="text-gray-600 w-fit  ">{userData.address}</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;