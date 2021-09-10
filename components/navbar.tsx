import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import WDavidLogo from '../public/WDavid.png';

function Navbar() {
    const [menuState, setMenuState] = useState(false);

    return (
        <>
            <nav className="w-10/12 lg:w-6/12 flex justify-between items-center pt-5 md:pt-14">
                <Link href="/">
                    <a className="w-24 md:w-40 ">
                        <Image src={WDavidLogo} />
                    </a>
                </Link>
                <div className="hidden lg:block">
                    <ul className=" text-tertiary flex font-comfortaa text-2xl space-x-6">
                        <li>
                            <Link href="/about">
                                <a className="hover:opacity-80 transition duration-300">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a className="hover:opacity-80  transition duration-300">
                                    Projects
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    className="lg:hidden"
                    onClick={() => setMenuState(!menuState)}
                >
                    {/* <Icon
                        icon={menu}
                        size=""
                        className="w-8 md:w-12 text-primary "
                    /> */}
                    <div
                        onClick={() => setMenuState(!menuState)}
                        className="w-8 space-y-1.5"
                    >
                        <span
                            className={`w-full h-1 block bg-tertiary rounded-lg ${
                                menuState && 'transform'
                            } rotate-45 translate-y-2 transition`}
                        ></span>
                        <span
                            className={`w-full h-1 block bg-tertiary rounded-lg ${
                                menuState && 'opacity-0'
                            } transition`}
                        ></span>
                        <span
                            className={`w-full h-1 block bg-tertiary rounded-lg ${
                                menuState && 'transform'
                            } -rotate-45 -translate-y-3 transition`}
                        ></span>
                    </div>
                </button>
                <div
                    className={`w-9/12 lg:hidden h-full bg-secondary fixed flex flex-col items-center top-0 z-20 transition-all duration-300 ${
                        menuState ? 'left-0' : '-left-full'
                    }`}
                >
                    <div className="mt-8 space-y-10">
                        <h2 className="text-quartet font-comfortaa text-3xl text-center font-bold">
                            Menu
                        </h2>
                        <ul className=" text-quartet flex flex-col items-center font-comfortaa text-2xl space-y-10">
                            <li>
                                <Link href="/">
                                    <a className="hover:opacity-80 transition duration-300">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a className="hover:opacity-80 transition duration-300">
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a className="hover:opacity-80  transition duration-300">
                                        Projects
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {menuState && (
                    <div
                        onClick={() => setMenuState(!menuState)}
                        className="lg:hidden bg-secondary fixed top-0 left-0 w-full h-full z-10 opacity-70"
                    ></div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
