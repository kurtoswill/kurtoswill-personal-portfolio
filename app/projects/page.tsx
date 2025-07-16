'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import projectsData from '@/data/projects.json';
import Image from "next/image";

const Page = () => {
    const projects = projectsData.projects;

    return (
        <div className='mt-[150px]'>
            <Navbar />

            {/* Header */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-16 mb-[100px]'>
                <h1 className="text-[32px] sm:text-[40px] xl:text-[60px] font-bold leading-tight">
                    Creating Projects That Solve Real Problems
                </h1>
                <p className='text-base sm:text-lg md:text-xl'>
                    Every project starts with a challenge and a purpose—to build something real and impactful.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="text-[#02021A] pt-8 md:pt-[50px] border-t-2 p-4 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col gap-4 bg-[#F8F8FE] p-4 sm:p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                        >
                            <Image
                                src={project.image}
                                alt={project.projectname}
                                width={400}
                                height={400}
                                className='rounded-2xl w-full h-auto shadow-2xl'
                            />

                            <div className='flex flex-col gap-2 sm:gap-3 text-left'>
                                <h1 className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold leading-tight'>
                                    {project.projectname}
                                </h1>
                                <p className='text-xs sm:text-sm opacity-50'>
                                    {project.description}
                                </p>

                                <div className="flex gap-3 items-center">
                                    <a
                                        className='opacity-50 hover:opacity-100 transition-all ease-in-out text-left text-xs sm:text-sm underline'
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github
                                    </a>

                                    {project.preview ? (
                                        <a
                                            className='opacity-50 hover:opacity-100 transition-all ease-in-out text-left text-xs sm:text-sm underline'
                                            href={project.preview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Preview
                                        </a>
                                    ) : (
                                        <span className="text-[10px] sm:text-[12px] italic opacity-50">
                                            No preview
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Divider */}
            <hr className="border-b-[1px] border-white/20 mt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-[100px]" />

            {/* Footer */}
            <footer className="px-4 sm:px-8 md:px-16 lg:px-[100px] pt-[30px] md:pt-[50px] flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mb-[50px]">
                <p className="text-xs sm:text-sm md:text-base text-center sm:text-left">
                    {'\u00A9'} 2025 Kurt Oswill McCarver. All rights reserved.
                </p>

                <div className="flex gap-2">
                    <a
                        href="https://github.com/kurtoswill"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/github.png"
                            alt="github"
                            width={36}
                            height={36}
                            className="bg-white rounded-full p-1 cursor-pointer"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kurt-oswill/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/icons/linkedin.png"
                            alt="linkedin"
                            width={36}
                            height={36}
                            className="bg-white rounded-full p-1 cursor-pointer"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Page;