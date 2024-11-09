import React, { useState } from 'react';
import course1 from '../assets/images/certificate1.png'
// Sample course data
import { FaExternalLinkAlt } from 'react-icons/fa';

const formatdate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  }

var CourseCard = ({ title, organization, completionDate,coursetopics, description, certificateLink, imageUrl }) => {
     // State to manage whether all items are shown
    const [showAll, setShowAll] = useState(false);

    // Split topics into an array and define visible items based on the showAll state
    const topicsArray = coursetopics.split(',').map(topic => topic.trim());
    const visibleTopics = showAll ? topicsArray : topicsArray.slice(0, 5);


    return (
        <div className="bg-gray-200 text-black rounded-lg p-6 m-4 ">
        <img
          src={imageUrl}
          alt={`${title} cover`}
          className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
        />
        <h3 className="text-2xl  text-gray-800 font-semibold mb-1">{title}</h3>
        <p className="text-sm font-medium text-gray-800 opacity-90 mb-2">{organization} • {new Date(completionDate).toLocaleDateString()}</p>
        <p className="text-gray-800 mt-2 mb-4">{description}</p>
        <ul className="list-disc list-inside space-y-1 text-gray-100">
            {visibleTopics.map((topic, index) => (
                <li key={index} className="leading-relaxed  text-gray-800">
                    {topic}
                </li>
                ))}
        </ul>
            
        {topicsArray.length > 5 && (
                <button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 text-yellow-800 hover:text-yellow-500 font-semibold text-sm"
                >
                {showAll ? 'Show Less' : 'Show More'}
                </button>
        )}
        <a
          href={certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mt-4 text-white bg-blue-600 p-2 w-fit rounded-lg hover:text-yellow-300 transition-colors text-sm font-semibold"
        >
          View Certificate <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
    );
};

const CoursesSection = ({userData}) => {
  return (
    <div id='cources' className="py-10 px-6 bg-gray-100">
       <div className="text-center mb-8">
          <p className="text-blue-500 font-semibold">Courses</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Courses & Certifications</h2>
        </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {userData.courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
