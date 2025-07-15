'use client';
import React from 'react';
import Navbar from "@/components/Navbar";
import data from '@/data/projects.json';
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    const projects = data.projects;

    return (
        <div className=''>
            <Navbar />

            <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
                <h1 className='mt-[150px] font-bold text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] text-center leading-tight'>
                    Ideas Into Interfaces,
                    Code Into Connection
                </h1>
                <p className="font-medium text-[16px] sm:text-[18px] md:text-[21px] max-w-[90%] md:max-w-[700px] px-4 text-center">
                    Projects that transform ideas into experiences through design and development.
                </p>
            </div>

            <div className='flex gap-5 mt-[80px] pb-4'>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='bg-white text-[#02021A] rounded-2xl hover:scale-105 ease-in-out transition duration-300 cursor-pointer min-w-[300px] w-[500px] flex flex-col shadow-lg'
                    >
                        <Image src={project.image} alt={project.projectname}
                               width={600} height={600}
                               className='rounded-t-2xl w-full h-[250px] object-cover'
                        />
                        <div className='p-6 flex-1 flex flex-col'>
                            <h1 className='text-xl font-bold leading-tight'>
                                {project.projectname}
                            </h1>
                            <p className='text-base opacity-50 mt-3 flex-1'>
                                {project.description}
                            </p>

                            <div className='flex justify-between mt-5 leading-tight items-center'>
                                <a className='animated-border-inverted font-medium text-base md:text-lg py-1 px-3 rounded-full  shadow'
                                   href={project.github}
                                   target="_blank" rel="noopener noreferrer"
                                >
                                    <span>Github</span>
                                </a>

                                {project.preview ? (
                                    <a
                                        className='animated-border-inverted font-medium text-base md:text-lg py-1 px-3 rounded-full shadow'
                                        href={project.preview}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Preview</span>
                                    </a>
                                ) : (
                                    <span className='text-sm md:text-base italic opacity-50'>No preview available</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
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