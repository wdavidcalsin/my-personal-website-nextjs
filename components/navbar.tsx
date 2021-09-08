import Image from 'next/image';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import WDavidLogo from '../public/WDavid.png';

function Navbar() {
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
                <button className="lg:hidden">
                    <Icon
                        icon={menu}
                        size=""
                        className="w-8 md:w-12 text-primary "
                    />
                </button>
            </nav>
        </>
    );
}

export default Navbar;
