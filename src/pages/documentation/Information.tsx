import {FC, lazy, ReactElement, Suspense, useEffect, useState} from 'react';
import {Sidebar, Menu, MenuItem, menuClasses, MenuItemStyles} from 'react-pro-sidebar';
import {SidebarHeader} from '../../components/SidebarHeader';
import {Typography} from '../../components/Typography';
import {
    faCog,
    faTools,
    faQuestionCircle,
    faCircleExclamation,
    faSignsPost,
    faPager,
    faHeadset,
    faCode,
    faCompass,
    faPlus
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AdditionalPlugins from "./pages/additional-plugins";

const BugListGui = lazy(() => import("./pages/bug-list-gui"));
const BugReporting = lazy(() => import("./pages/bug-reporting"));
const Commands = lazy(() => import("./pages/commands"));
const CommonIssues = lazy(() => import("./pages/common-issues"));
const Configuration = lazy(() => import("./pages/configuration"));
const CustomStatuses = lazy(() => import("./pages/custom-statuses"));
const DatabaseIntegration = lazy(() => import("./pages/database-integration"));
const Installation = lazy(() => import("./pages/installation"));
const Introduction = lazy(() => import("./pages/introduction"));
const LinkingToDiscord = lazy(() => import("./pages/linking-to-discord"));
const Permissions = lazy(() => import("./pages/permissions"));
const PlanIntegration = lazy(() => import("./pages/plan-integration"));
const ReportingBugs = lazy(() => import("./pages/reporting-bugs"));
const SupportedLanguages = lazy(() => import("./pages/supported-languages"));
const SupportedVersions = lazy(() => import("./pages/supported-versions"));
const GuiCustomization = lazy(() => import("./pages/gui-customization"));
const FAQ = lazy(() => import('./pages/faq'));

type Theme = 'dark';

const themes = {
    dark: {
        sidebar: {
            backgroundColor: '#0b2948',
            color: 'white',
        },
        menu: {
            menuContent: '#082440',
            icon: '#dadada',
            hover: {
                backgroundColor: '#00458b',
                color: '#b6c8d9',
            },
            disabled: {
                color: '#3e5e7e',
            },
        },
    },
};

const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Information: FC = () => {
    const [toggled, setToggled] = useState(false);
    const [theme] = useState<Theme>('dark');
    const [currentHash, setCurrentHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const isActive = (hash: string) => {
        return currentHash === hash;
    };

    const menuItemStyles: MenuItemStyles = {
        root: {
            fontSize: '13px',
            fontWeight: 400,
        },
        icon: {
            color: themes[theme].menu.icon,
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent({level}: { level: number }) {
            return ({
                backgroundColor: level === 0
                    ? hexToRgba(themes[theme].menu.menuContent, 0.4)
                    : 'transparent',
            });
        },
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: themes[theme].menu.disabled.color,
            },
            '&:hover': {
                backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 0.8),
                color: themes[theme].menu.hover.color,
            },
        },
        label: {
            color: themes[theme].menu.icon,
        }
    };

    const contentMapping: Record<string, ReactElement> = {
        '#introduction': <Introduction />,
        '#database-integration': <DatabaseIntegration />,
        '#bug-list-gui': <BugListGui />,
        '#bug-reporting': <BugReporting />,
        '#commands': <Commands />,
        '#common-issues': <CommonIssues />,
        '#configuration': <Configuration />,
        '#custom-statuses': <CustomStatuses />,
        '#gui-customization': <GuiCustomization />,
        '#faq': <FAQ />,
        '#installation': <Installation />,
        '#linking-to-discord': <LinkingToDiscord />,
        '#permissions': <Permissions />,
        '#plan-integration': <PlanIntegration />,
        '#reporting-bugs': <ReportingBugs />,
        '#supported-languages': <SupportedLanguages />,
        '#supported-versions': <SupportedVersions />,
        '#additional-plugins': <AdditionalPlugins />,
    }

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

            <div style={{display: 'flex', height: '100%', direction: 'ltr'}}>
                <Sidebar
                    collapsed={false}
                    toggled={toggled}
                    onBackdropClick={() => setToggled(false)}
                    image="/images/sidebar.webp"
                    breakPoint="md"
                    backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 0.9)}
                    rootStyles={{color: themes[theme].sidebar.color}}
                    style={{borderRightWidth: 0, width: '300px'}}
                >
                    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                        <SidebarHeader style={{marginBottom: '12px', marginTop: '12px'}} rtl={false} />
                        <div style={{flex: 1, marginBottom: '32px'}}>

                            <Menu menuItemStyles={menuItemStyles}>
                                <li style={{
                                    padding: '0px 24px 0px 16px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon className="text-blue-500" icon={faSignsPost} style={{marginRight: '8px'}} />
                                    <Typography variant="body2" fontWeight={600} style={{letterSpacing: '0.5px'}}>
                                        INTRODUCTION
                                    </Typography>
                                </li>

                                <li style={{padding: '0 24px'}}>
                                    <MenuItem onClick={() => window.open('#introduction', '_self')} className={isActive('#introduction') ? 'bg-blue-500' : ''}>
                                        Introduction
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#supported-versions', '_self')} className={isActive('#supported-versions') ? 'bg-blue-500' : ''}>
                                        Supported Versions
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#supported-languages', '_self')} className={isActive('#supported-languages') ? 'bg-blue-500' : ''}>
                                        Supported Languages
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#additional-plugins', '_self')} className={isActive('#additional-plugins') ? 'bg-blue-500' : ''}>
                                        Additional Plugins
                                    </MenuItem>
                                </li>
                            </Menu>

                            <Menu menuItemStyles={menuItemStyles}>
                                <ol style={{
                                    padding: '0px 24px 0px 16px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon className="text-blue-500" icon={faCog} style={{marginRight: '8px'}} />
                                    <Typography variant="body2" fontWeight={600} style={{letterSpacing: '0.5px'}}>
                                        GETTING STARTED
                                    </Typography>
                                </ol>

                                <ol style={{padding: '0 24px'}}>
                                    <MenuItem onClick={() => window.open('#installation', '_self')} className={isActive('#installation') ? 'bg-blue-500' : ''}>
                                        Installation
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#configuration', '_self')} className={isActive('#configuration') ? 'bg-blue-500' : ''}>
                                        Configuration
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#gui-customization', '_self')} className={isActive('#gui-customization') ? 'bg-blue-500' : ''}>
                                        GUI Customization
                                    </MenuItem>
                                </ol>
                            </Menu>

                            <Menu menuItemStyles={menuItemStyles}>
                                <ol style={{
                                    padding: '0px 24px 0px 16px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon className="text-blue-500" icon={faPager} style={{marginRight: '8px'}} />
                                    <Typography variant="body2" fontWeight={600} style={{letterSpacing: '0.5px'}}>
                                        FEATURES
                                    </Typography>
                                </ol>

                                <ol style={{padding: '0 24px'}}>
                                    <MenuItem onClick={() => window.open('#bug-reporting', '_self')} className={isActive('#bug-reporting') ? 'bg-blue-500' : ''}>
                                        Bug Reporting
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#bug-list-gui', '_self')} className={isActive('#bug-list-gui') ? 'bg-blue-500' : ''}>
                                        Bug List GUI
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#custom-statuses', '_self')} className={isActive('#custom-statuses') ? 'bg-blue-500' : ''}>
                                        Custom Statuses
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#plan-integration', '_self')} className={isActive('#plan-integration') ? 'bg-blue-500' : ''}>
                                        Plan Integration
                                    </MenuItem>
                                </ol>
                            </Menu>

                            <Menu menuItemStyles={menuItemStyles}>
                                <div style={{
                                    padding: '0px 24px 0px 16px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon className="text-blue-500" icon={faCompass} style={{marginRight: '8px'}} />
                                    <Typography variant="body2" fontWeight={600} style={{letterSpacing: '0.5px'}}>
                                        USAGE
                                    </Typography>
                                </div>

                                <div style={{padding: '0 24px'}}>
                                    <MenuItem onClick={() => window.open('#commands', '_self')} className={isActive('#commands') ? 'bg-blue-500' : ''}>
                                        Commands
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#permissions', '_self')} className={isActive('#permissions') ? 'bg-blue-500' : ''}>
                                        Permissions
                                    </MenuItem>
                                </div>
                            </Menu>

                            <Menu menuItemStyles={menuItemStyles}>
                                <div style={{
                                    padding: '0px 24px 0px 16px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon className="text-blue-500" icon={faTools} style={{marginRight: '8px'}} />
                                    <Typography variant="body2" fontWeight={600} style={{letterSpacing: '0.5px'}}>
                                        ADVANCED
                                    </Typography>
                                </div>

                                <div style={{padding: '0 24px'}}>
                                    <MenuItem onClick={() => window.open('#linking-to-discord', '_self')} className={isActive('#linking-to-discord') ? 'bg-blue-500' : ''}>
                                        Linking to Discord
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#database-integration', '_self')} className={isActive('#database-integration') ? 'bg-blue-500' : ''}>
                                        Database Integration
                                    </MenuItem>
                                </div>
                            </Menu>

                            <Menu menuItemStyles={menuItemStyles}>
                                <div style={{
                                    padding: '0px 24px 0px 16px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon className="text-blue-500" icon={faCircleExclamation} style={{marginRight: '8px'}} />
                                    <Typography variant="body2" fontWeight={600} style={{letterSpacing: '0.5px'}}>
                                        TROUBLESHOOTING
                                    </Typography>
                                </div>

                                <div style={{padding: '0 24px'}}>
                                    <MenuItem onClick={() => window.open('#common-issues', '_self')} className={isActive('#common-issues') ? 'bg-blue-500' : ''}>
                                        Common Issues
                                    </MenuItem>
                                    <MenuItem onClick={() => window.open('#reporting-bugs', '_self')} className={isActive('#reporting-bugs') ? 'bg-blue-500' : ''}>
                                        Reporting Bugs
                                    </MenuItem>
                                </div>
                            </Menu>

                            <Menu menuItemStyles={menuItemStyles}>
                                <div style={{
                                    padding: '0px 24px 0px 16px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon className="text-blue-500" icon={faPlus} style={{marginRight: '8px'}} />
                                    <Typography variant="body2" fontWeight={600} style={{letterSpacing: '0.5px'}}>
                                        OTHER RESOURCES
                                    </Typography>
                                </div>

                                <MenuItem
                                    style={{borderLeft: '0'}}
                                    icon={<FontAwesomeIcon icon={faQuestionCircle} />}
                                    className={isActive('#faq') ? 'bg-blue-500' : ''}
                                    onClick={() => window.open('#faq', '_self')}
                                >
                                    FAQ
                                </MenuItem>
                                <MenuItem
                                    style={{borderLeft: '0'}}
                                    icon={<FontAwesomeIcon icon={faHeadset} />}
                                    onClick={() => window.open('https://discord.gg/Pq4k7jNKk4', '_blank')}
                                >
                                    Discord Server
                                </MenuItem>
                                <MenuItem
                                    style={{borderLeft: '0'}}
                                    icon={<FontAwesomeIcon icon={faCode} />}
                                    onClick={() => window.open('https://github.com/ItsLeon15/Bug-Reports', '_blank')}
                                >
                                    Source Code
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Sidebar>

                <main className="w-full h-full">
                    <Suspense fallback={
                        <div className="h-full flex justify-center items-center">
                            <div className="text-2xl text-gray-300">Loading...</div>
                        </div>
                    }>
                        {contentMapping[currentHash] || <div>Content not found</div>}
                    </Suspense>
                </main>
            </div>
        </>
    );
};

export default Information;
