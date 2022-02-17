import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/layout';

const About: NextPage = () => {
    const [estadoMenu, setEstadoMenu] = useState(false);
    return (
        <Layout
            title="Page About"
            description="Es la pagina principal de mi vida"
        >
            <div className="w-10/12 lg:w-6/12 flex flex-col h-full my-24  lg:m-0 lg:justify-center ">
                <h2 className=" font-bold text-3xl md:text-4xl text-primary">
                    {/* Hi, I&rsquo;m Willian David Calsin */}
                    Más Sobre mi
                </h2>

                <div className="py-5 lg:py-10 space-y-4">
                    <p className=" text-primary text-xl md:text-xl">
                        Hola, mi nombre es Willian David, soy{' '}
                        <span className="text-secondary font-bold">
                            Ingeniero Front-end
                        </span>{' '}
                        . Programo y construyo cosas en Internet.
                    </p>

                    <p className=" text-primary text-lg md:text-xl">
                        Interesado en el diseño, en la ingeniería y en el código
                        abierto.
                    </p>

                    <p className=" text-primary text-lg md:text-xl">
                        Estoy enfocado en la construcción de proyectos con
                        JavaScript, específicamente React y Typescript.
                    </p>

                    <p className=" flex flex-col text-primary text-lg md:text-xl space-y-1">
                        <h3 className="font-bold py-2">Contáctame</h3>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/wdavidcalsin"
                            className="text-base"
                        >
                            <span className="font-bold ">GitHub:</span>{' '}
                            @wdavidcalsin
                        </a>

                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://twitter.com/intent/follow?screen_name=wdavidcalsin"
                            className=" text-base"
                        >
                            <span className="font-bold">Twitter:</span>{' '}
                            @wdavidcalsin
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/williandavidcalsin"
                            className=" text-base"
                        >
                            <span className="font-bold">LinkedIn:</span>{' '}
                            @wdavidcalsin
                        </a>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
