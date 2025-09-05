import React from "react";
import { Link, NavLink } from "react-router-dom";
import navlogo from "../image/Logo (2).svg";
import arrowleft2 from "../image/Vector (1).svg";
import RoomHero from "../component/RoomHero";
import Property from "../component/Property";
import Footer from "../layout/Footer";


const RoomsFeatures = () => {
  const navLinkClass = "cursor-pointer transition-colors duration-200";
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? `${navLinkClass} text-[#E17245] `
      : `${navLinkClass} text-white hover:text-[#E17245] flex`;

  return (
    <>
      <main className="overflow-x-hidden text-white bg-cover bg-center min-h-screen relative "
      >
          <RoomHero/>

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
                        Rooms
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

        
      </main>

      <section></section>
       <Property/>

      <Footer />
    </>
  );
};

export default RoomsFeatures;
