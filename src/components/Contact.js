import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-blue-500 text-center py-16 px-4">
      {/* Heading */}
      <h2 className="text-white text-2xl font-bold mb-4">
        Have a Project on Your Mind
      </h2>

      {/* Description */}
      <p className="text-white text-sm mb-8 max-w-md mx-auto leading-relaxed">
        Improve him believe opinion offered met and end cheered forbade.
        Friendly as stronger speedily by recurred cheered forbade. Friendly as
        stronger specially.
      </p>

      {/* Contact Button */}
      <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-md">
        Contact Me
      </button>
    </div>
  );
};

export default ContactSection;