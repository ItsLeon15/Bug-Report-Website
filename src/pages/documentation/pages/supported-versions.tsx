import React from "react";
import {Footer} from "../../../components/Footer";

const SupportedVersions = () => {
    const softwareSupportInfo = {
        bukkit: {
            logo: "/images/software/Bukkit.webp",
            name: "Bukkit",
            supported: true,
            tested: true,
        },
        papermc: {
            logo: "/images/software/PaperMC.webp",
            name: "PaperMC",
            supported: true,
            tested: true,
        },
        spigot: {
            logo: "/images/software/Spigot.webp",
            name: "Spigot",
            supported: true,
            tested: true,
        },
        purpur: {
            logo: "/images/software/Purpur.webp",
            name: "Purpur",
            supported: true,
            tested: false,
        },
        sponge: {
            logo: "/images/software/Sponge.webp",
            name: "Sponge",
            supported: false,
            tested: false,
        },
        mohist: {
            logo: "/images/software/Mohist.webp",
            name: "Mohist",
            supported: false,
            tested: false,
        },
        fabric: {
            logo: "/images/software/Fabric.webp",
            name: "Fabric",
            supported: false,
            tested: false,
        },
        forge: {
            logo: "/images/software/Forge.webp",
            name: "Forge",
            supported: false,
            tested: false,
        }
    };

    return (
        <>
            <div className="mx-auto p-14 text-gray-300 bg-[#2e4364b5] h-full max-lg:px-20 max-md:px-14 max-sm:px-6 px-36">
                <h1 className="text-4xl font-bold mb-6 text-blue-100">Supported Versions</h1>
                <h2 className="text-2xl font-bold mb-6 text-blue-300">Plugin Compatibility</h2>

                <p className="mb-6 text-lg">
                    The plugin is designed to be universally compatible across a wide range of Minecraft versions.
                    From the classic 1.16.4 to the latest
                    releases, <span className="text-yellow-400">Bug Report</span> is
                    designed to work with all versions.
                </p>

                <div className="flex items-center justify-start gap-4 mt-6">
                    <span className="inline-block bg-[#1b2a41] px-5 py-3 rounded-md shadow-lg">
                        <span className="text-xl font-bold text-blue-400">Minecraft: </span>
                        <span className="text-lg text-gray-300">1.16.4 to 1.20.6</span>
                    </span>
                        <span className="inline-block bg-[#1b2a41] px-5 py-3 rounded-md shadow-lg">
                        <span className="text-xl font-bold text-blue-400">Plugin Version: </span>
                        <span className="text-lg text-gray-300">v0.12.1 <span className="text-green-400">(Current)</span></span>
                    </span>
                </div>

                <p className="mt-8 text-lg">
                    Future Minecraft versions will also be supported as they are released.
                </p>

                <br />

                <h2 className="text-2xl font-bold mb-3 text-blue-300">Supported Software</h2>
                <p className="mb-3 text-lg">
                    The plugin is designed to work with a variety of server software, ensuring that you can use
                    <span className="text-yellow-400"> Bug Report</span> with your preferred server software. The plugin won't work with modded versions of Minecraft such as Forge or Fabric.
                </p>

                <br />

                <p className="mb-4 text-lg">
                    The following server software is supported:
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-[#1b2a41]">
                            <tr>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Software</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Supported</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Tested</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#2e4364] divide-y divide-gray-600">
                            {Object.entries(softwareSupportInfo).map(([key, {logo, name, supported, tested}]) => (
                                <tr key={key}>
                                    <td className="px-5 py-5 text-sm">
                                        <div className="flex items-center">
                                            <img src={logo} alt={name} className="h-8 mr-3" />
                                            {name}
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 text-sm">
                                        <span className={`font-semibold ${supported ? 'text-green-400' : 'text-red-400'}`}>
                                            {supported ? 'Yes' : 'No'}
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 text-sm">
                                        <span className={`font-semibold ${tested ? 'text-green-400' : 'text-red-400'}`}>
                                            {tested ? 'Yes' : 'No'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer bg="#2e4364b5" />
        </>
    );
};

export default SupportedVersions;
