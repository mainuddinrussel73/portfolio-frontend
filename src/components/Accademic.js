import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const TimelineItem = ({ title, sub, ins, date, sdate,curr }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const sformattedDate = new Date(sdate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
  <div className="flex  items-start mb-12">
     <div className="flex flex-col items-center mb-2">
        <div className="w-6 h-6 bg-blue-500 rounded-full mt-1.5">
          <div className="w-64 h-24 ml-10 ">
            <h3 className="text-lg font-semibold  text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-2">{sub}</p>
            <p className="text-sm text-gray-800 mt-2 mb-2">{ins}</p>

            { curr ? (
                  <>
                    {
                       <p className="text-sm text-blue-500 mt-2 flex items-center">
                       <FontAwesomeIcon icon={faCalendar} className="mr-1" /> {sformattedDate} to Ongoing
                     </p>
                    }
                  </>
                ) : (
                  <>
                    {
                      <p className="text-sm text-blue-500 mt-2 flex items-center">
                        <FontAwesomeIcon icon={faCalendar} className="mr-1" /> {sformattedDate} to {formattedDate}
                      </p>
                    }
                  </>
            )}
            
          </div>
            
    
        </div>
        <div className="w-0.5 h-24 bg-blue-500"></div>
    </div>
   

  </div>
  )
};

const AwesomeJourney = ({userData,educationBackground,jobExperiences}) => {
  return (
    <div id='qualification' className="flex justify-center items-center min-h-screen bg-[#f1f5f9] p-10">
      <div className="w-[1000px] bg-[#f1f5f9] p-10">
        
        {/* Social Icons */}
        <div className="absolute left-10 top-1/4 flex flex-col space-y-4">
          <a  onClick={()=> window.open(userData.socialMediaLinks.facebook, "_blank")}  className="text-blue-500 text-xl"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a  onClick={()=> window.open(userData.socialMediaLinks.twitter, "_blank")}  className="text-blue-500 text-xl"><FontAwesomeIcon icon={faTwitter} /></a>
          <a  onClick={()=> window.open(userData.socialMediaLinks.linkedin, "_blank")}  className="text-blue-500 text-xl"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a  onClick={()=> window.open(userData.socialMediaLinks.github, "_blank")}  className="text-blue-500 text-xl"><FontAwesomeIcon icon={faGithub} /></a>
        </div>

        {/* Title Section */}
        <p className="text-blue-500 text-center text-lg font-semibold">MY Qualification</p>
        <h2 className="text-3xl font-bold text-gray-800 text-center mt-2">Awesome Journey</h2>

        {/* Education and Experience Sections */}
        <div className="mt-10  grid md:grid-cols-2 grid-cols-1 gap-x-16">
          
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center mb-8">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-blue-500" /> Education
            </h3>
            {educationBackground.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.degree}
                sub={item.fieldOfStudy}
                ins={item.institution}
                date={item.endDate}
                sdate={item.startDate}
                curr={item.current}
              />
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 flex items-center  mb-8">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-blue-500" /> Experience
            </h3>
            {jobExperiences.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.company}
                sub={item.position}
                ins={item.responsibilities}
                date={item.endDate}
                sdate={item.startDate}
                curr={item.current}
              />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwesomeJourney;