import React from "react";
import Image from "next/image";

const downloadOptions = [
  {
    subtitle: "Download on the",
    platform: "App Store",
    icon: "/headericons/apple.svg",
  },
  {
    subtitle: "Download on the",
    platform: "Google Play",
    icon: "/headericons/play.svg",
  },
];

export default function Header() {
  return (
    <section className="relative w-full bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 md:px-6">
        {/* Left Content */}
        <div className="flex flex-col w-full lg:w-1/2 items-start gap-12 text-center lg:text-left">
          {/* Tag + Title + Subtitle */}
          <div className="flex flex-col items-center lg:items-start gap-5 w-full">
            <span className="px-3 py-2 bg-indigo-600/10 text-indigo-600 rounded-full font-medium text-xs">
              HalalConnect
            </span>

            <div className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-gray-900">
              Find Yourself a Perfect Match —{" "}
              <span className="text-pink-600">Halal</span>{" "}
              <span className="text-indigo-600">Way</span>
            </div>

            <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              A safe and respectful way to find your ideal partner—built on
              trust, compatibility, and meaningful connections.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 w-full mb-8 lg:mb-0">
            {downloadOptions.map((option, index) => (
              <button
                key={index}
                className="flex items-center gap-3 bg-black hover:bg-gray-800 rounded-lg p-2 md:p-3"
              >
                {option.icon && (
                  <Image
                    src={option.icon}
                    alt={`${option.platform} icon`}
                    width={32}
                    height={32}
                    unoptimized
                    style={{ width: "32px", height: "32px" }}
                  />
                )}

                <div className="flex flex-col items-start text-white text-xs leading-4">
                  <span>{option.subtitle}</span>
                  <strong className="font-medium">{option.platform}</strong>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <Image
            src="/headericons/left.webp"
            alt="App preview"
            width={496}
            height={487}
            priority
            fetchPriority="high"
            style={{ height: "auto", width: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
