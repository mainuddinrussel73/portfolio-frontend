// src/components/TestimonialSlider.js
import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';


const TestimonialSlider = ({clientReviews}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const formatdate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  }
  

  return (
    <div id='testimonial' className="bg-gray-50 font-nunito py-12">
      <div className="max-w-3xl mx-auto px-6 py-8 ">
        <div className="text-center mb-8">
          <p className="text-blue-500 font-semibold">Testimonial</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">My Client Saying</h2>
        </div>

        {/* Slider Component */}
        <Slider {...settings}>
          {clientReviews.map((testimonial, index) => (
            <div key={index} className="px-4 bg-white border rounded-lg">
              <div className="flex flex-row items-center text-center p-2 ">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-20 h-20 rounded-full border-4 -mx-4 border-blue   mb-4"
                />
                <div className='flex flex-col text-left ml-8'>
                  <h3 className="font-semibold text-gray-800 ">{testimonial.clientName}</h3>
                  <p className="text-gray-500 text-sm mb-2">{formatdate(testimonial.date)}</p>
                </div>
                
                <div className="flex justify-end space-x-0.5 text-blue-500 mb-6 ml-8 ">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
               
              </div>
              <div className=''>
                <p className="text-gray-600 text-sm leading-relaxed mb-10">
                  {testimonial.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
