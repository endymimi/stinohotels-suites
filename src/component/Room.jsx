import React from 'react'
import img from '../assets/Standard Room.jpg';
import img1 from '../assets/Deluxe Room.jpg';
import img2 from '../assets/Executive Suites.jpg';
import icon from '../image/Vector (6).svg';




const Room = () => {
  
  
  return (
    
    
    <>
     <div className="w-full pb-29">
         <div className="flex flex-col gap-[80px] container mx-auto px-8">
             <div className="flex flex-col">
              <div className="flex lg:justify-center ">
                    <p className="courgette-regular text-[#E17245] font-normal text-[32px]">Rooms & Suites</p>
                    <h5 className="border-b w-20 border-[#E17245]"></h5>
                </div>
                <div className="flex flex-col  lg:items-center">
                    <h1 className="playfair-display font-bold text-[48px]">Find Your Perfect Stay</h1>
                    <h5 className="text-[20px] font-normal text-[#4A2E24] lg:w-[57%] lg:text-center">Choose from our range of thoughtfully furnished rooms—from cozy singles to elegant suites—all equipped to make your stay effortless.</h5>
                </div>
          </div>
           <div className="flex flex-col gap-[40px]">
             <div className="l xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[80px] ">
                          <div className="relative border w-[250px] h-[350px] xl:w-[300px] xl:h-[400px] rounded-xl border-[#E17245] bg-[#FAF5EF]">
                               <div className="relative -bottom-8 -right-10">
                                   <img className="w-full "  alt="vector" src={img} />
                                   <div className="flex flex-col mt-3">
                                    <h5 className="text-[#E17245] text-[24px] font-semibold">Standard Room</h5>
                                    <h5 className="text-sm font-extralight">₦30,000/night</h5>
                                   </div>
                               </div>
                          </div>
                          <div className="relative border w-[250px] h-[420px]  xl:w-[300px] xl:h-[500px] rounded-xl border-[#E17245] bg-[#FAF5EF]">
                               <div className="relative -bottom-8 -right-10">
                                   <img className="w-full "  alt="vector" src={img1} />
                                   <div className="flex flex-col mt-3 p-5">
                                    <h5 className="text-[#E17245] text-[24px] font-semibold">Deluxe Room</h5>
                                    <h5 className="text-sm font-extralight">₦60,000/night</h5>
                                   </div>
                               </div>
                          </div>
                           <div className="relative border w-[250px] h-[350px] xl:w-[300px] xl:h-[400px] rounded-xl border-[#E17245] bg-[#FAF5EF]">
                               <div className="relative -bottom-8 -right-10">
                                   <img className="w-full "  alt="vector" src={img2} />
                                   <div className="flex flex-col mt-3">
                                    <h5 className="text-[#E17245] text-[24px] font-semibold">Excecutive Suite</h5>
                                    <h5 className="text-sm font-extralight">₦100,000/night</h5>
                                   </div>
                               </div>
                          </div>
                      </div>
                       <div className="flex justify-center p-10">
                        <button className=" flex items-center cursor-not-allowed gap-4 text-[16px] font-semibold bg-[#E17245] px-[16px] py-[20px] rounded-[16px] shadow-xl text-white"> Explore More
                             <span>
                            <img className=""  alt="vector" src={icon} />
                        </span>
                        </button>
                    </div>
           </div>
         </div>
        </div>
    </>
  )
}

export default Room