// ClientsCard.tsx
import React from "react";
import type { Testimonial } from "../../types/Home/HomeTypes";

type Props = {
  testimonial: Testimonial;
};

const Clients: React.FC<Props> = ({ testimonial }) => {
  return (
    <div className="bg-Grey-08 border border-Grey-15 rounded-xl p-[30px] md:p-10 lg:p-[50px] flex flex-col w-full h-full">
      {/* Rating Stars */}
      <div className="flex mb-6">
        {Array.from({ length: testimonial?.rating }).map((_, i) => (
          <div
            key={i}
            className="rounded-full bg-Grey-10 border border-Grey-15 flex items-center justify-center mr-2 shrink-0
                    w-[30px] h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px]"
          >
            <img
              src={testimonial?.icon}
              alt="star"
              className="object-contain 
                    w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px]"
            />
          </div>
        ))}
      </div>

      <div className="my-8 lg:my-10 flex-1">
        {/* Title */}
        <h3 className="text-White font-semibold text-[18px] md:text-[20px] lg:text-2xl mb-4">
          {testimonial?.title}
        </h3>

        {/* Text */}
        <p className="text-White text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
          {testimonial?.text}
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-4 mt-[30px] lg:mt-10">
        <img
          src={testimonial?.author?.avatar}
          alt={testimonial?.author?.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-White md:text-[18px] lg:text-[20px]">
            {testimonial?.author?.name}
          </p>
          <p className="text-Grey-60 text-sm">
            {testimonial?.author?.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
