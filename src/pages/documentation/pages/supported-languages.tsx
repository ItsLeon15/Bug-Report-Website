import React from "react";
import {Footer} from "../../../components/Footer";

const SupportedLanguages = () => {
    const languageSupportInfo = {
        english: {
            logo: "/images/languages/US_Flag.svg",
            name: "English",
            supported: true,
            languageKey: "en_US",
        },
        spanish: {
            logo: "/images/languages/Spain_Flag.svg",
            name: "Spanish",
            supported: true,
            languageKey: "es_ES",
        },
        french: {
            logo: "/images/languages/France_Flag.svg",
            name: "French",
            supported: true,
            languageKey: "fr_FR",
        },
        german: {
            logo: "/images/languages/Germany_Flag.svg",
            name: "German",
            supported: true,
            languageKey: "de_DE",
        },
        italian: {
            logo: "/images/languages/Italy_Flag.svg",
            name: "Italian",
            supported: true,
            languageKey: "it_IT",
        },
        simplifiedChinese: {
            logo: "/images/languages/China_Flag.svg",
            name: "Simplified Chinese",
            supported: true,
            languageKey: "zh_CN",
        },
        russian: {
            logo: "/images/languages/Russian_Flag.svg",
            name: "Russian",
            supported: true,
            languageKey: "ru_RU",
        }
    };

    return (
        <>
            <div className="mx-auto p-14 text-gray-300 bg-[#2e4364b5] h-full max-lg:px-20 max-md:px-14 max-sm:px-6 px-36">
                <h1 className="text-4xl font-bold mb-6 text-blue-100">Supported Languages</h1>
                <p className="mb-6 text-lg">
                    <span className="text-yellow-400">Bug Report</span> is available in multiple languages, ensuring a
                    wide range of users can use the plugin. The following languages are supported:
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-[#1b2a41]">
                            <tr>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Language</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Supported</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Language
                                    Key
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#2e4364] divide-y divide-gray-600">
                            {Object.entries(languageSupportInfo).map(([key, {logo, name, supported, languageKey}]) => (
                                <tr key={key}>
                                    <td className="px-5 py-5 text-sm">
                                        <div className="flex items-center">
                                            <img src={logo} alt={name} className="h-6 mr-3" />
                                            {name}
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 text-sm">
                                        <span className={`font-semibold ${supported ? 'text-green-400' : 'text-red-400'}`}>Yes</span>
                                    </td>
                                    <td className="px-5 py-5 text-sm">
                                        <code className="text-gray-200 font-mono text-base p-1">{languageKey}</code>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <br />

                <h2 className="text-2xl font-bold mb-6 text-blue-300">How to change the language?</h2>
                <p className="mb-6 text-lg">
                    To change the language of the plugin, simply change the language in
                    the <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">config.yml</code> file.
                    The plugin will automatically switch to the selected language after being
                    reloaded <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">/buglist reload</code>.
                </p>

                <div className="bg-[#273141] text-gray-200 font-mono text-base p-4 rounded-md mb-6">
                    <code lang="yaml">language: en_US</code>
                </div>

                <p className="mb-6 text-lg">
                    Or, you can also change the language using the plugin's GUI.
                    The GUI allows you to change the language of the plugin with just a few clicks.
                </p>

                <div className="flex justify-center bg-[#2e4364] p-4 rounded-lg flex-col w-7/12">
                    <h2 className="text-2xl font-bold mb-6 text-blue-300">Bug Report Languages GUI</h2>
                    <img src="/images/plugin/Bug_List_Languages.png" alt="Bug Report Languages" className="mt-8 self-center w-full md:w-10/12 sm:w" />
                </div>

                <br />

                <h2 className="text-2xl font-bold mb-6 text-blue-300">How to add a new language?</h2>
                <p className="mb-6 text-lg">
                    To add a new language to the plugin, at the moment,
                    you will need to manually all of the translations into
                    the <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">languages.yml</code> file.
                    Once you have added all the translations, you can then change the language in
                    the <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">config.yml</code> file. The
                    key of the new language
                    should be the same as the key in
                    the <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">languages.yml</code> file.
                </p>

                <div className="bg-[#273141] text-gray-200 font-mono text-base p-4 rounded-md mb-6">
                    <code lang="yaml">language: ${'{language_key}'}</code>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-blue-300">Contributing a new language</h2>
                <p className="mb-6 text-lg">
                    If you would like to contribute a new language to the plugin, please feel free to open a pull
                    request on the
                    <a href="https://github.com/ItsLeon15/Bug-Reports" className="text-blue-400 text-lg hover:text-blue-300 ml-1">
                        GitHub repository
                    </a>.
                </p>
            </div>

            <Footer bg="#2e4364b5" />
        </>
    );
};

export default SupportedLanguages;
