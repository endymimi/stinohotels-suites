import React, { useState } from "react";
import logo from "../image/Logo (2).svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
  const navigate = useNavigate();
  navigate("/RoomsFeatures");
     

   const navLinkClass =
    "cursor-pointer transition-colors duration-200"; 
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? `${navLinkClass} text-[#E17245]`
      : `${navLinkClass} text-white hover:text-[#E17245]`;



  return (
    <>
       <div className="w-full fixed top-0 left-0 right-0 z-10 bg-transparent shadow-2xl">
        <div className="w-11/12 container mx-auto flex justify-between py-[34px] items-center">
            <NavLink
            to="/">
                <div className="w-auto">
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
          <div className="hidden lg:flex xl:text-[20px] items-center gap-[34px]">
            <button className="text-[16px] font-semibold cursor-not-allowed bg-[#E17245] px-[16px] py-[10px] rounded-[16px] shadow-xl text-white hover:bg-white hover:text-black transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 rounded-full bg-[#E17245] text-white hover:bg-slate-600 transition-colors"
            >
              {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        >
          <div
            className="fixed top-0 right-0 h-auto w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out rounded-bl-2xl"
            onClick={(e) => e.stopPropagation()}
          >
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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-lg text-[#E17245] py-2 border-b border-gray-200"
                      : "block text-lg text-gray-800 hover:text-[#E17245] py-2 border-b border-gray-200"
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-lg text-[#E17245] py-2 border-b border-gray-200"
                      : "block text-lg text-gray-800 hover:text-[#E17245] py-2 border-b border-gray-200"
                  }
                  onClick={toggleMenu}
                >
                  About us
                </NavLink>
                <NavLink
                  to="/rooms"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-lg text-[#E17245] py-2 border-b border-gray-200"
                      : "block text-lg text-gray-800 hover:text-[#E17245] py-2 border-b border-gray-200"
                  }
                  onClick={toggleMenu}
                >
                  Rooms
                </NavLink>
                <span className="block text-lg text-gray-400 cursor-not-allowed py-2 border-b border-gray-200">
                  Facilities
                </span>
                <span className="block text-lg text-gray-400 cursor-not-allowed py-2 border-b border-gray-200">
                  Media
                </span>
                <span className="block text-lg text-gray-400 cursor-not-allowed py-2 border-b border-gray-200">
                  Contact Us
                </span>
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
    </>
            
               
                    
    
  );
};

export default Nav;
