import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

const Projects: NextPage = () => {
    return (
        <Layout
            title="Page About"
            description="Es la pagina principal de mi vida"
        >
            <div className="w-10/12 lg:w-6/12 my-20 space-y-8 font-comfortaa">
                <div className="space-y-3">
                    <h2 className="font-bold text-4xl text-primary">
                        work ( &rsquo;{' '}
                        <span className=" text-tertiary">selected</span> &rsquo;
                        )
                    </h2>
                    <p className="text-secondary">
                        &#47;&#47; Some special projects explained in details.
                    </p>
                </div>
                <div className="timeline relative space-y-10">
                    <div>
                        <div className=" bg-gradient-to-r from-secondary to-tertiary w-3 h-3 flex items-center justify-center absolute p-2 rounded-full">
                            <span className="absolute right-14 whitespace-nowrap hidden lg:block italic text-secondary">
                                31 aug, 2021
                            </span>
                            {/* <Icon
                            size=""
                            icon={clock}
                            className="w-full h-full text-quartet"
                        /> */}
                        </div>
                        <div className="ml-14 text-primary space-y-2">
                            <a
                                rel="noreferrer"
                                href="https://perform-tasks.vercel.app/"
                                className="text-2xl"
                                target="_blank"
                            >
                                To-do List Application
                            </a>
                            <p>
                                A todo list implemented using React (Typescript)
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gradient-to-r from-secondary to-tertiary w-3 h-3 flex items-center justify-center absolute p-2 rounded-full">
                            <span className="absolute right-14 whitespace-nowrap hidden lg:block italic  text-secondary">
                                16 may, 2021
                            </span>
                        </div>
                        <div className="ml-14 text-primary space-y-2">
                            <Link href="/">
                                <a className="text-2xl">Prueba 1</a>
                            </Link>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Illum accusamus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
