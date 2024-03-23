import React from 'react';

interface IAboutProps {
    ref?: React.RefObject<HTMLDivElement>;
}

const About = ({ref}: IAboutProps) => {
    return (
        <div ref={ref}>
            <h1>About</h1>
            <p>Welcome to my website! This is the About page.</p>
        </div>
    );
};

export default About;