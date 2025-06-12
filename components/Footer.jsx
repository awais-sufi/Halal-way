import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { icon: "/footericons/instagram.svg", alt: "Instagram logo" },
    { icon: "/footericons/twitter.svg", alt: "Twitter logo" },
    { icon: "/footericons/linkedin.svg", alt: "LinkedIn logo" },
    { icon: "/footericons/facebook.svg", alt: "Facebook logo" },
  ];

  const pageLinks = [
    { title: "Home", href: "/" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Condition", href: "/terms" },
  ];

  const contactInfo = [
    { icon: "/footericons/phone.svg", text: "(406) 555-0120" },
    { icon: "/footericons/sms.svg", text: "mangcoding123@gmail.com" },
    {
      icon: "/footericons/location.svg",
      text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center gap-8 md:gap-10 pt-8 md:pt-10 lg:pt-12 pb-0 px-4 md:px-6 lg:px-8 bg-[#0a001e]">
      <footer className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16 w-full max-w-6xl">
        {/* Logo and Social Media Section */}
        <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-auto">
          <div className="flex items-center gap-3">
            <Image
              className="w-10 h-8 md:w-11 md:h-9"
              alt="Cntnt"
              src="/footericons/footerlogo.svg"
              width={44}
              height={36}
            />
            <div className="font-semibold text-white text-xl md:text-2xl">
              Halal Connect
            </div>
          </div>

          <div className="flex items-center">
            {socialLinks.map((link, index) => (
              <div
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <Image alt={link.alt} src={link.icon} width={32} height={32} />
              </div>
            ))}
          </div>
        </div>

        {/* Pages Section */}
        <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full lg:w-auto">
          <div className=" font-semibold text-white text-base md:text-lg">
            Pages
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
            {pageLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className=" font-normal text-gray-300 hover:text-white text-base md:text-sm cursor-pointer"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full lg:w-64">
          <div className=" font-semibold text-white text-base md:text-lg">
            Contact
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3 md:gap-4">
                <Image
                  src={info.icon}
                  alt="Contact Icon"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain"
                />

                <div className=" font-normal text-gray-300 text-base md:text-sm text-center lg:text-left">
                  {info.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full lg:w-64">
          <div className=" font-semibold text-white text-base md:text-lg">
            Download Now
          </div>

          <div className="flex flex-col items-center lg:items-start gap-4 md:gap-5">
            {/* App Store Button */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
              <div className="w-7 h-7 md:w-8 md:h-8">
                <Image
                  className="w-full h-full object-contain"
                  alt="App Store"
                  src="/footericons/apple.svg"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <div className="text-gray-900  font-normal text-xs leading-4">
                  Download on the
                </div>
                <div className="text-gray-900  font-medium text-xs leading-4">
                  App Store
                </div>
              </div>
            </div>

            {/* Google Play Button */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
              <div className="w-7 h-7 md:w-8 md:h-8">
                <Image
                  className="w-full h-full object-contain"
                  alt="Google play"
                  src="/footericons/play.svg"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <div className="text-gray-900 whitespace-nowrap  font-normal text-xs leading-4">
                  Download on the
                </div>
                <div className="text-gray-900  font-medium text-xs leading-4">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="flex items-center justify-center gap-2.5 py-3 w-[90%] border-t border-[#413950]">
        <div className=" font-light text-[#413950] text-xs md:text-sm text-center">
          © 2025 HalalConnect. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
