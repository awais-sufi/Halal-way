"use client";
import React, { useState } from "react";
import Image from "next/image";

const Questions = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      id: "general",
      name: "General Questions",
      icon: "/icons/Q1.svg",
      iconWhite: "/icons/Q1-white.svg",
      active: true,
    },
    { id: "support", name: "Support team", icon: "/icons/Q2.svg" },
    { id: "pricing", name: "Pricing Questions", icon: "/icons/Q3.svg" },
  ];

  const faqQuestions = [
    {
      id: "q1",
      question: "What is a Super Message?",
      answer:
        "A Super Message makes your message stand out by appearing on top as a priority, showing serious interest.",
    },
    {
      id: "q2",
      question: "What are the benefits of a premium subscription?",
      answer:
        "Premium subscriptions offer unlimited messaging, priority matching, profile boosts, and advanced privacy features.",
    },
    {
      id: "q3",
      question: "Can I control who sees my profile?",
      answer:
        "Yes, you have full control over your privacy settings and can choose who can view your profile and contact you.",
    },
    {
      id: "q4",
      question: " What is a Super Message?",
      answer:
        "Our algorithm considers your preferences, values, lifestyle choices, and compatibility factors to suggest the best matches.",
    },
    {
      id: "q5",
      question: "What are the benefits of a premium subscription?",
      answer:
        "Yes, HalalConnect is available globally and connects Muslims from all around the world.",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-6xl items-center gap-8 md:gap-12 lg:gap-16 mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 text-center">
        Frequently asked questions.
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 lg:gap-16 w-full">
        <div className="flex flex-col w-full lg:w-80 xl:w-96 items-start gap-4">
          {faqCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center justify-between p-4 md:p-5 w-full rounded-2xl cursor-pointer transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
            >
              <div className="flex items-center gap-3">
                {category.icon && (
                  <Image
                    src={category.icon}
                    width={24}
                    height={24}
                    alt={`${category.name} icon`}
                    className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                      activeCategory === category.id
                        ? "invert brightness-0"
                        : "invert-0 brightness-0"
                    }`}
                  />
                )}
                <span className="font-semibold text-lg md:text-xl">
                  {category.name}
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-transform duration-300 ${
                  activeCategory === category.id ? "rotate-90" : ""
                }`}
              >
                <path
                  d="M8.91001 20.67C8.72001 20.67 8.53001 20.6 8.38001 20.45C8.09001 20.16 8.09001 19.68 8.38001 19.39L14.9 12.87C15.38 12.39 15.38 11.61 14.9 11.13L8.38001 4.61002C8.09001 4.32002 8.09001 3.84002 8.38001 3.55002C8.67001 3.26002 9.15001 3.26002 9.44001 3.55002L15.96 10.07C16.47 10.58 16.76 11.27 16.76 12C16.76 12.73 16.48 13.42 15.96 13.93L9.44001 20.45C9.29001 20.59 9.10001 20.67 8.91001 20.67Z"
                  fill={activeCategory === category.id ? "#ffffff" : "#222222"}
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full lg:flex-1 items-start gap-4 md:gap-5">
          {faqQuestions.map((faq) => (
            <div
              key={faq.id}
              className="w-full bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors duration-300"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full text-left px-4 md:px-6 py-4 md:py-5 flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900 text-lg md:text-xl">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    openFAQ === faq.id ? "rotate-45" : ""
                  }`}
                >
                  <path
                    d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                    fill="#222222"
                  />
                  <path
                    d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                    fill="#222222"
                  />
                </svg>
              </button>
              {openFAQ === faq.id && (
                <div className="px-4 md:px-6 pb-4 md:pb-5">
                  <p className="font-inter text-gray-700 text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
