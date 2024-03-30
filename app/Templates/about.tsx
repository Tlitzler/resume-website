import React from 'react';
import styled from '@emotion/styled';
import DisplayText from '../Atoms/DisplayText';

interface IAboutProps {
    ref?: React.RefObject<HTMLDivElement>;
}

const About = ({ref}: IAboutProps) => {
    const AboutWrapper = styled.div({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    });

    return (
        <AboutWrapper ref={ref}>
            <DisplayText type="header">About me</DisplayText>
            <DisplayText type="paragraph">Welcome to my website! This is the About page.</DisplayText>
        </AboutWrapper>
    );
};

export default About;