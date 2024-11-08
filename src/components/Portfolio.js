import React from "react";
import recent1 from '../assets/images/recent1.png'
import recent2 from '../assets/images/recent2.png'
import recent3 from '../assets/images/recent3.jpg'
import recent4 from '../assets/images/recent4.png'

const formatdate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}
const ProjectCard = ({ project }) => (
  <div className="rounded-xl overflow-hidden border bg-white">
    <div className={`p-6 bg-gradient-to-r ${project.gradient} rounded-xl relative`}>
      <h2 className="text-3xl font-semibold text-black mb-4">{project.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>

      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <span>{formatdate(project.dateCompleted)}</span>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-300 bg-black p-1 rounded-lg flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8M12 8l4 4-4 4" />
          </svg>
          <p className="pr-2">View on GitHub</p>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologiesUsed.map((tech, index) => (
          <span key={index} className="bg-opacity-80 text-white bg-blue-600 text-xs px-3 py-1 rounded-full shadow-md">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const PortfolioSection = ({completedProjects}) => {
  return (
    <section id="portfolio" className="min-h-screen bg-[#f5f8ff] flex flex-col items-center py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-blue-500 font-medium">My Portfolio</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Recent Works</h2>
      </div>

      

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-5 ">
        {completedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Show More Button */}
      <button className="bg-blue-500  text-white font-semibold py-2 px-6 rounded-full mt-10">
        Show More
      </button>
    </section>
  );
};

export default PortfolioSection;