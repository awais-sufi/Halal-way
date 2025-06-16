import React from "react";
import Image from "next/image";

const reviewData = [
  {
    rating: "4.6/5",
    reviews: "(from 300+ reviews)",
    platform: "Google Play",
    icon: "/icons/play.svg",
  },
  {
    rating: "4.8/5",
    reviews: "(from 400+ reviews)",
    platform: "App Store",
    icon: "/icons/apple.svg",
  },
];

const Rating = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-32 py-10 md:py-12 lg:py-14 px-4 md:px-6">
      {reviewData.map((review, index) => (
        <div
          key={index}
          className="rounded-xl p-6 flex flex-col items-center gap-4 md:gap-6 w-full md:w-auto"
        >
          <div className="flex items-center gap-2 md:gap-3">
            <Image
              src="/icons/ratingstar.svg"
              width={24}
              height={24}
              alt="star"
            />
            <Image
              src="/icons/ratingstar.svg"
              width={24}
              height={24}
              alt="star"
            />
            <Image
              src="/icons/ratingstar.svg"
              width={24}
              height={24}
              alt="star"
            />
            <Image
              src="/icons/ratingstar.svg"
              width={24}
              height={24}
              alt="star"
            />
            <Image src="/icons/simple.svg" width={24} height={24} alt="star" />
          </div>

          <div className="flex items-center gap-2 md:gap-2">
            <Image
              src="/icons/star.svg"
              width={24}
              height={24}
              alt="rating star"
            />
            <div className="text-gray-900 text-lg md:text-xl font-medium">
              {review.rating}
            </div>
            <div className="text-md md:text-lg font-normal">
              {review.reviews}
            </div>
          </div>

          <div className="flex items-center md:gap-1">
            <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
              <Image
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                alt={`${review.platform} icon`}
                width={56}
                height={56}
                src={review.icon}
              />
            </div>
            <div className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-medium whitespace-nowrap">
              {review.platform}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rating;
