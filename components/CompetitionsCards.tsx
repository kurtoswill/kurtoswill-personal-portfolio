import React from 'react';
import Image from "next/image";
import data from '@/data/competitions.json';
import Link from "next/link";

const CompetitionsCards = () => {
    const competitions = data.competitions;
    return (
        <div className="flex flex-col bg-[#F8F8FE] pt-[50px] border-t-2 mt-[100px] p-10 gap-10">
            {competitions.map((competition) => (
                <div
                    key={competition.id}
                    className="flex gap-20 items-center "
                >
                    <Image src={competition.image} alt={competition.name} width={600} height={600}
                        className='rounded-4xl'
                    />

                    <div className='flex flex-col gap-5'>
                        <h1 className='text-[50px] font-semibold leading-tight'>{competition.name}</h1>
                        <p className='text-lg opacity-50'>{competition.description}</p>

                        <Link href={competition.link}
                            className='opacity-50 hover:opacity-100 transition-all ease-in-out'
                        >
                            See more
                        </Link>
                    </div>
                </div>
            ))}

            <button className='border border-[#02021A] rounded-full px-6 py-5 transition-all ease-in-out hover:bg-[#02021A] cursor-pointer font-medium hover:text-white text-xl w-[400px]'>
                Show All Competitions
            </button>
        </div>

    );
};

export default CompetitionsCards;