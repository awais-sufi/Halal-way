"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <section className="relative w-full bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 ">
      <header className="relative flex w-full max-w-6xl items-center justify-between mx-auto pt-4 md:pt-6 px-4 md:px-6 bg-transparent">
        <Image
          className="w-16 h-12 md:w-[86px] md:h-[72px]"
          alt="Navbar Logo"
          src="/headericons/navlogo.svg"
          width={86}
          height={72}
        />

        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div
                className={`inline-flex items-center justify-center gap-2.5 px-3 py-2 rounded-full ${
                  pathname === item.href ? "bg-pink-500/10" : ""
                }`}
              >
                <span className="font-outfit font-medium text-gray-900 text-sm xl:text-base leading-5">
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 mx-4 p-4 z-40 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <div
                    className={`px-3 py-2 rounded-lg ${
                      pathname === item.href
                        ? "bg-pink-500/10 text-pink-600"
                        : "text-gray-900"
                    }`}
                  >
                    <span className="font-outfit font-medium text-base">
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}
              <button className="mt-4 text-white px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-3xl text-lg font-normal">
                Sign up
              </button>
            </nav>
          </div>
        )}
        <button className="hidden text-white lg:flex px-6 xl:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-4xl text-lg xl:text-xl font-normal">
          Sign up
        </button>
      </header>

      {pathname === "/privacy" && (
        <div className="mb-12 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-20">
          <h1 className="text-4xl md:text-5xl font-medium text-black-700 max-w-6xl mx-auto px-4 leading-tight tracking-tight">
            Privacy Policy
          </h1>
        </div>
      )}
      {pathname === "/terms" && (
        <div className="mb-12 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-20">
          <h1 className="text-4xl md:text-5xl font-medium text-black-700 max-w-6xl mx-auto px-4 leading-tight tracking-tight">
            Terms & Conditions
          </h1>
        </div>
      )}
    </section>
  );
};

export default Navbar;
