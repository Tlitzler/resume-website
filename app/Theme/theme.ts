import { Theme } from '@emotion/react';

const theme: Theme = {
    colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        background: '#f8f9fa',
        sidebar: '#343a40',
        buttons: {
            primary: {
                background: '#007bff',
                color: '#ffffff',
                hover: '#0056b3',
                active: '#008bff',
            },
            secondary: {
                background: '#6c757d',
                color: '#ffffff',
                hover: '#5a6268',
                active: '#7b8288',
            },
            sidebar: {
                background: 'transparent',
                color: '#ffffff',
                hover: '#23272b',
                active: '#454d53',
            },
            icon: {
                background: 'transparent',
                color: '#000000',
                hover: '#e0e0e0',
                active: '#f5f5f5',
            },
        },
        // Add more color values here
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        header: {
            fontSize: '26px',
            fontWeight: 'bold',
        },
        paragraph: {
            fontSize: '16px',
        },
        footer: {
            fontSize: '12px',
            color: 'gray',
        },
        link: {
            fontSize: '16px',
            color: '#007bff',
        },
        // Add more typography styles here
    },
    // Add more theme properties here
};

export default theme;