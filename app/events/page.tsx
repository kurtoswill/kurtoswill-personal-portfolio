import React from 'react';
import Image from "next/image";
import Link from "next/link";
import data from "@/data/events.json";
import Navbar from "@/components/Navbar";

const Page = () => {
    const events = data.events;

    return (
        <div className='mt-[150px]'>
            <Navbar />

            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10'>
                <h1 className="text-[32px] sm:text-[40px] xl:text-[60px] font-bold leading-tight">
                    Events & Experiences: Driving Innovation Together
                </h1>
                <p className='text-base sm:text-lg md:text-xl'>
                    I value events that inspire growth, spark collaboration, and build meaningful connections—each one a chance to learn and contribute.
                </p>
            </div>

            <div className="text-[#02021A] pt-8 md:pt-[50px] border-t-2 mt-12 md:mt-[100px] p-4 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    {events.map((events) => (
                        <div
                            key={events.id}
                            className="flex flex-col gap-6 bg-[#F8F8FE] p-6 rounded-2xl"
                        >
                            <Image
                                src={events.image}
                                alt={events.name}
                                width={600}
                                height={600}
                                className='rounded-2xl w-full h-auto shadow-2xl'
                            />

                            <div className='flex flex-col gap-3 sm:gap-4 text-left'>
                                <h1 className='text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-tight'>{events.name}</h1>
                                <p className='text-sm sm:text-base'>{events.year}</p>
                                <p className='text-sm sm:text-base opacity-50'>{events.description}</p>

                                <Link href={events.link}
                                      className='opacity-50 hover:opacity-100 transition-all ease-in-out text-left'
                                >
                                    See more in LinkedIn
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr
                className="border-b-[1px] border-white/20 mt-8 md:mt-5 mx-4 sm:mx-8 md:mx-16 lg:mx-[100px]"
            />

            <footer className='px-4 sm:px-8 md:px-16 lg:px-[100px] pt-[30px] md:pt-[50px] flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mb-[50px]'>
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