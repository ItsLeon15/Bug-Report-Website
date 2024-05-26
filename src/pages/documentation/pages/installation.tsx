import React from "react";
import {Footer} from "../../../components/Footer";

const Installation: React.FC = () => {
    return (
        <>
            <div className="mx-auto p-14 text-gray-300 bg-[#2e4364b5] h-full max-lg:px-20 max-md:px-14 max-sm:px-6 px-36">
                <h1 className="text-4xl font-bold mb-6 text-blue-100">Bug Report Plugin Installation Guide</h1>

                <section className="mb-6" id="prerequisites">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-300">Prerequisites</h2>
                    <p>To ensure a smooth installation process for the Bug Report plugin, please verify that your server
                        meets the following requirements:</p>
                    <ul className="list-disc pl-8">
                        <li>Running Minecraft version 1.16.4 to 1.20.6.</li>
                        <li>Server software compatible with the plugin (A list can be
                            found <a href="/documentation/information/#supported-versions" className="text-blue-400">here</a>).
                        </li>
                    </ul>
                </section>

                <section className="mb-6" id="downloading">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-300">Downloading the Plugin</h2>
                    <p>The latest version of the Bug Report plugin can be downloaded from
                        the <a href="https://www.spigotmc.org/resources/bug-report.110732/" className="text-blue-400">SpigotMC
                            resource page</a>.</p>
                </section>

                <section className="mb-6" id="installation">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-300">Installation Steps</h2>
                    <ol className="list-decimal pl-8">
                        <li>Stop your Minecraft server if it's currently running.</li>
                        <li>Place the
                            downloaded <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">BugReports-x.xx.x-latest.jar</code> file
                            into your
                            server's <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">plugins</code> directory.
                        </li>
                        <li>Restart your server to allow the plugin to be loaded.</li>
                        <li>Once the server has restarted, the plugin will create a default configuration file
                            (<code className="bg-[#273141] text-gray-200 font-mono text-base p-1">config.yml</code>) in
                            the <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">/plugins/BugReport/</code> directory.
                        </li>
                    </ol>
                </section>

                <section className="mb-6" id="configuration">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-300">Initial Configuration</h2>
                    <p>To configure the Bug Report plugin according to your server's needs, edit
                        the <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">config.yml</code> file.
                        This file allows you to customize settings such as notification preferences, report categories,
                        and more.
                    </p>
                    <br />
                    <p>For a detailed guide on configuring the plugin, refer to
                        the <a href="/documentation/information/#configuration" className="text-blue-400">Configuration</a> section.
                    </p>
                </section>

                <section className="mb-6" id="getting-started">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-300">Getting Started</h2>
                    <p>When the plugin installed and configured, players can use the command
                        <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">{`/bugreport <message>`}</code> to
                        submit bug reports in-game. Admins can manage these reports using the GUI interface with the
                        command <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">/buglist</code>.
                        This may vary depending on the configuration settings.
                    </p>
                </section>

                <section id="reloading">
                    <h2 className="text-3xl font-semibold mb-4 text-blue-300">Reloading the Plugin</h2>
                    <p>
                        If you make changes to
                        the <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">config.yml</code> file,
                        you can reload the plugin using the command
                        <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">/buglist reload</code>.
                        This command will reload the plugin and apply any changes made to the configuration file.
                        If you make any changes to any language file in
                        the <code className="bg-[#273141] text-gray-200 font-mono text-base p-1">languages/</code> directory,
                        this will also work.
                    </p>
                </section>
            </div>

            <Footer bg="#2e4364b5" />
        </>
    );
};

export default Installation;
