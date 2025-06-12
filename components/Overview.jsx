import React from "react";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Your Preferences, Your Way",
    description:
      "Sign up, set your preferences, and let Halal Connect do the rest! Choose what matters most—faith, values, lifestyle, and more—to find the right match tailored just for you.",
    images: ["/overviewicons/first.svg"],
    textFirst: true,
    arrowDirection: "right",
  },
  {
    id: 2,
    title: "Super Like – Get Noticed Instantly!",
    description:
      "Make your interest stand out with Super Like! When you send a Super Like, your match gets a priority notification, ensuring they see it first. Boost your chances of making a real connection by showing extra interest in someone special.",
    images: ["/overviewicons/second.svg"],
    textFirst: false,
    hasArrow: true,
    arrowDirection: "left",
  },
  {
    id: 3,
    title: "Stand Out with Super Messages!",
    description:
      "Send a Super Message to grab attention and show serious interest! Your message appears on top as a priority, ensuring it gets noticed first. Make your connection count—send a Super Message today!",
    images: ["/overviewicons/third.svg"],
    textFirst: true,
    hasArrow: true,
    arrowDirection: "right",
  },
  {
    id: 4,
    title: "Private & Secure Conversations",
    description:
      "Enjoy private, secure, and halal conversations. Our chat feature prioritizes your privacy while fostering meaningful and respectful connections in a safe environment. Connect with confidence!",
    images: ["/overviewicons/forth.svg"],
    textFirst: false,
    arrowDirection: "left",
  },
  {
    id: 5,
    title: "Block Screenshots",
    description:
      "Your privacy is our priority. With no screenshots allowed, your personal moments stay protected while you build meaningful and secure connections in a trusted environment.",
    images: ["/overviewicons/fifth.svg"],
    textFirst: true,
    arrowDirection: "right",
  },
  {
    id: 6,
    title: "Choose the Perfect Plan for You",
    description:
      "Silver offers basic matches and limited messaging. Gold unlocks unlimited chats, priority matches, and a profile boost. Diamond gives maximum visibility, Super Messages, and premium support. Upgrade and start your halal journey today!",
    images: ["/overviewicons/six.svg"],
    textFirst: false,
    arrowDirection: null,
  },
];

const Overview = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      {features.map((feature) => (
        <div key={feature.id} className="mb-16 md:mb-4 lg:mb-8">
          <div className="border-none shadow-none bg-transparent">
            <div className="p-0">
              <div className="flex flex-col">
                <div
                  className={`flex flex-col ${
                    feature.textFirst ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center justify-between gap-8 lg:gap-12`}
                >
                  <div className="flex flex-col w-full lg:w-1/2 items-start gap-4 md:gap-6 text-center lg:text-left">
                    <h2 className=" font-bold text-gray-900 text-2xl md:text-3xl leading-tight">
                      {feature.title}
                    </h2>
                    <p className=" font-medium text-gray-700 text-base md:text-xl leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="relative w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg">
                      <div className="relative h-[240px] sm:h-[280px] md:h-96 lg:h-[400px] w-full">
                        <Image
                          src={feature.images[0]}
                          alt={`Display for ${feature.title}`}
                          fill
                          className="object-contain"
                          priority // only for above-the-fold
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {feature.arrowDirection && (
                  <div className="flex justify-center">
                    <Image
                      className={`w-40 sm:w-52 md:w-64 lg:w-100 h-auto ${
                        feature.arrowDirection === "left" ? "rotate-90" : ""
                      }`}
                      src="/overviewicons/arrow.svg"
                      alt="Section Separator Arrow"
                      width={434}
                      height={344}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Overview;
