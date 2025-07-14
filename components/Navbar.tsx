import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)) {
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

    return (
        <div className="sticky top-6 z-50">
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
                    <li>
                        <Link href='/highlights' className="hover:opacity-80 transition-opacity duration-200">
                            Highlights
                        </Link>
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
                            <Link
                                href='/highlights'
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-3 px-2 hover:bg-white/10 rounded-md transition-colors duration-200"
                            >
                                Highlights
                            </Link>
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