
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./layout/Nav";
import Hero from "./component/Hero";
import Facilities from "./component/Facilities";
import Testimonial from "./component/Testimonial";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import RoomsFeatures from "./pages/RoomsFeatures";
import About from "./pages/About";

import "./App.css";


function App() {
  
  return (

    <>
    <BrowserRouter>

    <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/RoomsFeatures" element={<RoomsFeatures/>} />
         <Route path="/About" element={<About/>} />

    {/* <Hero />
    <About />
    <Room />
    <Facilities />
    <Testimonial />
    <Footer /> */}
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;