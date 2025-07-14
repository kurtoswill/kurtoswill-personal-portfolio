import React from 'react';
import Image from "next/image";

const TechStack = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-4">
            {[
                'ts', 'js', 'html', 'css', 'tailwind', 'next', 'node', 'git', 'supabase'
            ].map((icon) => (
                <div
                    key={icon}
                    className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 flex justify-center"
                >
                    <Image
                        src={`/icons/techstack/${icon}.svg`}
                        alt={icon}
                        width={100}
                        height={100}
                        className="w-full h-auto grayscale hover:grayscale-0 transition duration-300"
                    />
                </div>
            ))}
        </div>
    );
};

export default TechStack;
