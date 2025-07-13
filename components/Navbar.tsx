import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="sticky top-6 z-50 flex justify-between items-center mx-[100px]">
        <h3 className='text-lg font-medium'>
                <Link href='/'>
                    Kurt Oswill
                </Link>
            </h3>

            <ul className='flex gap-8 font-medium text-lg shadow bg-white/10 py-3 px-6 rounded-full'>
                <li>
                    <Link href='/about'>About Me</Link>
                </li>
                <li>
                    <Link href='/about'>Projects</Link>
                </li>
                <li>
                    <Link href='/about'>Hightlights</Link>
                </li>
                <li>
                    <Link href='/about'>Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;