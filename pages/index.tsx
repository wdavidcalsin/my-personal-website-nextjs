import type { NextPage } from 'next';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/feather/github';
import { linkedin } from 'react-icons-kit/feather/linkedin';
import { twitter } from 'react-icons-kit/feather/twitter';
import Layout from '../components/layout';

const Home: NextPage = () => {
    return (
        <Layout
            title="Page About"
            description="Es la pagina principal de mi vida"
        >
            <div className="w-10/12 lg:w-6/12 flex flex-col items-center h-full justify-center">
                <h2 className="font-pacifico text-3xl md:text-5xl text-primary">
                    Willian David
                </h2>
                <p className="font-comfortaa text-primary py-5 md:py-12 text-base md:text-3xl">
                    Frontend Developer, apasionado por compar tir conocimientos.
                </p>
                <div className="space-x-2 md:space-x-5 text-primary">
                    <Link href="/github">
                        <a>
                            <Icon
                                size=""
                                icon={github}
                                className="w-6 md:w-10 lg:w-8 hover:text-black transition duration-300"
                            />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Icon
                                size=""
                                icon={twitter}
                                className="w-6 md:w-10 lg:w-8 hover:text-sky_blue transition duration-300"
                            />
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <Icon
                                size=""
                                icon={linkedin}
                                className="w-6 md:w-10 lg:w-8 hover:text-blue transition duration-300"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
