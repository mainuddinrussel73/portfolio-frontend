// src/components/Services.js
import React from 'react';

const services = [
  { title: 'SEO', description: 'Optimize your website for search engines to increase visibility.' },
  { title: 'Content Writing', description: 'Create engaging and relevant content for your audience.' },
  { title: 'Social Media Marketing', description: 'Build and grow your brand’s presence on social media.' },
];

const SkillBar = ({ skill, percentage }) => (
  <div className="flex items-center mb-4">
    <span className="w-1/2 text-gray-800">{skill}</span>
    <span className="w-1/2 flex items-center">
      <div className="w-full bg-gray-100 h-2 rounded-lg mr-2 overflow-hidden">
        <div
          className="bg-blue-500 h-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-gray-800 font-semibold">{percentage}%</span>
    </span>
  </div>
);

const ExpertiseArea = ({pskills,fskills}) => {
  return (
    <section id='skills' className="flex justify-center items-center  bg-[#E4E6E5]">
      <div className="w-[900px] bg-[#E4E6E5] p-10">
        
        {/* Title Section */}
        <p className="text-blue-500 text-center text-lg font-semibold">Why Choose Me</p>
        <h2 className="text-3xl font-bold text-gray-800 text-center mt-2">My Expertise Area</h2>

        {/* Skills Section */}
        <p className="text-blue-500 text-center text-lg font-semibold mt-10">Language Skill</p>

        <div className="mt-10 grid grid-cols-2 gap-x-16 gap-y-6">
          {pskills.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} percentage={skill.proficiency} />
          ))}
        </div>
        <p className="text-blue-500 text-center text-lg font-semibold mt-10">Framework Skill</p>

        <div className="mt-10 grid grid-cols-2 gap-x-16 gap-y-6">
          {fskills.map((skill, index) => (
            <SkillBar key={index} skill={skill.name} percentage={skill.proficiency} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseArea;
