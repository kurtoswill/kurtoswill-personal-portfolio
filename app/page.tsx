'use client';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from 'react';
import Navbar from "@/components/Navbar";
import CarouselContainer from "@/components/CarouselContainer";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
import About from "@/components/About";
import Projects from "@/components/Projects";
import Competitions from "@/components/Competitions";
import Events from "@/components/Events";
import Skills from "@/components/Skills";

const Page = () => {
    return (
        <div className='pb-[50px] px-4 md:px-6 lg:px-8'>
            <Navbar />

            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 mt-[60px] md:mt-[100px]">
                <h1 className="font-bold text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] text-center leading-tight mt-[75px]">
                    Kurt, Web Developer <br /> Based in the Philippines
                </h1>

                <p className="font-medium text-[16px] sm:text-[18px] md:text-[21px] text-center max-w-[90%] md:max-w-[700px] px-4">
                    Building fast, responsive websites and growing through tech events.
                </p>

                <div className="flex flex-row sm:flex-row gap-4 mb-[60px] md:mb-[60px]">
                    <button className="animated-border font-medium text-base md:text-lg py-3 px-6 rounded-full bg-white/10 shadow">
                        Show All Competitions
                    </button>

                    <button className="animated-border font-medium text-base md:text-lg py-3 px-6 rounded-full bg-white/10 shadow">
                        Show All Tech Events
                    </button>
                </div>

                <CarouselContainer />



                <div className='bg-white w-screen rounded-t-[40px] md:rounded-t-[80px] mt-[80px] md:mt-[100px] px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[200px] py-[80px] md:py-[150px] flex flex-col gap-10 rounded-b-[40px] md:rounded-b-[80px]'>
                    <section id={'about'} className='scroll-mt-[275px]'>
                        <About />
                    </section>
                    <section>
                        <Skills />
                    </section>
                    <section id={'projects'} className='scroll-mt-[75px]'>
                        <Projects />
                    </section>
                    <section id={'competitions'} className='scroll-mt-[25px]'>
                        <Competitions />
                    </section>
                    <section id={'events'} className='scroll-mt-[10px]'>
                        <Events />
                    </section>
                </div>
            </div>

            <h1 className='text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] mt-10 md:mt-15 text-center px-4 leading-tight'>
                Let's Talk Tech & Possibilities
            </h1>

            <div className='px-4 sm:px-8 md:px-16 lg:px-[100px] mt-6 md:mt-10 flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between'>
                {/* Contact Info */}
                <div className='flex flex-col sm:flex-row lg:flex-col gap-6 sm:gap-8 lg:gap-6'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm md:text-md opacity-50'>Email</p>
                        <p className='text-lg md:text-2xl break-all'>kurtoswillmc@gmail.com</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm md:text-md opacity-50'>Phone number</p>
                        <p className='text-lg md:text-2xl'>+63 966 018 7382</p>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    action="https://formspree.io/f/mwpqkqye"
                    method="POST"
                    className='flex flex-col gap-2 w-full lg:w-auto lg:min-w-[400px]'
                    id="contact"
                >
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Email" className='mb-2' required />

                    <Label htmlFor="message">Your message</Label>
                    <Textarea name="message" id="message" placeholder="Type your message here." className="min-h-[120px]" required />

                    <button
                        type="submit"
                        className="animated-border font-medium text-base md:text-lg py-3 px-6 rounded-full bg-white/10 shadow mt-5 w-full sm:w-auto"
                    >
                        Send
                    </button>
                </form>

            </div>

            <hr
                className="border-b-[1px] border-white/20 mt-8 md:mt-5 mx-4 sm:mx-8 md:mx-16 lg:mx-[100px]"
            />

            <footer className='px-4 sm:px-8 md:px-16 lg:px-[100px] pt-[30px] md:pt-[50px] flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center'>
                <p className='text-sm md:text-base text-center sm:text-left'>{'\u00A9'} 2025 Kurt Oswill McCarver. All rights reserved.</p>

                <div className='flex gap-2'>
                    <Image src='/icons/github.png' alt='github' width={40} height={40}
                           className='bg-white rounded-full p-1 cursor-pointer'
                    />
                    <Image src='/icons/linkedin.png' alt='linkedin' width={40} height={40}
                           className='bg-white rounded-full p-1 cursor-pointer'
                    />
                </div>
            </footer>
        </div>
    );
};

export default Page;