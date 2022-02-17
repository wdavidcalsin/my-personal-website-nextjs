import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MainLogoIcon } from './svg/mainLogo';
import clsx from 'clsx';

interface NavigationLinkProp {
    href: string;
    texLink: string;
}

const NavigationLink = (props: NavigationLinkProp) => {
    const { href, texLink } = props;
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <Link href={href}>
            <a
                className={clsx(
                    'hover:text-primary',
                    isActive && 'pointer-events-none text-primary underline'
                )}
            >
                {texLink}
            </a>
        </Link>
    );
};

function Navbar() {
    const [menuState, setMenuState] = useState(false);

    return (
        <>
            <nav className="w-10/12 lg:w-6/12 flex justify-between items-center pt-5 md:pt-14">
                <Link href="/">
                    <a className="w-32 md:w-36 ">
                        <MainLogoIcon className="w-full" />
                    </a>
                </Link>
                <div className="hidden lg:block">
                    <ul className="text-secondary flex text-xl space-x-6">
                        <li>
                            <NavigationLink href="/" texLink="Inicio" />
                        </li>
                        <li>
                            <NavigationLink href="/about" texLink="Sobre mi" />
                        </li>
                        <li>
                            <NavigationLink
                                href="/projects"
                                texLink="Proyectos"
                            />
                        </li>
                    </ul>
                </div>
                <button
                    className="lg:hidden"
                    onClick={() => setMenuState(!menuState)}
                >
                    <div
                        onClick={() => setMenuState(!menuState)}
                        className="w-8 space-y-1.5"
                    >
                        <span
                            className={`w-full h-1 block bg-primary rounded-lg ${
                                menuState && 'transform'
                            } rotate-45 translate-y-2 transition`}
                        ></span>
                        <span
                            className={`w-full h-1 block bg-primary rounded-lg ${
                                menuState && 'opacity-0'
                            } transition`}
                        ></span>
                        <span
                            className={`w-full h-1 block bg-primary rounded-lg ${
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
                        <h2 className="text-quartet text-3xl text-center font-bold">
                            Menu
                        </h2>
                        <ul className=" text-quartet flex flex-col items-center text-2xl space-y-10">
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
