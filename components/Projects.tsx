import React from 'react';
import Image from "next/image";

const Projects = () => {
    return (
        <div>
            <div className="flex flex-col w-full gap-10 text-[#02021A] mt-[50px]">
                <div className='flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4'>
                    <div className="w-full xl:w-1/2">
                        <h1 className="text-[40px] xl:text-[60px] font-bold leading-tight ">
                            Code That Connects, <br/> Designs That Resonate
                        </h1>
                    </div>
                    <div>
                        <button
                            className="border border-[#02021A] rounded-full px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-5 transition-all ease-in-out hover:bg-[#02021A] cursor-pointer hover:text-white text-base sm:text-xl md:text-2xl"
                        >
                            See More
                        </button>
                    </div>
                </div>

                <div className='flex flex-col xl:flex-row gap-10'>
                    <Image
                        src='/image/hero/base-ama.jpg'
                        alt='gdg'
                        width={600} height={600}
                        className='rounded-2xl'
                    />
                    <Image
                        src='/image/hero/kabserve.png'
                        alt='gdg'
                        width={875} height={600}
                        className='rounded-2xl'
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;