import React, { useState } from "react";
import logo from "../image/Logo (2).svg";
import {  NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
 
     

   const navLinkClass =
    "cursor-pointer transition-colors duration-200"; 
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? `${navLinkClass} text-[#E17245]`
      : `${navLinkClass} text-white hover:text-[#E17245]`;



  return (
    <>
       <div className="w-full fixed top-0 left-0 right-0 z-10 bg-transparent shadow-2xl">
        <div className="w-[94%] container mx-auto flex justify-between py-[34px] items-center">
            <NavLink
            to="/">
                <div className="w-auto flex gap-2 text-white items-center text-[23px] font-bold">
            <img alt="vector" src={logo} />
            </div>
          </NavLink>

          {/* Desktop Menu */}
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
            <span className="cursor-not-allowed text-white hover:text-[#E17245] transition-colors">
              Media
            </span>
            <span className="cursor-not-allowed text-white hover:text-[#E17245] transition-colors">
              Contact Us
            </span>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex xl:text-[20px] items-center gap-[34px] text-white">
            <button className="text-[16px] font-semibold cursor-not-allowed bg-[#E17245] px-[16px] py-[20px] rounded-[16px] shadow-xl text-white hover:bg-white hover:text-black transition-colors">
              Book Now
            </button>
          </div>

          <div className="lg:hidden  ">
                    <button 
                        onClick={toggleMenu}
                        className="p-3 rounded-full bg-[#E17245] text-white hover:bg-slate-600 transition-colors"
                    >
                        {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>
            
            {/* for mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed  inset-0 transparent bg-opacity-50 z-20" onClick={toggleMenu}>
                    <div className="fixed top-0 right-0 h-auto w-80 transparent bg-[#E17245] opacity-95 shadow-xl transform transition-transform duration-300 ease-in-out rounded-bl-2xl">
                        <div className="flex justify-end p-6">
                            <button 
                                onClick={toggleMenu}
                                className="p-2 rounded-full bg-slate-500 text-white hover:bg-slate-600 transition-colors"
                            >
                               <IoMdClose />
                            </button>
                        </div>
                        
                        <div className="px-6 py-4 space-y-6">
                            <div className="space-y-4">
                                <NavLink to='/'>
                                <p className="text-lg text-gray-200 cursor-pointer hover:text-[#E17245] transition-colors py-2 border-b border-gray-200">
                                    Home
                                </p></NavLink>
                                <NavLink to='/about'>
                                <p className="text-lg text-gray-200 cursor-pointer hover:text-[#E17245] transition-colors py-2 border-b border-gray-200">
                                    About us
                                </p></NavLink>
                                <p className="text-lg text-gray-200 cursor-pointer hover:text-[#E17245] transition-colors py-2 border-b border-gray-200">
                                    Rooms
                                </p>
                                <p className="text-lg text-gray-200 cursor-not-allowed hover:text-[#E17245] transition-colors py-2 border-b border-gray-200">
                                    Facilities
                                </p>
                                <p className="text-lg text-gray-200 cursor-not-allowed hover:text-[#E17245] transition-colors py-2 border-b border-gray-200">
                                    Media
                                </p>
                                 <p className="text-lg cursor-not-allowed text-gray-200  hover:text-[#E17245] transition-colors py-2 border-b border-gray-200">Contact Us</p>
                            </div>
                            <div className="flex flex-col gap-3 pt-6">
                                  <button className="text-[16px] font-semibold cursor-not-allowed bg-[#E17245] px-[16px] py-[20px] rounded-[16px] shadow-xl text-white hover:bg-white hover:text-black transition-colors">
                        Book Now
                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
            
               
                    
    
  );
};

export default Nav;
