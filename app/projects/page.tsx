'use client';
import React from 'react';
import Navbar from "@/components/Navbar";
import data from '@/data/projects.json';
import Image from "next/image";

const Page = () => {
    const projects = data.projects;

    return (
        <div>
            <Navbar />

            {/* Header */}
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 px-4">
                <h1 className='mt-[100px] font-bold text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] text-center leading-tight'>
                    Ideas Into Interfaces,<br />
                    Code Into Connection
                </h1>
                <p className="font-medium text-[14px] sm:text-[16px] md:text-[18px] max-w-[90%] md:max-w-[700px] text-center">
                    Projects that transform ideas into experiences through design and development.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-[60px] pb-10 px-2 sm:px-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className='bg-white text-[#02021A] rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300 flex flex-col'
                    >
                        {/* Image */}
                        <div className="relative w-full h-[120px] sm:h-[120px] md:h-[225px] rounded-t-2xl overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.projectname}
                                layout="fill"
                                objectFit="cover"
                                className='rounded-t-2xl border-b-2 border-[#02021A]'
                            />
                        </div>

                        {/* Content */}
                        <div className='p-3 sm:p-4 flex flex-col flex-1'>
                            <h1 className='text-sm sm:text-base font-bold leading-tight'>
                                {project.projectname}
                            </h1>
                            <p className='text-xs sm:text-sm opacity-60 mt-1 flex-1'>
                                {project.description}
                            </p>

                            <div className='flex justify-between mt-3 items-center'>
                                <a
                                    className='animated-border-inverted font-medium text-xs sm:text-sm py-1 px-2 rounded-full shadow'
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>

                                {project.preview ? (
                                    <a
                                        className='animated-border-inverted font-medium text-xs sm:text-sm py-1 px-2 rounded-full shadow'
                                        href={project.preview}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Preview
                                    </a>
                                ) : (
                                    <span className='text-[12px] sm:text-[14px] italic opacity-50'>
                            No preview
                        </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Divider */}
            <hr className="border-b-[1px] border-white/20 mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-[100px]" />

            {/* Footer */}
            <footer className='px-4 sm:px-8 md:px-16 lg:px-[100px] pt-[30px] md:pt-[50px] flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mb-[50px]'>
                <p className='text-xs sm:text-sm md:text-base text-center sm:text-left'>
                    {'\u00A9'} 2025 Kurt Oswill McCarver. All rights reserved.
                </p>

                <div className='flex gap-2'>
                    <a
                        href='https://github.com/kurtoswill'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src='/icons/github.png'
                            alt='github'
                            width={36}
                            height={36}
                            className='bg-white rounded-full p-1 cursor-pointer'
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/kurt-oswill/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src='/icons/linkedin.png'
                            alt='linkedin'
                            width={36}
                            height={36}
                            className='bg-white rounded-full p-1 cursor-pointer'
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Page;
