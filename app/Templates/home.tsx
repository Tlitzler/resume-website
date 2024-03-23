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
                This is a basic homepage template.
            </DisplayText>
        </div>
    );
};

export default Home;