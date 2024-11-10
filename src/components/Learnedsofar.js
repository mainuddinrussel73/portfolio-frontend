// SkillsSection.jsx

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaTools } from "react-icons/fa";

const skillsData = [
  {
    title: "Development Foundations and Setup",
    skills: [
      { name: "Visual Studio Code, Git, Node.js, Command Line Interface" },
      { name: "Setting up development environment" },
      { name: "Version control with Git" },
    ],
  },
  {
    title: "Front-End Development",
    skills: [
      { name: "HTML & CSS basics, Box model, Flexbox, Grid layout" },
      { name: "Tailwind CSS, DaisyUI, ShadcnUI, Material UI" },
      { name: "JavaScript (JS): ES6, functions, arrays, objects" },
      { name: "React: JSX, props, state management, routing" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js and Express.js for REST APIs" },
      { name: "JWT for authentication, MongoDB, SQL basics" },
      { name: "CRUD operations, routes, middlewares" },
    ],
  },
  {
    title: "Project and Remote Team Collaboration",
    skills: [
      { name: "Project Management Tools: Asana, Trello, Jira" },
      { name: "Agile methodologies for team collaboration" },
    ],
  },
  {
    title: "Advanced Front-End with Next.js",
    skills: [
      { name: "Next.js setup, pages, routing, server-side rendering" },
      { name: "Lazy loading, SEO metadata, image optimization" },
    ],
  },
  {
    title: "Software Development and Job Preparation",
    skills: [
      { name: "Leetcode, Hackerrank for problem-solving" },
      { name: "Typescript: types, interfaces, polymorphism" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div id='learnedsofar' className="bg-gray-100 py-8 px-4">
        <p className="text-blue-500 text-center text-lg font-semibold">What I Learned</p>

        <h2 className="text-3xl font-bold text-center mb-8">Skills & Tools Overview</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {skillsData.map((section, idx) => (
          <SkillCard key={idx} title={section.title} skills={section.skills} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full flex justify-between items-center p-6 bg-indigo-600 text-white text-xl font-semibold"
    >
      <div className="flex items-center space-x-3">
        <FaTools className="text-2xl" />
        <span>{title}</span>
      </div>
      <span className="text-2xl">{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
    </button>
    {isOpen && (
      <ul className="p-4 space-y-3 bg-gray-50 rounded-b-xl">
        {skills.map((skill, idx) => (
          <li
            key={idx}
            className="flex items-center text-gray-700 text-base bg-white rounded-lg shadow-sm p-3 transition-colors duration-200 hover:bg-indigo-100"
          >
            <span className="mr-3 text-indigo-600">&#8226;</span>
            {skill.name}
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default SkillsSection;
