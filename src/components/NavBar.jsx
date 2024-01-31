import React, { useEffect, useState } from "react";
import logo from '../assets/icon.png'
import { Link } from 'react-scroll';

import { FaXmark, FaBars } from 'react-icons/fa6'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsStick] = useState(false);

    // set toggle button
    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scroll > 100) {
                setIsStick(true)
            } else {
                setIsStick(false)
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    });

    // navitems Array
    const navItems = [
        { link: "Home", path: 'home' },
        { link: "Service", path: 'service' },
        { link: "About", path: 'about' },
        { link: "Product", path: 'product' },
        { link: "Testimonial", path: 'testimonial' },
        { link: "FAQ", path: 'faq' },
    ];
    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-white duration-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="" className="text-2x1 font-bold flex item-center space-x-3"><img src={logo} alt="" className="w-10 inline-block items-center" /><span className="text-[#263238]">NEXCENT</span></a>

                    {/* nav item for large devices */}
                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">{link}</Link>)
                        }
                    </ul>

                    {/* btn for large devices */}
                    <div className="space-x-12 hidden lg:flex items-center">
                        <a href="/" className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900">Login</a>
                        <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-netralDGrey">Sign up</button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toogleMenu}
                            className="focus:outline-none focus:text-gray-500">

                            {
                                isMenuOpen ? (<FaXmark className="h-6 w-6" text-netralDGrey />) : (<FaBars className="h-6 w-6 text-netralDGrey" />)
                            }
                        </button>
                    </div>
                </div>

                {/* Nav item for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary`}>

                    {
                        navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default NavBar;