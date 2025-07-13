'use client';

import React from 'react';
import Image from "next/image";
import heroimages from "@/data/heroimages.json";

const CarouselContainer = () => {
    const items = heroimages.images;

    return (
        <div className="relative w-full overflow-hidden mb-[80px]">

            {/* Left and right gradient fades */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-20" />

            {/* Image slider */}
            <div className="slider">
                <div className="sliderTrack">
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="slide relative group">
                            {/* Image */}
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={500}
                                height={500}
                                className="object-cover w-[500px] h-[500px] rounded-[2rem]"
                            />

                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent rounded-b-[2rem] z-20 pointer-events-none" />


                            <div className="absolute bottom-0 left-0 right-0 p-5 z-20 rounded-b-[2rem] overflow-hidden">

                                <div className="relative z-20">
                                    <h3 className="text-2xl font-semibold break-words whitespace-normal">{item.name}</h3>
                                    <p className="text-md">{item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselContainer;
