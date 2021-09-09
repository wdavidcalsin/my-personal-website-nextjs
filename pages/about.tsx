import type { NextPage } from 'next';
import Layout from '../components/layout';
import SocialNetwork from '../components/socialNetwork';

const About: NextPage = () => {
    return (
        <Layout
            title="Page About"
            description="Es la pagina principal de mi vida"
        >
            <div className="w-10/12 lg:w-6/12 flex flex-col items-center h-full my-32 lg:my-0 lg:justify-center">
                <h2 className="font-pacifico text-3xl md:text-4xl text-primary">
                    Hi, I&rsquo;m Willian David Calsin
                </h2>

                <div className="py-5 lg:py-12 space-y-5">
                    <p className="font-comfortaa text-primary text-xl md:text-2xl">
                        I&rsquo;m a{' '}
                        <span className="text-tertiary font-bold">
                            Front End Engineer
                        </span>{' '}
                        from Peru. I code, write and build stuff on internet.
                    </p>

                    <p className="font-comfortaa text-primary text-lg md:text-xl">
                        Interested in design, under engineering and open source.
                    </p>

                    <p className="font-comfortaa text-primary text-lg md:text-xl">
                        I am focused on building projects with JavaScript,
                        specifically React and Typescript.
                    </p>

                    <p className="font-comfortaa text-primary text-lg md:text-xl">
                        You can find me on{' '}
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
                        and{' '}
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
