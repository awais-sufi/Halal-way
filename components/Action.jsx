import React from "react";
import Image from "next/image";

const downloadOptions = [
  {
    id: "app-store",
    icon: "/icons/apple.svg",
    text: "Download on the",
    store: "App Store",
  },
  {
    id: "google-play",
    icon: "/icons/play.svg",
    text: "Download on the",
    store: "Google Play",
  },
];

const Action = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto my-8 md:my-12 lg:my-16 overflow-hidden rounded-3xl md:rounded-[32px] shadow-2xl bg-gradient-to-br from-[#AE1C67] to-[#E4318D]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 p-6 md:p-10 lg:p-14 z-10 relative">
        {/* Left */}
        <div className="w-full lg:w-[75%] text-center lg:text-left flex flex-col items-center lg:items-start gap-4 md:gap-6">
          <Image
            src="/icons/whitelogo.svg"
            alt="Halal-Way Logo"
<<<<<<< HEAD
            unoptimized
            width={114}
            height={95}
            priority
            style={{ width: "114px", height: "95px" }}
          />

=======
            width={114}
            height={95}
            priority
          />
>>>>>>> adf30627ee4742db125ba99e5b2f1323b9eb342d
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            <span className="text-white">Your </span>
            <span className="text-gray-900">Nikkah</span>
            <span className="text-white"> Story Starts Here</span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-white">
            Join Today!
          </h3>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 md:gap-8">
          <Image
            src="/icons/guy.svg"
            alt="Illustration of a man using the app"
            width={240}
            height={240}
          />

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            {downloadOptions.map(({ id, icon, text, store }) => (
              <div
                key={id}
                className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
              >
                <Image
                  src={icon}
                  alt={`${store} icon`}
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-gray-900 text-xs font-normal">
                    {text}
                  </span>
                  <span className="text-gray-900 text-sm font-medium">
                    {store}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
