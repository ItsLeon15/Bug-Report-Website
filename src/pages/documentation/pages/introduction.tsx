import React from 'react';
import {Footer} from "../../../components/Footer";

const Introduction = () => {
    return (
        <>
            <div className="mx-auto p-14 text-gray-300 bg-[#2e4364b5] h-full max-lg:px-20 max-md:px-14 max-sm:px-6 px-36">
                <h1 className="text-4xl font-bold mb-6 text-blue-100">Introduction</h1>
                <h2 className="text-2xl font-bold mb-6 text-blue-300">What is Bug Report?</h2>
                <p className="mb-6 text-lg">
                    <span className="text-yellow-400">Bug Report</span> is a tool that helps server owners manage any
                    bugs
                    found by players which can then be
                    accessed by a GUI. This is especially helpful as information about the player is stored as soon as
                    they
                    submit a bug report. Information collected when a bug report is submitted is as follows:
                </p>

                <ul className="list-disc pl-8 mb-6 text-lg">
                    <li>Server Name</li>
                    <li>Player Name</li>
                    <li>Player's UUID</li>
                    <li>Current World Name</li>
                    <li>Full Message</li>
                    <li>Category ID (If the option is turned on)</li>
                    <li>Status (Can be customized using a GUI)</li>
                    <li>Date & Time</li>
                    <li>Player's Location</li>
                    <li>Player's Game Mode</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 text-blue-300">Why should I use it?</h2>
                <p className="mb-6 text-lg">
                    <span className="text-yellow-400">Bug Report</span> is a simple and easy-to-use tool that can be
                    used by
                    server owners to manage bug reports
                    submitted by players. This tool is especially helpful for server owners who want to keep track of
                    bugs
                    found by players and want to manage them efficiently.

                    <br /><br />

                    Sometimes, players may find bugs that are not critical but are still important to fix. This tool can
                    help you keep track of such bugs and fix them.
                </p>

                <h2 className="text-2xl font-bold mb-6 text-blue-300">How does it work?</h2>
                <p className="mb-6 text-lg">
                    <span className="text-yellow-400">Bug Report</span> works by allowing players to submit
                    bug reports using a command. Once a bug report is submitted, the information is stored
                    in a database and can be accessed by the server owner using a GUI. The GUI displays all the
                    information related to the bug report, including the status, category, and description.
                    <br /><br />
                    The server owner can then manage the bug reports by changing the status of the bug report, archiving
                    it, or deleting it.
                </p>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="/documentation/information/#installation">Get Started</a>
                </button>
            </div>

            <Footer bg="#2e4364b5" />
        </>
    );
};

export default Introduction;
