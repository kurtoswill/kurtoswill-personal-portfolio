import React from 'react';
import Image from "next/image";

const TechStack = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10">
            {[
                'ts', 'js', 'html', 'css', 'tailwind', 'next', 'node', 'git', 'supabase'
            ].map((icon) => (
                <Image
                    key={icon}
                    src={`/icons/techstack/${icon}.svg`}
                    alt={icon}
                    width={100}
                    height={100}
                    className="grayscale hover:grayscale-0 transition duration-300"
                />
            ))}
        </div>

    );
};

export default TechStack;