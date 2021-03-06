import SocialNetwork from './socialNetwork';

const Footer = () => {
    return (
        <footer className="h-1 flex justify-center items-center flex-col text-xs w-full bottom-0 py-12 text-center">
            <SocialNetwork />
            <div>
                Code with <span className="text-buttonColor">&#10084;</span> by{' '}
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
    );
};

export default Footer;
