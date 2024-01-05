import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Aboutcontent from '../components/Aboutcontent';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ABOUT" text=""/>
      <Aboutcontent />
      <Footer/>
    </div>
  )
}

export default About