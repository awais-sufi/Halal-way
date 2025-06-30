import React from "react";
import Image from "next/image";

const Customers = () => {
  const testimonials = [
    {
      quote:
        '"I never thought I\'d find my soulmate online, but this platform proved me wrong! Truly life-changing."',
      author: "Warisha Tahir",
      authorColor: "#e4318d",
    },
    {
      quote:
        "The matchmaking algorithm is amazing! I met someone who shares my interests and values.",
      author: "Saad Ahmad",
      authorColor: "#5d5fef",
    },
    {
      quote:
        "A perfect blend of technology and genuine connections. Highly recommended for serious relationships!",
      author: "Minahil Khan",
      authorColor: "#e4318d",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-8 md:gap-12 lg:gap-28 px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
        Our Happy Customers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-28 w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br to-pink-500/20 from-indigo-500/20 rounded-3xl rotate-12 scale-90" />

            <div className="relative bg-white rounded-3xl p-4 md:p-6 shadow-lg flex flex-col items-center justify-between gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={i === 4 ? "/icons/simple.svg" : "/icons/yellow.svg"}
                    width={24}
                    height={24}
                    alt="star"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                ))}
              </div>

              <p className="text-lg md:text-lg lg:text-2xl leading-none font-light text-center">
                {testimonial.quote}
              </p>

              <p
                className="text-lg md:text-lg lg:text-xl font-medium text-center"
                style={{ color: testimonial.authorColor }}
              >
                {testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
