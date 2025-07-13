'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import CarouselContainer from "@/components/CarouselContainer";
import Image from "next/image";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Competitions from "@/components/Competitions";

const Page = () => {
    return (
        <div className='pb-[250px]'>
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

                <h1 className='text-[40px] font-medium mt-[50px]'>The Stack Behind the Build</h1>
                <TechStack />

                <div className='bg-white w-screen rounded-t-[80px] mt-[100px] p-[200px] flex flex-col gap-10'>
                    <About />
                    <Skills />
                    <Projects />
                    <Competitions />
                </div>
            </div>
        </div>
    );
};

export default Page;
