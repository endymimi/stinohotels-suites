import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import img2 from '../assets/aboutusfoodinbed-img.png';
import { ImGit } from 'react-icons/im';





const AboutUs = () => {
  
    const navigate = useNavigate();
      navigate("AboutUs");
         
  
    return (

        <>
        <div className="w-full  py-29">
        <div className="container mx-auto px-6 lg:pr-18 flex flex-col lg:flex-row gap-[63px]">
            <div className="lg:w-[60%] flex flex-col gap-[40px] ">
              <div className="flex flex-col gap-[24px]">
                  <div className="flex">
                    <p className="courgette-regular text-[#E17245] font-normal text-[32px]">About Us</p>
                    <p className="border-b w-20 border-[#E17245]"></p>
                </div>
                <div className="flex flex-col ">
                    <h1 className="playfair-display font-bold text-[40px]">Where Comfort Meets Class</h1>
                    <p className="text-[20px] font-normal xl:w-[57%] text-[#4A2E24]">At Stino Hotels and Suites, modern design meets warm hospitality. Whether you're here for business or a weekend escape, we offer a stylish, comfortable stay that feels just like home.</p>
                </div>
                </div>
                <NavLink to='/AboutUs'>
                 <div>
                        <button className=" text-[16px] cursor-pointer font-semibold bg-[#E17245] px-[16px] py-[20px] rounded-[16px] shadow-xl text-white"> Learn More</button>
                    </div>
                    </NavLink>
            </div>
            <div>
                <div className="relative border w-[300px] h-[350px] border-[#E17245] bg-[#FAF5EF]">
                     <div className="relative -bottom-10 -right-14">
                         <img className="w-full "  alt="vector" src={img2} />
                     </div>
                </div>
               
            </div>
        </div>
      </div>
        </>
    
  )
}

export default AboutUs