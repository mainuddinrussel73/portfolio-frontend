import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBullhorn, faVideo, faPenNib, faPaintBrush, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import { 
  faPalette,faCode,faGamepad,faBrain,faLaptopCode, faClipboardCheck, faInfinity, faBug, 
  faMobileAlt, faDesktop, faShieldAlt, faChartBar, faCloud, 
  faDatabase, faLink, faCubes, faNetworkWired, faLightbulb, faUserFriends 
} from '@fortawesome/free-solid-svg-icons';
import { faGitAlt,faFacebook,faAndroid } from '@fortawesome/free-brands-svg-icons';

const iconMap = {
  faCode: faCode,
  faFacebook: faFacebook,
  faAndroid: faAndroid,
  faGamepad: faGamepad,
  faBrain: faBrain,
  faLink: faLink,
  faDatabase: faDatabase,
  faMobileAlt: faMobileAlt,
  faLightbulb: faLightbulb,
  faNetworkWired: faNetworkWired,
  faPencilRuler: faPencilRuler,
  faGitAlt: faGitAlt,
  faShieldAlt: faShieldAlt,
};

const OfferCard = ({ icon, title, description }) => {
  return (
    <div class="md:w-64 w-4/5 justify-self-center rounded-tr-3xl border border-gray-300 p-6 mb-4 mt-4 relative">
    <div class="flex justify-start -mt-12">
      <div class="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded">
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
    </div>
    <div class="text-left mt-4">
      <h3 class="text-lg font-bold text-gray-800">{title}</h3>
      <p class="text-sm text-gray-600 mt-2">
        {description}
      </p>
    </div>
  </div>
  );
};

const WhatIOffer = ({specialization}) => {
 

 
  return (
    <section id="specialization" className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[900px]">
        <div className="text-center mb-12 mt-10">
          <p className="text-sm text-blue-500 font-medium">Specialized in</p>
          <h2 className="text-3xl font-bold text-gray-900">What I Offer</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {specialization.map((offer, index) => (
            <OfferCard
              key={index}
              icon={iconMap[offer.icon]}
              title={offer.title}
              description={offer.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;