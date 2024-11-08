import React, { useState } from 'react';

const blogPosts = [
  { id: 1, title: 'Forfeited you engrossed butgay some', date: '01 Jan 2020', image: 'https://www.apple.com/v/ipad-10.9/d/images/overview/hero/hero__ecv967jz1y82_large.jpg' },
  { id: 2, title: 'Barton did feebly change man she afford', date: '02 Feb 2020', image: 'https://assets-prd.ignimgs.com/2023/05/02/best-macbooks-to-buy-2-1683051709961.jpg' },
  { id: 3, title: 'Am if number no up period regard sudden better', date: '03 Mar 2020', image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/rockcms/2024-09/240909-apple-iphone-16-mn-1445-ea02cf.jpg' },
 
];

const BlogSection = () => {

  // Determine the blogs to display

  return (
    <div id='blog' className="bg-[#f2f6ff] min-h-screen flex flex-col items-center py-12">
      <div className="text-center mb-10">
        <p className="text-blue-500 font-semibold">Blog</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Latest Updates</h2>
      </div>
      
      <div className="grid items-center grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg  overflow-hidden">
            <img src={post.image} alt={`Blog Image ${post.id}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <h3 className="text-gray-800 font-semibold">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      
      <button className="bg-blue-500  text-white font-semibold py-2 px-6 rounded-full mt-10">
        Show More
      </button>
      
    </div>
  );
};

export default BlogSection;
