import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            sidebar: string;
            buttons: {
                primary: {
                    background: string;
                    color: string;
                    hover: string;
                    active: string;
                };
                secondary: {
                    background: string;
                    color: string;
                    hover: string;
                    active: string;
                };
                sidebar: {
                    background: string;
                    color: string;
                    hover: string;
                    active: string;
                };
                icon: {
                    background: string;
                    color: string;
                    hover: string;
                    active: string;
                };
            };
        };
        typography: {
            fontFamily: string;
            fontSize: string;
            header: {
                fontSize: string;
                fontWeight: string;
            };
            paragraph: {
                fontSize: string;
            };
            footer: {
                fontSize: string;
                color: string;
            };
            link: {
                fontSize: string;
                color: string;
            };
        };
    }
}