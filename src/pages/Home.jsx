import React from 'react'
import Nav from '../layout/Nav';
import Hero from '../component/Hero';
import AboutUs from '../component/AboutUs';
import Room from "../component/Room";
import Facilities from '../component/Facilities';
import Testimonial from '../component/Testimonial';

import Footer from '../layout/Footer'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <AboutUs/>
        <Room/>
        <Facilities/>
         <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home