'use client';

import React from 'react';
import Image from "next/image";
import heroimages from "@/data/heroimages.json";

const CarouselContainer = () => {
    const items = heroimages.images;

    return (
        <div className="relative w-screen overflow-hidden mb-[40px] sm:mb-[60px] md:mb-[80px]">
            {/* Left and right gradient fades - responsive widths */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 md:w-24 z-20"
                 style={{ background: 'linear-gradient(to right, #02021A, transparent)' }} />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 md:w-24 z-20"
                 style={{ background: 'linear-gradient(to left, #02021A, transparent)' }} />

            {/* Image slider */}
            <div className="slider">
                <div className="sliderTrack">
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="slide relative group">
                            {/* Image - responsive sizes */}
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={500}
                                height={500}
                                className="object-cover w-full h-full rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem]"
                            />

                            {/* Content overlay - responsive padding and text */}
                            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 z-30 rounded-b-[0.5rem] sm:rounded-b-[0.75rem] md:rounded-b-[1rem] overflow-hidden">
                                <div className="relative z-30">
                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold break-words whitespace-normal text-white drop-shadow-lg">{item.name}</h3>
                                    <p className="text-xs sm:text-sm md:text-base text-white/90 drop-shadow-lg">{item.location}</p>
                                </div>
                            </div>

                            {/* Gradient overlay - responsive height */}
                            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-18 md:h-20 lg:h-24 bg-gradient-to-t from-black/70 to-transparent rounded-b-[0.5rem] sm:rounded-b-[0.75rem] md:rounded-b-[1rem] z-10 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselContainer;