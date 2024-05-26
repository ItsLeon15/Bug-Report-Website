import React, {ReactElement} from 'react';
import {motion} from 'framer-motion';
import {NavBar} from "../components/NavBar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faCog,
    faTools,
    faQuestionCircle,
    faCircleExclamation,
    faSignsPost,
    faPager
} from '@fortawesome/free-solid-svg-icons';
import {Footer} from "../components/Footer";

type DocSection = {
    icon: any;
    id: string;
    title: string;
    content: ReactElement | string;
    url: string;
};

type SectionProps = {
    section: DocSection;
};

const Section: React.FC<SectionProps> = ({section}: SectionProps) => (
    <motion.a
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        href={section.url}
        className="rounded-lg transition-all duration-300 my-2 px-4 lg:h-[13rem] md:h-[11rem]"
    >
        <section id={section.id} className="p-6 bg-[#5d808e5c] rounded shadow-md w-full h-full">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={section.icon} className="text-blue-500 mr-2 w-6 h-6" />
                <h2 className="text-xl lg:text-2xl font-bold">{section.title}</h2>
            </div>
            <p className="text-gray-200">{section.content}</p>
        </section>
    </motion.a>
);

const DocumentationPage: React.FC = () => {
    const sections: DocSection[] = [
        {
            icon: faSignsPost,
            id: 'introduction',
            title: 'Introduction',
            content: 'Make sure to read the installation guide first.',
            url: '/documentation/information/#introduction'
        },
        {
            icon: faCog,
            id: 'commands',
            title: 'Commands',
            content: 'A list of all commands and permissions available in the plugin.',
            url: '/documentation/information/#commands'
        },
        {
            icon: faTools,
            id: 'config',
            title: 'Configuration',
            content: 'Explore all of the ways to customize Bug Report such as custom GUIs, categories and statuses!',
            url: '/documentation/information/#configuration'
        },
        {
            icon: faCircleExclamation,
            id: 'common-issues',
            title: 'Common Issues',
            content: 'Common problems and errors that you may encounter when using Bug Report.',
            url: '/documentation/information/#common-issues'
        },
        {
            icon: faQuestionCircle,
            id: 'faq',
            title: 'FAQ',
            content: 'Frequently asked questions about Bug Report.',
            url: '/documentation/information/#faq'
        },
        {
            icon: faPager,
            id: 'gui-customization',
            title: 'GUI Customization',
            content: 'Learn how to customize the GUI to fit your server.',
            url: '/documentation/information/#gui-customization'
        }
    ];

    return (
        <>
            <div className="bg-fixed h-100 w-100 z-[-1] top-0 left-0 right-0 bottom-0 fixed"
                 style={{
                     backgroundImage: "url('/images/background.webp')",
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     filter: "blur(110px) opacity(0.5) brightness(0.8) hue-rotate(300deg)"
                 }}>
            </div>
            <div className="min-h-screen text-white">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2}}
                    className="max-w-7xl mx-auto py-8 px-6"
                >
                    <NavBar />

                    <div className="flex justify-center flex-col">
                        <h1 className="text-5xl font-bold text-center mt-12">Documentation</h1>
                        <p className="text-xl text-gray-400 leading-relaxed w-8/12 text-center mt-6 self-center">
                            Everything you need to understand and configure Bug Report.
                        </p>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-2 px-16 lg:grid-cols-3 lg:px-0 md:grid-cols-2 sm:px-4">
                        {sections.map((section) => (
                            <Section key={section.id} section={section} />
                        ))}
                    </div>
                </motion.div>

                <Footer bg="none"/>
            </div>
        </>
    );
};

export default DocumentationPage;
