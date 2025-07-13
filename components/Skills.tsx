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
            <h1 className="text-[40px] xl:text-[60px] font-bold mb-[80px]">
                Skills
            </h1>

            <div className="flex flex-wrap gap-4 text-2xl">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="border border-[#02021A] rounded-full px-6 py-5 transition-all ease-in-out hover:bg-[#02021A] cursor-pointer hover:text-white"
                    >
            {skill}
          </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;
