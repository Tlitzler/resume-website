import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

export interface IButtonProps {
    children?: React.ReactNode;
    type?: 'primary' | 'secondary' | 'sidebar' | 'icon'; 
    onClick?: () => void;
};
const Button = ({children, type, onClick}: IButtonProps) => {
    const theme = useTheme();

    const PrimaryButton = styled.button({
        backgroundColor: theme.colors.buttons.primary.background,
        color: theme.colors.buttons.primary.color,
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colors.buttons.primary.hover,
        },
        '&:active': {
            backgroundColor: theme.colors.buttons.primary.active,
        },
    });

    const SecondaryButton = styled.button({
        backgroundColor: theme.colors.buttons.secondary.background,
        color: theme.colors.buttons.secondary.color,
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colors.buttons.secondary.hover,
        },
        '&:active': {
            backgroundColor: theme.colors.buttons.secondary.active,
        },
    });

    const SidebarButton = styled.button({
        backgroundColor: theme.colors.buttons.sidebar.background,
        color: theme.colors.buttons.sidebar.color,
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        '&:hover': {
            backgroundColor: theme.colors.buttons.sidebar.hover,
        },
        '&:active': {
            backgroundColor: theme.colors.buttons.sidebar.active,
        },
    });

    const IconButton = styled.button({
        backgroundColor: theme.colors.buttons.icon.background,
        color: theme.colors.buttons.icon.color,
        padding: '5px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colors.buttons.icon.hover,
        },
        '&:active': {
            backgroundColor: theme.colors.buttons.icon.active,
        },
    });


    const handleClick = useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    switch(type) {
        case 'secondary':
            return <SecondaryButton onClick={handleClick}>{children}</SecondaryButton>;
        case 'sidebar':
            return <SidebarButton onClick={handleClick}>{children}</SidebarButton>;
        case 'icon':
            return <IconButton onClick={handleClick}>{children}</IconButton>;
        case 'primary':
        default:
            return <PrimaryButton onClick={handleClick}>{children}</PrimaryButton>;
    }
};

export default Button;