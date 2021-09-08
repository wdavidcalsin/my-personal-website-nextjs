import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/feather/github';
import { linkedin } from 'react-icons-kit/feather/linkedin';
import { twitter } from 'react-icons-kit/feather/twitter';

function SocialNetwork() {
    return (
        <div className="space-x-2 md:space-x-5 text-primary">
            <a href="https://github.com/wdavidcalsin" target="_blank">
                <Icon
                    size=""
                    icon={github}
                    className="w-6 md:w-10 lg:w-8 hover:text-black transition duration-300"
                />
            </a>
            <a
                href="https://twitter.com/intent/follow?screen_name=wdavidcalsin"
                target="_blank"
            >
                <Icon
                    size=""
                    icon={twitter}
                    className="w-6 md:w-10 lg:w-8 hover:text-sky_blue transition duration-300"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/williandavidcalsin/"
                target="_blank"
            >
                <Icon
                    size=""
                    icon={linkedin}
                    className="w-6 md:w-10 lg:w-8 hover:text-blue transition duration-300"
                />
            </a>
        </div>
    );
}

export default SocialNetwork;
