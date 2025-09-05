import React from "react"
import calender from "../image/solar_calendar-bold.png";

const Hero = () => {
  return (
    <>
      <div className="hero w-full min-h-screen ">
        <div className="container mx-auto">
          <div className=" text-white flex flex-col justify-center text-center leading-12 pb-[276px]">
            <h1 className="playfair-display font-bold text-[70px] ">
              Stino Hotels and Suites
            </h1>
            <p className="courgette-regular text-[22px] font-normal">
              "Where modern elegance meets true comfort. Welcome to your home
              away from home."
            </p>
          </div>
          <div className="flex justify-between bg-white py-[41px] px-[55px] mb-10">
            <div className="flex items-center gap-2   border-r px-4">
              <div className="flex flex-col  pr-8">
                <h6 className="font-semibold text-[20px]">Check In</h6>
                <p className="text-sm font-extralight">Enter Date</p>
              </div>
              <span>
                <img className=" " alt="vector" src={calender} />
              </span>
            </div>
            <div className="flex items-center gap-2  border-r  px-4">
              <div className="flex flex-col pr-8">
                <h6 className="font-semibold text-[20px]">Check In</h6>
                <p className="text-sm font-extralight">Enter Date</p>
              </div>
              <span>
                <img className=" " alt="vector" src={calender} />
              </span>
            </div>
            <div className="flex items-center gap-2  border-r  px-4">
              <div className="flex flex-col pr-8">
                <h6 className="font-semibold text-[20px]">Room</h6>
                <p className="text-sm font-extralight">Select Room</p>
              </div>
              <span>
                <img className=" " alt="vector" src={calender} />
              </span>
            </div>
            <div className="">
              <button className=" text-[16px] font-semibold bg-[#E17245] px-[16px] py-[20px] rounded-[16px] shadow-xl text-white">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
