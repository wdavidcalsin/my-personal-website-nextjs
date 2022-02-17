import Head from 'next/head';
import Navbar from './navbar';
import SocialNetwork from './socialNetwork';

type PropLayout = {
    children: React.ReactNode;
    title: string;
    description: string;
};

export default function Layout({ children, title, description }: PropLayout) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name={description}
                    content="Generated by create next app"
                />
                <link rel="icon" href="/logo-ico.svg" />
            </Head>
            <main className="h-screen w-full flex flex-col items-center justify-between">
                <Navbar />
                {children}
                <footer className="h-1 flex justify-center items-center flex-col font-comfortaa text-xs w-full bottom-0 py-10 text-center">
                    <SocialNetwork />
                    <div>
                        Code with{' '}
                        <span className="text-buttonColor">&#10084;</span> by{' '}
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://twitter.com/wdavidcalsin"
                            className="hover:text-sky_blue"
                        >
                            @wdavidcalsin
                        </a>
                    </div>
                </footer>
            </main>
        </>
    );
}
