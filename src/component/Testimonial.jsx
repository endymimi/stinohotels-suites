import React from 'react'
import star from '../image/Frame 1000006988.svg';
import img from '../image/Ellipse 6964.svg';
import img1 from '../image/Ellipse 6964 (1).svg';
import indicator from '../image/Indicator.svg';
import arrow from '../image/mdi_arrow-left-bold.svg';






const Testimonial = () => {
  
  
  
  return (

    <>
    <div className="w-full pb-29">
            <div className="container mx-auto flex flex-col gap-[60px]">
                 <div className="flex flex-col ">
              <div className="flex justify-center ">
                    <p className="courgette-regular text-[#E17245] font-normal text-[32px]">Testimonials</p>
                    <p className="border-b w-20 border-[#E17245]"></p>
                </div>
                <div className=" text-center">
                    <h1 className="playfair-display font-bold text-[48px]">What Our Guests Are Saying</h1>
                </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col items-center border-r  border-[#E17245] ">
                  <div className="mb-4">
                    <img className=" "  alt="vector" src={star} />
                  </div>
                  <div>
                    <p className="text-sm text-center font-extralight w-[35%] mx-auto ">The staff were so friendly and welcoming. My room was spotless and super cozy. I’ll definitely be coming back!</p>
                  </div>
                  <div className="flex gap-4 items-center mt-[32px]">
                     <img className=" "  alt="vector" src={img} />
                    <p className="text-sm font-extralight">Samuel A., Abuja</p>
                  </div>
            </div>
             <div className="flex justify-between items-center">
                <div className="flex flex-col items-center  ">
                  <div className="mb-4">
                    <img className=" "  alt="vector" src={star} />
                  </div>
                  <div>
                    <p className="text-sm text-center font-extralight w-[35%] mx-auto ">I booked the Executive Room for a work trip and was impressed with the Wi-Fi speed, quiet atmosphere, and the food!</p>
                  </div>
                  <div className="flex gap-4 items-center mt-[32px]">
                     <img className=" "  alt="vector" src={img1} />
                    <p className="text-sm font-extralight">Samuel A., Abuja</p>
                  </div>
            </div>
            <div className="">
                    <img className=" "  alt="vector" src={arrow} />
                  </div>
             </div>
          </div>
          <div className="flex justify-center">
             <img className=" "  alt="vector" src={indicator} />
          </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial