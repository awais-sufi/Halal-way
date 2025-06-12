import React from "react";

const Show = () => {
  const terms = [
    "Muslim Marriage App",
    "Islamic Dating",
    "Muslim Matrimony",
    "Shia Muslim",
    "Sunni Muslim",
    "Single Muslim App",
    "All About Dating as a Single Muslim",
    "Arab Dating",
    "Muslim Dating App",
  ];

  return (
    <section className="w-full bg-[#5d5fef] py-4 md:py-2 lg:py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 text-center">
          {terms.map((term, index) => (
            <h3
              key={index}
              className="font-semibold text-white text-lg md:text-lg lg:text-xl"
            >
              {term}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Show;
