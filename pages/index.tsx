import type { NextPage } from 'next';
import Layout from '../components/layout';
import SocialNetwork from '../components/socialNetwork';

const Home: NextPage = () => {
    return (
        <Layout title="Page Home" description="Es la pagina principal">
            <div className="w-10/12 lg:w-6/12 flex flex-col items-center h-full justify-center">
                <h2 className="font-pacifico text-3xl md:text-5xl text-primary">
                    Willian David
                </h2>
                <p className="w-full font-comfortaa text-primary py-5 md:py-12 md:leading-normal text-base md:text-3xl">
                    Frontend Developer, apasionado por compartir conocimientos.
                </p>
                <SocialNetwork />
            </div>
        </Layout>
    );
};

export default Home;
