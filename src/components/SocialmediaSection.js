import React from 'react';

const LinkedInPostsSection = () => {
  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-blue-500 font-semibold">Social Media</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our LinkedIn Updates</h2>
        </div>

        {/* LinkedIn Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LinkedIn Post 1 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <iframe
              title="LinkedIn Post 1"
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7259965270402695168"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>

          {/* LinkedIn Post 2 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <iframe
              title="LinkedIn Post 2"
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7259873895481032704"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>

          {/* LinkedIn Post 3 */}
          <div className="p-4 bg-white shadow-md rounded-lg">
            <iframe
              title="LinkedIn Post 3"
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7258765137329762304"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPostsSection;
