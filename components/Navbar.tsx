'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (id: string) => {
        setIsMenuOpen(false); // close menu on mobile
        if (pathname === '/') {
            const section = document.getElementById(id);
            section?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/#${id}`);
        }
    };

    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-[#02021A] text-white">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 py-5">
                <h3 className="text-lg font-medium">
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            router.push('/');
                        }}
                        className="hover:opacity-80 transition-opacity duration-200"
                    >
                        Kurt Oswill
                    </button>
                </h3>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 font-medium text-lg">
                    {['about', 'projects', 'competitions', 'events', 'contact'].map(id => (
                        <li key={id}>
                            <button
                                onClick={() => handleNavClick(id)}
                                className="hover:opacity-80 transition-opacity duration-200"
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 bg-white/10 rounded-lg backdrop-blur-md hover:bg-white/20 transition-all duration-200"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#02021A] px-6 pb-4">
                    <ul className="flex flex-col font-medium text-lg">
                        {['about', 'projects', 'competitions', 'events', 'contact'].map(id => (
                            <li key={id}>
                                <button
                                    onClick={() => handleNavClick(id)}
                                    className="block w-full text-left py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
