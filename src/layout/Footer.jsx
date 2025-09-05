import React from 'react'
import logo from '../image/Logo (2).svg';
import { NavLink } from 'react-router-dom';
import call from '../image/Vector (3).svg';
import email from "../image/ic_baseline-email.svg";
import locate from '../image/mdi_location.svg';
import facebook from '../image/ic_baseline-facebook.svg';
import insta from '../image/Vector (4).svg';
import youtube from '../image/Vector (5).svg';
import twitter from '../image/mdi_twitter.svg';


const Footer = () => {
  
  
  
  return (
    <div>
     <div className="w-full bg-[#4A2E24] py-20 text-white">
            <div className="container mx-auto flex flex-col gap-[100px]  px-10">
                <div className="flex flex-col lg:flex-row lg:gap-[199px] xl:gap-[299px] px-10">
                    <div>
                     <NavLink to='/' className="flex gap-2  items-center text-[23px] font-bold">
                    <img className=" "  alt="vector" src={logo} />
                </NavLink>
                </div>
                <div className="flex flex-col lg:flex-row gap-[72px]">
                     <div className='flex flex-col gap-[16px]'>
                        <h1 className='text-[23px] font-bold mb-4 text-[#E17245]'>Quick Links</h1>
                       <NavLink to='/'>
                    <h5 className="cursor-pointer hover:text-[#E17245] transition-colors">Home</h5>
                    </NavLink>
                        <NavLink to='/about'>
                    <h5 className="cursor-pointer hover:text-[#E17245] transition-colors">About us</h5>
                    </NavLink>
                        <h5 className='cursor-not-allowed'>Contact Us</h5>
                        <h5 className='cursor-not-allowed'>Terms and Conditions</h5>
                        <h5 className='cursor-not-allowed'>Privacy Policy</h5>
                    </div>
                 <div className='flex flex-col gap-2'>
                    <div>
                        <h1 className='text-[23px] font-bold text-[#E17245] mb-4'>Contact Information</h1>
                    </div>
                    <div className='flex text-[15px] gap-3 font-normal '>
                    <img className="" alt="vector" src={call}/>
                    <h5>+234 916 034 3983</h5>
                    </div>
                    <div className='flex text-[15px] gap-3 font-normal'>
                    <img className="" alt="vector" src={email}/>
                    <h5>contactus@stinohotels.com</h5>
                    </div>
                     <div className='flex text-[15px] gap-3 font-normal'>
                          <img className="" alt="vector" src={locate}/>
                          <h5>12 Elegushi Street, Lekki, Lagos</h5>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                   <div>
                     <h5 className="text-[23px] font-bold text-[#E17245] mb-4">Follow Us</h5>
                   </div>
                   <div className="flex gap-3">
                     <img className="cursor-not-allowed" alt="vector" src={facebook}/>
                    <img className="cursor-not-allowed" alt="vector" src={twitter}/>
                    <img className="cursor-not-allowed" alt="vector" src={insta}/>
                    <img className="cursor-not-allowed" alt="vector" src={youtube}/>
                   </div>
                </div>
                </div>
                </div>
                <div>
                    <h5 className="text-[14px] text-center font-normal text-[#E17245]">© Copyrights reserved by Stino hotels</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer