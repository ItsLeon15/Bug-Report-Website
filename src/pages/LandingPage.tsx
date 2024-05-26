import {motion} from 'framer-motion';
import {NavBar} from "../components/NavBar";
import {Footer} from "../components/Footer";

const LandingPage = () => {
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

                    <div className="h-[20rem] flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-center mt-12">
                            Find bugs faster with <span className="text-yellow-400">Bug Report</span>!
                        </h1>
                        <div className="mt-6 flex justify-center">
                            <p className="text-xl text-gray-400 leading-relaxed w-5/12 text-center">
                                Bug Report is a plugin that allows players to submit bug reports directly in-game.
                                Admins can manage and track reported issues with ease.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center mt-10 gap-8">
                        <FeatureCard
                            title="Easy Reporting"
                            description="Multi-configurable options to make reporting bugs easy for players."
                        />
                        <FeatureCard
                            title="Real-Time Notifications"
                            description="Instant alerts for new reports, keeping admins up-to-date."
                        />
                        <FeatureCard
                            title="Custom GUI"
                            description="A customizable GUI for managing bug reports efficiently."
                        />
                        <FeatureCard
                            title="Custom Statuses & Categories"
                            description="Create custom statuses and categories for better organization."
                        />
                    </div>

                    <FeaturesShowcase />

                    <div className="text-center mt-12 bg-[#5d808e5c] p-8 rounded-lg shadow-lg flex justify-center">
                        <div className="w-1/2">
                            <h2 className="text-3xl font-bold">Get started with
                                <span className="text-yellow-300"> Bug Report</span> today!
                            </h2>
                            <p className="text-lg text-gray-300 mt-4">
                                Bug Report is a powerful tool for managing bug reports in-game.
                                Get started today and streamline your bug tracking process.
                            </p>
                            <motion.a
                                href="https://www.spigotmc.org/resources/bug-report-1-16-4-1-20-6.110732"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 py-3 rounded mt-6 inline-block text-lg"
                                whileHover={{scale: 1.05}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download Now
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                <Footer bg="none" />
            </div>
        </>
    );
};

const FeatureSection = ({feature, reverse}: { feature: any; reverse: boolean }) => {
    return (
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center justify-between my-12`}>
            <div className="md:w-1/2 p-8 w-[60%] text-center">
                <h3 className="text-3xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-md">{feature.description}</p>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <img src={feature.imageUrl} alt={feature.imageAlt} className="max-w-full h-auto rounded-lg shadow-lg py-6 px-4 bg-[#2b557e94]" />
            </div>
        </div>
    );
};

const FeaturesShowcase = () => {
    const features = [
        {
            id: 1,
            title: "Easy-to-use GUI's",
            description: "A user-friendly interface for managing bug reports directly in-game. That's highly configurable and easy to use.",
            imageUrl: "/images/plugin/Bug_Report_List_GUI.png",
            imageAlt: "Easy Reporting Feature",
        },
        {
            id: 2,
            title: "Loads of Information",
            description: "Loads of player information that admins can easily use to find all of the information related to a bug report, including player location, category, world, gamemode and more!",
            imageUrl: "/images/plugin/Bug_Report_Details.png",
            imageAlt: "Real-Time Notifications Feature",
        },
        {
            id: 3,
            title: "Language Support",
            description: "Bug Report is available in multiple languages, ensuring a wide range of users can use the plugin. Only one click to change the language.",
            imageUrl: "/images/plugin/Bug_List_Languages.png",
            imageAlt: "Language Support Feature",
        },
        {
            id: 4,
            title: "Customizable GUI",
            description: "A customizable GUI for managing bug reports efficiently. Admins can customize the interface to suit their servers needs.",
            imageUrl: "/images/plugin/Bug_Report_Details.png",
            imageAlt: "Custom GUI Feature",
        }
    ];

    return (
        <div className="container mx-auto px-4 mt-12">
            {features.map((feature, index) => {
                return (
                    <FeatureSection key={feature.id} feature={feature} reverse={index % 2 !== 0} />
                );
            })}
        </div>
    );
};

const FeatureCard = ({title, description}: { title: string; description: string }) => {
    return (
        <motion.div
            whileHover={{scale: 1.05}}
            transition={{duration: 0.2}}
            className="w-full md:w-64 bg-[#5d808e5c] rounded-lg p-6 shadow-lg text-center"
        >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
        </motion.div>
    );
};

export default LandingPage;
