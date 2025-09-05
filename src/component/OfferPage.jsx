import React from "react";
import img from "../image/image 308.svg";
import img1 from "../image/image 309.svg";
import box from "../image/Checkbox.svg";

const OfferPage = () => {
  return (
    <>
      <div className="w-full pt-20 pb-29">
        <div className="container mx-auto flex flex-col gap-[70px] px-8">
          <div className="lg:w-[96%] xl:w-[75%] mx-auto text-[24px] font-light text-center">
            <h6>
              Stino Hotels and Suites was built on the belief that hospitality
              should feel personal, not transactional. Nestled in the heart of
              [Location], we offer stylish comfort, excellent service, and a
              peaceful atmosphere that welcomes travelers from all walks of
              life. Whether it’s your first visit or your tenth, our mission is
              simple: to make you feel valued, rested, and well cared for.
            </h6>
          </div>
          <div className="flex flex-col gap-[40px] lg:pb-29">
            <div className="flex lg:justify-center ">
              <p className="courgette-regular text-[#E17245] font-normal text-[32px]">
                What we Offer
              </p>
              <p className="border-b w-20 border-[#E17245]"></p>
            </div>
            <div className="flex flex-col lg:flex-row gap-[20px]  lg:px-4">
              <div className="relative lg:w-[60%] mb-18  ">
                <img
                  className="w-[75%] lg:w-[90%] h-[98%]"
                  alt="vector"
                  src={img1}
                />
                <div className="absolute -bottom-8 md:-bottom-20 left-28 md:right-2 lg:-bottom-38 lg:-right-38 ">
                  <img className="w-[75%]  " alt="vector" src={img} />
                </div>
              </div>
              <div className="lg:w-[40%] flex flex-col gap-[16px]">
                <div className="flex items-center">
                  <img className="" alt="vector" src={box} />
                  <h6 className="tex-[24px] font-semibold">
                    Thoughtfully Designed Rooms
                  </h6>
                </div>
                <div className="flex items-center">
                  <img className="" alt="vector" src={box} />
                  <h6 className="tex-[24px] font-semibold">
                    Friendly, Attentive Staff
                  </h6>
                </div>
                <div className="flex items-center">
                  <img className="" alt="vector" src={box} />
                  <h6 className="tex-[24px] font-semibold">
                    Convenient Location
                  </h6>
                </div>
                <div className="flex items-center">
                  <img className="" alt="vector" src={box} />
                  <h6 className="tex-[24px] font-semibold">
                    Peaceful Ambience
                  </h6>
                </div>
                <div className="flex items-center">
                  <img className="" alt="vector" src={box} />
                  <h6 className="tex-[24px] font-semibold">
                    Well sanitized and healthy pool
                  </h6>
                </div>
                <div className="flex items-center">
                  <img className="" alt="vector" src={box} />
                  <h6 className="tex-[24px] font-semibold">
                    Positive guest experience
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  lg:items-center gap-[24px]">
            <div>
              <h1 className="playfair-display font-bold text-[48px]">
                Come experience it for yourself
              </h1>
              <h6 className="courgette-regular text-[20px] font-normal text-[#4A2E24] lg:text-center">
                Whether you’re staying a night or a week, we’re ready to welcome
                you.
              </h6>
            </div>
            <div>
              <button className=" text-[16px] font-semibold bg-[#E17245] p-[16px]  rounded-[16px] shadow-xl text-white">
                {" "}
                Book your stay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferPage;
