import React from 'react';
import DisplayText from '../Atoms/DisplayText';
import styled from '@emotion/styled';

const Home = () => {
    const NameText = styled.h1({
        fontSize: '2em',
        fontWeight: 'bold',
    });

    return (
        <div>
            <NameText>
                Tyler Litzler
            </NameText>
            <DisplayText>
                Interactive Resume Website
            </DisplayText>
        </div>
    );
};

export default Home;