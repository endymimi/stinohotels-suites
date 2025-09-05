import React from 'react'



const PropertyCards = ({myProps}) => {



  return (
    <>
     <div>
    <div>
        <img className='w-full' src={myProps.image} alt="" />
      </div>
      <div className=' px-3 flex flex-col gap-3 py-3 lg:py-6  text-[#4A2E24] '>
        <h2 className='text-[16px] lg:text-[28px] font-semibold'>{myProps.type}</h2>
        <h6 className='font-normal md:text-[17px] text-[14px]  '>{myProps.price}</h6>
      </div>
        </div>
    
    </>
  )
}

export default PropertyCards