import React from "react";
import { Link, NavLink } from "react-router-dom";
import bgimage from "../image/image 303.svg";
import navlogo from "../image/Logo (2).svg";
import arrowleft from "../image/arrow_left.svg";
import arrowleft2 from "../image/Vector (1).svg";
import Footer from "../layout/Footer";
import OfferPage from "../component/OfferPage";

const About = () => {
  const navLinkClass = "cursor-pointer transition-colors duration-200";
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? `${navLinkClass} text-[#E17245] `
      : `${navLinkClass} text-white hover:text-[#E17245] flex`;

  return (
    <>
      <main
        style={{ backgroundImage: `url(${bgimage})` }}
        className="overflow-x-hidden text-white bg-cover bg-center min-h-screen relative "
      >
        <nav className=" w-11/12 container flex  xl:text-[20px]  left-0 right-0 justify-between mx-auto  bg-transparent py-[34px] shadow-2xl fixed top-0">
          <NavLink to="/">
            <img className="w-auto" src={navlogo} alt="" />
          </NavLink>

          <div className="hidden lg:flex xl:text-[20px] xl:gap-[34px] lg:gap-[16px] items-center">
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/About" className={getNavLinkClass}>
              About us
            </NavLink>
            <NavLink to="/RoomsFeatures" className={getNavLinkClass}>
              Rooms <img src={arrowleft} alt="" />
            </NavLink>
            <span className="cursor-not-allowed text-white hover:text-[#E17245] transition-colors">
              Facilities
            </span>
            <span className="cursor-not-allowed gap-2 text-white hover:text-[#E17245] transition-colors flex">
              Media <img src={arrowleft2} alt="" />
            </span>
            <span className="cursor-not-allowed text-white hover:text-[#E17245] transition-colors">
              Contact Us
            </span>
          </div>

          <div className="hidden lg:flex xl:text-[20px] items-center gap-[34px]">
            <button className="text-[16px] font-semibold cursor-not-allowed bg-[#E17245] px-[16px] py-[10px] rounded-[16px] shadow-xl text-white hover:bg-white hover:text-black transition-colors">
              Book Now
            </button>
          </div>
        </nav>

        <div className="">
          <h1 className=" left-120 top-70 absolute  playfair-display font-bold items-center text-[70px] ">
            Rooms & Suites
          </h1>
          <p className=" left-128 top-90 absolute  courgette-regular text-[22px] font-normal p-2">
            "Explore our rooms and experience comfort"
          </p>
        </div>
      </main>

      <section></section>
      <OfferPage/>

      <Footer />
    </>
  );
};

export default About;
