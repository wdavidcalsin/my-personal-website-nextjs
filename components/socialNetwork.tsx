import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/feather/github';
import { linkedin } from 'react-icons-kit/feather/linkedin';
import { twitter } from 'react-icons-kit/feather/twitter';

function SocialNetwork() {
    return (
        <div className="space-x-2 md:space-x-3 text-primary py-3">
            <a
                rel="noreferrer"
                href="https://github.com/wdavidcalsin"
                target="_blank"
            >
                <Icon
                    size=""
                    icon={github}
                    className="w-4 md:w-4 lg:w-4 hover:text-black transition duration-300"
                />
            </a>
            <a
                rel="noreferrer"
                href="https://twitter.com/intent/follow?screen_name=wdavidcalsin"
                target="_blank"
            >
                <Icon
                    size=""
                    icon={twitter}
                    className="w-4 md:w-4 lg:w-4 hover:text-sky_blue transition duration-300"
                />
            </a>
            <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/williandavidcalsin/"
                target="_blank"
            >
                <Icon
                    size=""
                    icon={linkedin}
                    className="w-4 md:w-4 lg:w-4 hover:text-blue transition duration-300"
                />
            </a>
        </div>
    );
}

export default SocialNetwork;
