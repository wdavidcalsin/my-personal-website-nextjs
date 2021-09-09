import Image from 'next/image';
import Link from 'next/link';
import { useReducer, useState } from 'react';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import WDavidLogo from '../public/WDavid.png';

function Navbar() {
    const [menuState, setMenuState] = useState(false);

    console.log(menuState);

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
                    <Icon
                        icon={menu}
                        size=""
                        className="w-8 md:w-12 text-primary "
                    />
                </button>
                <div
                    className={`w-9/12 lg:hidden h-full bg-secondary absolute flex flex-col items-center top-0 z-10 transition-all duration-300 ${
                        menuState ? 'left-0' : '-left-full'
                    }`}
                >
                    <div className="mt-8 space-y-10">
                        <h2 className="text-quartet font-comfortaa text-3xl text-center font-bold">
                            Menu
                        </h2>
                        <ul className=" text-quartet flex flex-col items-center font-comfortaa text-2xl space-y-10">
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
            </nav>
        </>
    );
}

export default Navbar;
