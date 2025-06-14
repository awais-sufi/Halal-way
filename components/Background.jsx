import React from "react";
import Image from "next/image";

const features = [
  {
    icon: "/backgroundicons/frame1.svg",
    title: "Meaningful Connections",
    description:
      "Designed for serious relationships, leading to meaningful and intentional marriages.",
  },
  {
    icon: "/backgroundicons/frame2.svg",
    title: "Privacy & Modesty",
    description:
      "Enjoy a safe, private, and respectful space with chaperone options and secure messaging.",
  },
  {
    icon: "/backgroundicons/frame3.svg",
    title: "Faith-Based Matches",
    description:
      "Connect with like-minded Muslims who share your faith and commitment to halal relationships.",
  },
];

const Background = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto rounded-3xl md:rounded-[40px] bg-gradient-to-br from-indigo-600 to-indigo-800 py-8 md:py-12 px-4 md:px-8 lg:px-12 my-8 md:my-12 lg:my-16">
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 rounded-2xl md:rounded-3xl bg-gradient-to-b from-pink-500 to-pink-600 px-6 md:px-8 lg:px-12 mb-8 md:mb-12 lg:mb-16 ">
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center  mb-8 lg:mb-0">
          <div className="bg-white shadow-md px-4 py-4 rounded-full flex items-center space-x-2">
            <Image
              src="/backgroundicons/crown.svg"
              alt="crown"
              width={22}
              height={22}
              className="mb-4 self-start"
            />

            <span className="text-black font-medium">Friendship</span>
            <Image
              src="/backgroundicons/staric.svg"
              alt="staric"
              width={9}
              height={9}
              className="mt-4 self-end"
            />
          </div>

          <div className="bg-white  shadow-md px-4 py-4 rounded-full flex items-center space-x-2">
            <Image
              src="/backgroundicons/crown.svg"
              alt="crown"
              width={22}
              height={22}
              className="mb-4 self-start"
            />
            <span className="text-black font-medium">Ideal Match</span>
            <Image
              src="/backgroundicons/staric.svg"
              alt="staric"
              width={9}
              height={9}
              className="mt-4 self-end"
            />
          </div>

          <div
            className="bg-white 
 shadow-md px-4 py-4 rounded-full flex items-center space-x-2"
          >
            <Image
              src="/backgroundicons/crown.svg"
              alt="crown"
              width={22}
              height={22}
              className="mb-4 self-start"
            />
            <span className="text-black font-medium">Like Minded</span>
            <Image
              src="/backgroundicons/staric.svg"
              alt="staric"
              width={9}
              height={9}
              className="mt-4 self-end"
            />
          </div>
        </div>

        {/* Right Side - Image (50%) */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md rounded-[30%] overflow-hidden">
            <Image
              src="/backgroundicons/top.svg"
              alt="App showcase"
              width={688}
              height={548}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight mb-8 md:mb-12 lg:mb-16  px-4">
        Connecting Muslims Worldwide for <br /> Love & Friendship
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12 lg:mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-transparent border-none text-center flex flex-col items-center gap-4 md:gap-6 p-4 md:p-6"
          >
            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 relative">
              {feature.innerIcon ? (
                <div className="relative w-full h-full">
                  <Image
                    className="w-full h-full"
                    alt="Feature icon background"
                    src={feature.icon}
                    width={64}
                    height={64}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      className="w-6 h-6 md:w-8 md:h-8"
                      alt="Feature icon"
                      src={feature.innerIcon}
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
              ) : (
                <Image
                  className="w-full h-full"
                  alt="Feature icon"
                  src={feature.icon}
                  width={64}
                  height={64}
                />
              )}
            </div>

            <div className="flex flex-col items-center gap-2 md:gap-3">
              <h3 className="font-semibold text-white text-lg md:text-xl lg:text-2xl leading-tight ">
                {feature.title}
              </h3>
              <p className="font-medium text-white/90 text-sm md:text-base leading-relaxed ">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#e4318d] hover:bg-pink-700 rounded-full text-white font-semibold text-lg md:text-base ">
          <span>Download the app now</span>

          <Image
            className="w-5 h-5 md:w-6 md:h-6 bg-cover bg-center"
            role="Image"
            src="/backgroundicons/download.svg"
            width={24}
            height={24}
            alt="download"
            aria-label="Download arrow icon"
          />
        </button>
      </div>
    </section>
  );
};

export default Background;
