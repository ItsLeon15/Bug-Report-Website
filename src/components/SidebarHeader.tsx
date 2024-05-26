import styled from '@emotion/styled';
import React from 'react';
import {Logo} from "./NavBar";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    rtl: boolean;
}

const StyledSidebarHeader = styled.div`
    height: 64px;
    min-height: 64px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    > div {
        width: 100%;
        overflow: hidden;
    }
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({children, rtl, ...rest}) => {
    return (
        <StyledSidebarHeader {...rest}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className="flex items-center space-x-3">
                    <Logo />
                    <a href="/" className="text-2xl font-semibold text-slate-300">
                        Bug Report
                    </a>
                </div>
            </div>
        </StyledSidebarHeader>
    );
};
