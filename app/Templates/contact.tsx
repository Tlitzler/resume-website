import React from 'react';
import DisplayText from '../Atoms/DisplayText';
import LinkText from '../Atoms/LinkText';
import styled from '@emotion/styled';

const Contact = () => {
    const ContactWrapper = styled.div({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    });

    const StyledForm = styled.form({
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto',
    });

    return (
        <ContactWrapper>
            <DisplayText type="header">Contact Page</DisplayText>
            <DisplayText type="paragraph">You can reach me at the following:</DisplayText>
            <DisplayText type="paragraph">Email: 
                <LinkText href="mailto:tlitzler22@gmail.com">
                    tlitzler22@gmail.com
                </LinkText>
            </DisplayText>
            <DisplayText type="paragraph">Phone: 281-203-7453</DisplayText>
            <LinkText href="https://www.linkedin.com/in/tyler-litzler">
                Or Connect with me on LinkedIn
            </LinkText>

            <h2>Or send me a message:</h2>
            <StyledForm>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={4} />

                <button type="submit">Submit</button>
            </StyledForm>
        </ContactWrapper>
    );
};

export default Contact;