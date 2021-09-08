import Link from 'next/link';
import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/feather/github';
import { linkedin } from 'react-icons-kit/feather/linkedin';
import { twitter } from 'react-icons-kit/feather/twitter';

function SocialNetwork() {
    return (
        <div className="space-x-2 md:space-x-5 text-primary">
            <Link href="/github">
                <a>
                    <Icon
                        size=""
                        icon={github}
                        className="w-6 md:w-10 lg:w-8 hover:text-black transition duration-300"
                    />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <Icon
                        size=""
                        icon={twitter}
                        className="w-6 md:w-10 lg:w-8 hover:text-sky_blue transition duration-300"
                    />
                </a>
            </Link>
            <Link href="/">
                <a>
                    <Icon
                        size=""
                        icon={linkedin}
                        className="w-6 md:w-10 lg:w-8 hover:text-blue transition duration-300"
                    />
                </a>
            </Link>
        </div>
    );
}

export default SocialNetwork;
