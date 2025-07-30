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
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10'>
                <h1 className="text-[32px] sm:text-[40px] xl:text-[60px] font-bold leading-tight">
                    Creating Projects That Solve Real Problems
                </h1>
                <p className='text-base sm:text-lg md:text-xl'>
                    Every project starts with a challenge and a purpose—to build something real and impactful.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="text-[#02021A] pt-8 md:pt-[50px] border-t-2 mt-12 md:mt-[100px] p-4 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col gap-6 bg-[#F8F8FE] p-6 rounded-2xl mx-auto"
                        >
                            {/* Image Link */}
                            {project.preview ? (
                                <a
                                    href={project.preview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform transform hover:scale-95 rounded-2xl block"
                                >
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.projectname}
                                            width={600}
                                            height={600}
                                            className="rounded-2xl w-full h-auto shadow-2xl"
                                        />
                                    ) : (
                                        <div className="w-full aspect-video bg-gradient-to-br from-[#02021A] to-[#6b21a8] rounded-2xl shadow-2xl flex items-center justify-center text-white text-lg font-medium">
                                            No Image Available
                                        </div>
                                    )}
                                </a>
                            ) : (
                                project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.projectname}
                                        width={600}
                                        height={600}
                                        className="rounded-2xl w-full h-auto shadow-2xl"
                                    />
                                ) : (
                                    <div className="w-full aspect-video bg-gradient-to-br from-[#02021A] to-[#6b21a8] rounded-2xl shadow-2xl flex items-center justify-center text-white text-lg font-medium">
                                        No Image Available
                                    </div>
                                )
                            )}

                            {/* Project Content */}
                            <div className="flex flex-col gap-3 sm:gap-4 text-left">
                                <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-tight">
                                    {project.projectname}
                                </h1>

                                <p className="text-sm sm:text-base opacity-50">
                                    {project.description}
                                </p>

                                <div className="flex text-sm sm:text-base justify-between items-center">
                                    <a
                                        className="opacity-50 hover:opacity-100 transition-all ease-in-out flex gap-2 items-center"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image src="/icons/github.png" alt="github" width={24} height={24} />
                                        Github
                                    </a>

                                    {project.preview ? (
                                        <span className="italic opacity-75 text-sm">
                                            Click the image to preview
                                        </span>
                                    ) : (
                                        <span className="italic opacity-50 text-sm">
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
            <hr className="border-b-[1px] border-white/20 mt-8 md:mt-5 mx-4 sm:mx-8 md:mx-16 lg:mx-[100px]" />

            {/* Footer */}
            <footer className="px-4 sm:px-8 md:px-16 lg:px-[100px] pt-[30px] md:pt-[50px] flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mb-[50px]">
                <p className="text-sm md:text-base text-center sm:text-left">
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
                            width={40}
                            height={40}
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
                            width={40}
                            height={40}
                            className="bg-white rounded-full p-1 cursor-pointer"
                        />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Page;
