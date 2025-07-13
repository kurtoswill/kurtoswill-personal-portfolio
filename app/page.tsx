'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import CarouselContainer from "@/components/CarouselContainer";

const Page = () => {
    return (
        <div>
            <Navbar />

            <div className="flex flex-col items-center justify-center gap-8 mt-[80px]">
                <h1 className="font-bold text-[80px] text-center leading-tight">
                    Kurt, Web Developer <br /> Based in the Philippines
                </h1>

                <p className="font-medium text-[21px] text-center max-w-[700px]">
                    Building fast, responsive websites and growing through tech events.
                </p>

                <div className="flex gap-4 mb-[80px]">
                    <button className="animated-border font-medium text-lg py-3 px-6 rounded-full bg-white/10 shadow">
                        Competitions
                    </button>

                    <button className="animated-border font-medium text-lg py-3 px-6 rounded-full bg-white/10 shadow">
                        Tech Events
                    </button>
                </div>

                <CarouselContainer />
            </div>
        </div>
    );
};

export default Page;
