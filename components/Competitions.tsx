import React from 'react';
import CompetitionsCards from "@/components/CompetitionsCards";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/competitions.json";

const Competitions = () => {
    const competitions = data.competitions.slice(0, 2);

    return (
        <div className='text-[#02021A] mt-[60px] sm:mt-[80px] md:mt-[100px] px-4 sm:px-8'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10'>
                <h1 className="text-[32px] sm:text-[40px] xl:text-[60px] font-bold leading-tight">
                    Collaboration & Success: Fueling Every Win
                </h1>
                <p className='text-base sm:text-lg md:text-xl'>
                    From hackathons to real-world builds, I believe the best solutions come from teamwork, dedication, and smart execution.
                </p>
            </div>

            <div className="flex flex-col bg-[#F8F8FE] pt-8 md:pt-[50px] border-t-2 mt-12 md:mt-[100px] p-4 sm:p-8 md:p-10 gap-8 md:gap-10">
                {competitions.map((competition) => (
                    <div
                        key={competition.id}
                        className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center"
                    >
                        <Image
                            src={competition.image}
                            alt={competition.name}
                            width={600}
                            height={600}
                            className='rounded-2xl w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[600px] h-auto'
                        />

                        <div className='flex flex-col gap-3 sm:gap-5 w-full'>
                            <h1 className='text-[32px] sm:text-[40px] md:text-[50px] font-semibold leading-tight'>{competition.name}</h1>
                            <p className='text-base sm:text-lg opacity-50'>{competition.description}</p>

                            <Link href={competition.link}
                                  className='opacity-50 hover:opacity-100 transition-all ease-in-out'
                            >
                                See more in LinkedIn
                            </Link>
                        </div>
                    </div>
                ))}

                <a href='/competitions' className='flex justify-center md:justify-end'>
                    <button className='border border-[#02021A] rounded-full px-4 sm:px-6 py-3 sm:py-5 transition-all ease-in-out hover:bg-[#02021A] cursor-pointer font-medium hover:text-white text-base sm:text-xl'>
                        Show All Competitions
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Competitions;