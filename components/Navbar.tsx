import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHighlightsOpen, setIsHighlightsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const highlightsRef = useRef<HTMLDivElement | null>(null);
    const highlightsTriggerRef = useRef<HTMLLIElement | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleHighlights = () => {
        setIsHighlightsOpen(!isHighlightsOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            // Handle mobile menu click outside
            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setIsMenuOpen(false);
            }

            // Handle highlights dropdown click outside
            if (
                highlightsRef.current &&
                !highlightsRef.current.contains(target) &&
                highlightsTriggerRef.current &&
                !highlightsTriggerRef.current.contains(target)
            ) {
                setIsHighlightsOpen(false);
            }
        };

        if (isMenuOpen || isHighlightsOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, isHighlightsOpen]);

    return (
        <div className="fixed top-10 left-4 right-4 md:left-10 md:right-10 xl:left-20 xl:right-20 z-50">
            <div className="flex justify-between items-center">
                <h3 className='text-lg font-medium'>
                    <Link href='/' className="hover:opacity-80 transition-opacity duration-200">
                        Kurt Oswill
                    </Link>
                </h3>

                {/* Desktop Menu */}
                <ul className='hidden md:flex gap-8 font-medium text-lg shadow bg-white/10 py-3 px-6 rounded-full backdrop-blur-lg'>
                    <li>
                        <Link href='/about' className="hover:opacity-80 transition-opacity duration-200">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href='/projects' className="hover:opacity-80 transition-opacity duration-200">
                            Projects
                        </Link>
                    </li>
                    <li ref={highlightsTriggerRef} className="relative">
                        <button
                            onClick={toggleHighlights}
                            className="hover:opacity-80 transition-opacity duration-200 flex items-center gap-1"
                        >
                            Highlights
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isHighlightsOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Highlights Dropdown */}
                        {isHighlightsOpen && (
                            <div ref={highlightsRef} className="absolute top-10 left-0 mt-2 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg py-2 min-w-48">
                                <Link
                                    href='/tech-events'
                                    onClick={() => setIsHighlightsOpen(false)}
                                    className="block px-4 py-2 hover:bg-white/10 transition-colors duration-200"
                                >
                                    Tech Events
                                </Link>
                                <Link
                                    href='/competitions'
                                    onClick={() => setIsHighlightsOpen(false)}
                                    className="block px-4 py-2 hover:bg-white/10 transition-colors duration-200"
                                >
                                    Competitions
                                </Link>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link href='/contact' className="hover:opacity-80 transition-opacity duration-200">
                            Contact
                        </Link>
                    </li>
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

            {/* Mobile Menu - Full Width */}
            {isMenuOpen && (
                <div ref={menuRef} className="md:hidden absolute top-12 left-0 right-0 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg py-3 px-4 mx-0">
                    <ul className='flex flex-col font-medium text-lg'>
                        <li>
                            <Link
                                href='/about'
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="border-b border-white/20 mx-2"></li>
                        <li>
                            <Link
                                href='/projects'
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="border-b border-white/20 mx-2"></li>
                        <li>
                            <button
                                onClick={toggleHighlights}
                                className="w-full text-left py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200 flex items-center justify-between"
                            >
                                Highlights
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isHighlightsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Mobile Highlights Dropdown */}
                            {isHighlightsOpen && (
                                <div className="pl-4 py-2">
                                    <Link
                                        href='/highlights/tech-events'
                                        onClick={() => {
                                            setIsHighlightsOpen(false);
                                            setIsMenuOpen(false);
                                        }}
                                        className="block py-2 px-2 hover:bg-white/10 rounded-md transition-colors duration-200 text-base"
                                    >
                                        Tech Events
                                    </Link>
                                    <Link
                                        href='/highlights/competitions'
                                        onClick={() => {
                                            setIsHighlightsOpen(false);
                                            setIsMenuOpen(false);
                                        }}
                                        className="block py-2 px-2 hover:bg-white/10 rounded-md transition-colors duration-200 text-base"
                                    >
                                        Competitions
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li className="border-b border-white/20 mx-2"></li>
                        <li>
                            <Link
                                href='/contact'
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;