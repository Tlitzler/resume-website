import React from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

export interface ILinkTextProps {
    children: React.ReactNode;
    href?: string;
};

const LinkText = ({ children, href }: ILinkTextProps) => {
    const theme = useTheme();

    const StyledLinkText = styled.a({
        fontSize: theme.typography.link.fontSize,
        color: theme.typography.link.color,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    });

    return (
        <StyledLinkText href={href} target="_blank">{children}</StyledLinkText>
    );
};

export default LinkText;