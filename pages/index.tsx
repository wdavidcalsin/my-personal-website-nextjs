import type { NextPage } from 'next';
import Layout from '../components/layout';

const Home: NextPage = () => {
    return (
        <Layout title="Page Home" description="Es la pagina principal">
            <div className="w-10/12 lg:w-6/12 flex flex-col h-full justify-center">
                <h2 className="font-poppins text-4xl md:text-5xl text-primary font-bold">
                    Willian David
                </h2>
                <p className="w-full font-poppins text-primary py-5 md:py-10 md:leading-normal text-base md:text-3xl">
                    Frontend Developer, apasionado por compartir conocimientos.
                </p>
                <div>
                    <button className="bg-buttonColor font-poppins text-lg text-buttonColorText hover:bg-blue-700 text-white py-2 px-4 rounded ">
                        Mas sobre mí.
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
