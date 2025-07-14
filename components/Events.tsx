import React from 'react';
import Image from "next/image";
import Link from "next/link";
import data from "@/data/events.json";

const Events = () => {
    const events = data.events.slice(0, 2);

    return (
        <div className='text-[#02021A] mt-[100px]'>
            <div className='flex justify-between items-center gap-10'>
                <h1 className="text-[40px] xl:text-[60px] font-bold leading-tight">
                    Knowledge & Connection: Igniting Every Tech Event
                </h1>
                <p className='text-xl'>
                    From hands-on workshops to industry seminars, I engage, learn, and grow where technology and community come together.
                </p>
            </div>

            <div className="flex flex-col bg-[#F8F8FE] pt-[50px] border-y-2 mt-[100px] p-10 gap-10">
                {events.map((events) => (
                    <div
                        key={events.id}
                        className="flex gap-20 items-center "
                    >
                        <Image src={events.image} alt={events.name} width={600} height={600}
                               className='rounded-4xl'
                        />

                        <div className='flex flex-col gap-5'>
                            <h1 className='text-[50px] font-semibold leading-tight'>{events.name}</h1>
                            <p className='text-lg opacity-50'>{events.description}</p>

                            <Link href={events.link}
                                  className='opacity-50 hover:opacity-100 transition-all ease-in-out'
                            >
                                See more
                            </Link>
                        </div>
                    </div>
                ))}

                <button className='border border-[#02021A] rounded-full px-6 py-5 transition-all ease-in-out hover:bg-[#02021A] cursor-pointer font-medium hover:text-white text-xl self-end'>
                    Show All Events
                </button>
            </div>


        </div>
    );
};

export default Events;