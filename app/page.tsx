'use client';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from 'react';
import Navbar from "@/components/Navbar";
import CarouselContainer from "@/components/CarouselContainer";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Competitions from "@/components/Competitions";
import Events from "@/components/Events";

const Page = () => {
    return (
        <div className='pb-[50px]'>
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

                <div className='bg-white w-screen rounded-t-[80px] mt-[100px] px-[200px] py-[150px] flex flex-col gap-10 rounded-b-[80px]'>
                    <About />
                    <Skills />
                    <Projects />
                    <Competitions />
                    <Events />
                </div>
            </div>

            <h1 className='text-[100px] mt-15 text-center'>Let’s Talk Tech & Possibilities</h1>

            <div className='px-[100px] mt-10 flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <p className='text-md opacity-50'>Email</p>
                    <p className='text-2xl'>kurtoswillmc@gmail.com</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-md opacity-50'>Phone number</p>
                    <p className='text-2xl'>+63 966 018 7382</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" className='mb-2'/>

                    <Label htmlFor="message">Your message</Label>
                    <Textarea placeholder="Type your message here." id="message" />

                    <button
                        type="submit"
                        className="animated-border font-medium text-lg py-3 px-6 rounded-full bg-white/10 shadow mt-5"
                    >
                        Send
                    </button>
                </div>
            </div>

            <hr
                className="border-b-[1px] border-white/20 mt-5 mx-[100px]"
            />

            <footer className='px-[100px] pt-[50px] flex justify-between items-center'>
                <p>{'\u00A9'} 2025 Kurt Oswill McCarver. All rights reserved.</p>

                <div className='flex gap-2'>
                    <Image src='/icons/github.png' alt='github' width={40} height={40}
                        className='bg-white rounded-full p-1 cursor-pointer'
                    />
                    <Image src='/icons/linkedin.png' alt='github' width={40} height={40}
                           className='bg-white rounded-full p-1 cursor-pointer'
                    />
                </div>
            </footer>
        </div>
    );
};

export default Page;
