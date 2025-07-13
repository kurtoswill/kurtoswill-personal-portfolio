import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col xl:flex-row w-full gap-10 text-[#02021A]">
            <div className="w-full xl:w-1/2">
                <h1 className="text-[40px] xl:text-[60px] font-bold leading-tight ">
                    Designing for People. <br /> Developing for Impact.
                </h1>
            </div>

            <div className="w-full xl:w-1/2 text-xl leading-relaxed space-y-6">
                <p>
                    Hi! I'm Kurt — a web developer from the Philippines who’s focused on creating impact through code. My journey began when I was a kid, fascinated by sci-fi movies and the technology behind them. That curiosity grew into a love for building things that make people’s lives easier and more convenient.
                </p>
                <p>
                    I specialize in frontend development using tools like Next.js, which was also the first framework I learned. I enjoy crafting smooth, user-friendly interfaces and love designs that make users feel at ease. While frontend is my core, I’m also exploring fullstack development, blockchain, and AI to expand what I can build and who I can help.
                </p>
                <p>
                    I work best in team environments where ideas move fast. As a developer, designer, and team lead, I’ve helped bring concepts to life under pressure — often learning new skills on short notice. Winning hackathons like GDG Sparkfest and joining events like Base Buildathon (where my blockchain journey started) has shown me the power of building with real-world impact in mind.
                </p>
            </div>
        </div>
    );
};

export default About;
