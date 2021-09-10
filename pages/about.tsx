import type { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/layout';
import SocialNetwork from '../components/socialNetwork';

const About: NextPage = () => {
    const [estadoMenu, setEstadoMenu] = useState(false);
    return (
        <Layout
            title="Page About"
            description="Es la pagina principal de mi vida"
        >
            <div className="w-10/12 lg:w-6/12 flex flex-col items-center h-full my-24  lg:m-0 lg:justify-center ">
                <h2 className="font-pacifico text-3xl md:text-4xl text-primary">
                    {/* Hi, I&rsquo;m Willian David Calsin */}
                    Hola, Soy Willian David Calsin
                </h2>

                <div className="py-5 lg:py-12 space-y-5">
                    <p className="font-comfortaa text-primary text-xl md:text-2xl">
                        Soy un{' '}
                        <span className="text-tertiary font-bold">
                            Ingeniero de Front-end
                        </span>{' '}
                        de Perú. Programo y construyo cosas en Internet.
                    </p>

                    <p className="font-comfortaa text-primary text-lg md:text-xl">
                        Interesado en el diseño, en la ingeniería y en el código
                        abierto.
                    </p>

                    <p className="font-comfortaa text-primary text-lg md:text-xl">
                        Estoy enfocado en la construcción de proyectos con
                        JavaScript, específicamente React y Typescript.
                    </p>

                    <p className="font-comfortaa text-primary text-lg md:text-xl">
                        Puedes encontrarme en{' '}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/wdavidcalsin"
                            className="text-tertiary"
                        >
                            GitHub
                        </a>
                        ,{' '}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/wdavidcalsin"
                            className="text-tertiary"
                        >
                            Twitter
                        </a>{' '}
                        y{' '}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/wdavidcalsin"
                            className="text-tertiary"
                        >
                            LinkedIn
                        </a>
                        .
                    </p>
                </div>
                <SocialNetwork />
            </div>
        </Layout>
    );
};

export default About;
