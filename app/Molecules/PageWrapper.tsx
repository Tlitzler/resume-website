import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

export interface IPageWrapperProps {
    children?: React.ReactNode;
    sidebarContent?: React.ReactNode;
    onScroll?: (event: Event) => void;
}

const PageWrapper = ({children, sidebarContent, onScroll}: IPageWrapperProps) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const StyledWrapper = styled.div({
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.colors.background,
    });

    const StyledSplashWrapper = styled.div({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '200px',
        height: '100vh',
        overflowY: 'auto',
        paddingTop: '50px',
    });

    useEffect(() => {
        if (onScroll && wrapperRef?.current) {
            wrapperRef.current.addEventListener('scroll', onScroll);
        }

        return () => {
            if (onScroll && wrapperRef?.current) {
                wrapperRef.current.removeEventListener('scroll', onScroll);
            }
        }
    }, [onScroll]);

    return (
        <StyledWrapper>
            {sidebarContent && sidebarContent}
            <StyledSplashWrapper  ref={wrapperRef}>
                {children}
            </StyledSplashWrapper>
        </StyledWrapper>
    );
}

export default PageWrapper;