import React from 'react'
import image from '../image/fluent_vehicle-car-parking-48-filled.svg';
import image1 from '../image/material-symbols_laundry.svg';
import image2 from '../image/material-symbols_wifi.svg';
import image3 from '../image/mdi_guest-room.svg';
import image4 from '../image/streamline-ultimate_swimming-pool-stairs-bold.svg';




const Facilities = () => {
  
  
  return (
    
    <>
    <div className="w-full pb-29">
        <div className="container mx-auto flex flex-col gap-[60px] ">
                  <div className="flex flex-col">
              <div className="flex justify-center ">
                    <p className="courgette-regular text-[#E17245] font-normal text-[32px]">Facilities</p>
                    <p className="border-b w-20 border-[#E17245]"></p>
                </div>
                <div className=" text-center">
                    <h1 className="playfair-display font-bold text-[48px]">What Our Guests Are Saying</h1>
                </div>
          </div>
          <div className=" xl:w-[70%] lg:w-[95%] mx-auto flex items-center pb-29">
            <div className="hidden lg:block relative border border-[#E17245] bg-white p-[70px] flex flex-col items-center ">
                 <img className=" "  alt="vector" src={image4} />
                 <p className="text-sm font-extralight">Swimming Pool</p>
                 <div className="absolute  border border-[#E17245] -bottom-30 -right-44 bg-white p-[72px] flex flex-col items-center ">
                     <img className=" "  alt="vector" src={image2} />
                 <p className="text-sm font-extralight">Free Wifi</p>
                     <div className="absolute  border border-[#E17245] -top-30 -right-44 bg-white p-[70px] flex flex-col items-center ">
                     <img className=" "  alt="vector" src={image3} />
                 <p className="text-sm font-extralight">Room Service</p>
                   <div className="absolute  border border-[#E17245] -bottom-30 -right-44 bg-white p-[70px] flex flex-col items-center ">
                     <img className=" "  alt="vector" src={image} />
                 <p className="text-sm font-extralight">Free Parking</p>
                  <div className="absolute  border border-[#E17245] -top-30 -right-48 bg-white p-[70px] flex flex-col items-center ">
                     <img className=" "  alt="vector" src={image1} />
                 <p className="text-sm font-extralight">Laundry Service</p>
                 </div>
                 </div>
                 </div>
                 </div>
            </div>
          </div>
           <div className="lg:hidden flex flex-col items-center gap-8">
            <div className=" border border-[#E17245] bg-white p-[64px] flex flex-col items-center ">
                 <img className=" "  alt="vector" src={image4} />
                 <p className="text-sm font-extralight">Swimming Pool</p>
            </div>
             <div className=" border border-[#E17245] -bottom-30 -right-44 bg-white p-[72px] flex flex-col items-center ">
                     <img className=" "  alt="vector" src={image2} />
                 <p className="text-sm font-extralight">Free Wifi</p>
                 </div>
                 <div className=" border border-[#E17245] -top-30 -right-44 bg-white p-[70px] flex flex-col items-center ">
                     <img className=" "  alt="vector" src={image3} />
                 <p className="text-sm font-extralight">Room Service</p>
                 </div>
                  <div className="border border-[#E17245] -bottom-30 -right-44 bg-white p-[70px] flex flex-col items-center ">
                     <img className=" "  alt="vector" src={image} />
                 <p className="text-sm font-extralight">Free Parking</p>
                 </div>
                  <div className="  border border-[#E17245] -top-30 -right-48 bg-white p-[60px] flex flex-col items-center ">
                     <img className=" "  alt="vector" src={image1} />
                 <p className="text-sm font-extralight">Laundry Service</p>
                 </div>
           </div>
        </div>
        </div>
    </>
   
  );
}

export default Facilities