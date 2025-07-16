'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [inSection, setInSection] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const router = useRouter();
    const pathname = usePathname();

    const sectionIds = ['about', 'projects', 'competitions', 'events', 'contact'];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);


    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        let visibleSections = new Set<string>();

        sectionIds.forEach((id) => {
            const section = document.getElementById(id);
            if (!section) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        visibleSections.add(id);
                    } else {
                        visibleSections.delete(id);
                    }
                    setInSection(visibleSections.size > 0);
                },
                { threshold: 0.1 }
            );

            observer.observe(section);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);


    const handleNavClick = (id: string) => {
        setIsMenuOpen(false);

        if (pathname === '/') {
            const section = document.getElementById(id);
            section?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/#${id}`);
        }
    };

    return (
        <div
            className={`fixed top-10 left-4 right-4 md:left-10 md:right-10 xl:left-20 xl:right-20 z-50 transition-colors duration-300 rounded-full px-10 ${
                inSection ? 'bg-[#02021A]' : 'bg-transparent'
            }`}
        >
            <div className="flex justify-between items-center">
                <h3 className='text-lg font-medium'>
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
                <ul className='hidden md:flex gap-8 font-medium text-lg shadow bg-white/10 py-3 px-6 rounded-full backdrop-blur-lg'>
                    <li><button onClick={() => handleNavClick('about')} className="hover:opacity-80 transition-opacity duration-200">About Me</button></li>
                    <li><button onClick={() => handleNavClick('projects')} className="hover:opacity-80 transition-opacity duration-200">Projects</button></li>
                    <li><button onClick={() => handleNavClick('competitions')} className="hover:opacity-80 transition-opacity duration-200">Competitions</button></li>
                    <li><button onClick={() => handleNavClick('events')} className="hover:opacity-80 transition-opacity duration-200">Tech Events</button></li>
                    <li><button onClick={() => handleNavClick('contact')} className="hover:opacity-80 transition-opacity duration-200">Contact</button></li>
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    ref={buttonRef}
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 bg-white/10 rounded-lg backdrop-blur-lg shadow hover:bg-white/20 transition-all duration-200"
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-current transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div ref={menuRef} className="md:hidden absolute top-12 left-0 right-0 bg-[#02021A] backdrop-blur-lg rounded-lg shadow-lg py-2 px-4 mx-0">
                    <ul className='flex flex-col font-medium text-lg'>
                        <li><button onClick={() => handleNavClick('about')} className="block w-full text-left py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200">About Me</button></li>
                        <li className="border-b border-white/20 mx-2"></li>
                        <li><button onClick={() => handleNavClick('projects')} className="block w-full text-left py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200">Projects</button></li>
                        <li className="border-b border-white/20 mx-2"></li>
                        <li><button onClick={() => handleNavClick('competitions')} className="block w-full text-left py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200">Competitions</button></li>
                        <li className="border-b border-white/20 mx-2"></li>
                        <li><button onClick={() => handleNavClick('events')} className="block w-full text-left py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200">Tech Events</button></li>
                        <li className="border-b border-white/20 mx-2"></li>
                        <li><button onClick={() => handleNavClick('contact')} className="block w-full text-left py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200">Contact</button></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
