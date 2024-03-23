import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

interface DisplayTextProps {
    children: React.ReactNode;
    type?: 'header' | 'paragraph' | 'footer';
}

const DisplayText: React.FC<DisplayTextProps> = ({ children, type }) => {
    const theme = useTheme();
    
    const Header = styled.h1({
        fontSize: theme.typography.header.fontSize,
        fontWeight: theme.typography.header.fontWeight,
    });

    const Paragraph = styled.p({
        fontSize: theme.typography.paragraph.fontSize,
    });

    const Footer = styled.footer({
        fontSize: theme.typography.footer.fontSize,
        color: theme.typography.footer.color,
    });

    switch (type) {
        case 'header':
            return <Header>{children}</Header>;
        case 'footer':
            return <Footer>{children}</Footer>;
        case 'paragraph':
        default:
            return <Paragraph>{children}</Paragraph>;
    }
};

export default DisplayText;