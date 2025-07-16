import React from 'react';

const skills = [
    'TypeScript',
    'JavaScript',
    'HTML & CSS',
    'Next.js',
    'Tailwind CSS',
    'React.js',
    'Node.js',
    'Supabase',
    'Git & Github',
    'Vercel',
    'Figma',
    'Responsive Web Design',
    'UI/UX Design',
    'Team Collaboration',
    'Adaptability',
    'Creativity',
    'Growth Mindset',
];

const Skills = () => {
    return (
        <div className="text-[#02021A] py-10">
            <h1 className="text-[40px] xl:text-[60px] font-bold mb-[40px]">
                Skills
            </h1>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-base sm:text-xl md:text-2xl">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="animated-border-inverted px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-5 transition-all ease-in-out border-2 cursor-pointer rounded-full border-[#02021A] hover:text-white text-base sm:text-xl md:text-2xl"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;