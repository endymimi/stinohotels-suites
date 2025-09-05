import React from "react"
import calender from "../image/solar_calendar-bold.png";

const Hero = () => {
  return (
    <>
      <div className="hero w-full  xl:min-h-screen ">
        <div className=" container mx-auto px-6 lg:px-0">
          <div className="text-white flex flex-col justify-center text-center lg:leading-12 lg:pb-[276px]">
            <h1 className="playfair-display font-bold lg:text-[70px] text-[30px]">
              Stino Hotels and Suites
            </h1>
            <p className="courgette-regular text-[16px] lg:text-[22px] font-normal">
              "Where modern elegance meets true comfort. Welcome to your home
              away from home."
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-[16px]  mt-8 bg-white py-[20px] md:px-[30px] lg:py-[41px] lg:px-[55px]">
            <div className="flex items-center justify-center  gap-3   lg:border-r px-">
              <div className="flex flex-col  pr-8">
                <h6 className="font-semibold text-[20px]">Check In</h6>
                <h6 className="text-sm font-extralight">Enter Date</h6>
              </div>
              <span>
                <img className=" " alt="vector" src={calender} />
              </span>
            </div>
            <div className="flex items-center gap-3  lg:border-r   px-2">
              <div className="flex flex-col  xl:pr-8">
                <h6 className="font-semibold lg:text-[20px]">Check In</h6>
                <h6 className="text-sm font-extralight">Enter Date</h6>
              </div>
              <span>
                <img className=" " alt="vector" src={calender} />
              </span>
            </div>
            <div className="flex items-center gap-3  lg:border-r  px-2 text-black">
              <div className="flex flex-col pr-8">
                <h6 className="font-semibold text-[20px]">Room</h6>
                <h6 className="text-sm font-extralight">Select Room</h6>
              </div>
              <span>
                <img className=" " alt="vector" src={calender} />
              </span>
            </div>
            <div className="">
              <button className=" text-[16px] font-semibold bg-[#E17245] px-[16px] py-[20px] rounded-[16px] shadow-xl text-white">
                Check Availabilit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
