import React from 'react';
import Image from "next/image";

const Projects = () => {
    return (
        <div>
            <div className="flex flex-col w-full gap-10 text-[#02021A] mt-[50px]">
                <div className='flex justify-between items-center'>
                    <div className="w-full xl:w-1/2">
                        <h1 className="text-[40px] xl:text-[60px] font-bold leading-tight ">
                            Code That Connects, <br/> Designs That Resonate
                        </h1>
                    </div>

                    <div>
                        <button className='border border-[#02021A] rounded-full px-6 py-5 transition-all ease-in-out hover:bg-[#02021A] cursor-pointer font-medium hover:text-white text-xl'>
                            See More
                        </button>
                    </div>
                </div>

                <div className='flex gap-10'>
                    <Image
                        src='/image/hero/gdg.png'
                        alt='gdg'
                        width={600} height={600}
                        className='rounded-4xl'
                    />
                    <Image
                        src='/image/hero/gdg.png'
                        alt='gdg'
                        width={600} height={600}
                        className='rounded-4xl'
                    />
                </div>

            </div>
        </div>
    );
};

export default Projects;