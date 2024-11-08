import logo from './logo.svg';
import './App.css';

// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Accademic from './components/Accademic';
import ServicesSection from './components/Services';
import PortfolioSection from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MoveToTopButton from './components/movetotop'; 

const App = () => {
  const [userData, setuserData] = useState([]);
  const [specialization, setSpecialization] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://protfolio-backend-s5b1.onrender.com/user')
     .then(response => {
       console.log(response.data[0]);
       setuserData(response.data[0]);
       setSpecialization(response.data[0].specializations);
       setLoading(false);
     })
     .catch(error => {
       setError('Error fetching offers data');
       setLoading(false);
     });
   }, []);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen">
      <Header />
      <Hero userData={userData}/>
      <About userData={userData}/>
      <Skills pskills={userData.programmingLanguages}  fskills={userData.frameworkSkills} />
      <Accademic userData={userData} educationBackground={userData.educationBackground} jobExperiences={userData.jobExperiences} />
      <ServicesSection specialization={specialization}/>
      <PortfolioSection completedProjects={userData.completedProjects}/>
      <Contact />
      <Testimonials clientReviews={userData.clientReviews} />
      <Blog />
      <ContactSection userData={userData}/>
      <Footer userData={userData} />
      <MoveToTopButton />
    </div>
  );
};



export default App;
