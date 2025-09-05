import React from 'react'
import { AllProperties } from '../db';
import PropertyCards from '../utils/PropertyCards';




const Property = () => {


    return (
    <>
    <div className="w-full py-18">
         <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:flex-row gap-6 lg:gap-[25px] px-8  bg-white  text-left '>
        {
        AllProperties.map((item)=> (
            <div key={item?.id}>
                  <PropertyCards myProps={item} />
            </div>
        ))
      }
        </div>
         </div>
        </div>
    </>
  )
}

export default Property