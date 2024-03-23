import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { useTheme } from '@emotion/react';

export interface ISidebarProps {
    options?: string[];
    selectedOption?: number;
    selectOption?: (index: number) => void;
}

const Sidebar = ({options, selectedOption,selectOption}: ISidebarProps) => {
    const theme = useTheme();
    const [selected, setSelected] = React.useState(selectedOption || 0);

    const SelectedOption = styled.div({
        backgroundColor: theme.colors.buttons.sidebar.active,
        color: theme.colors.buttons.sidebar.color,
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
    });

    const SidebarWrapper = styled.div({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: 'grey',
        width: '200px',
        height: '100vh',
        position: 'fixed',
        paddingTop: '50px',
        gap: '10px',
    });

    return (
        <SidebarWrapper>
            {options && options.map((option, index) => {
                return selected === index ? (
                    <SelectedOption key={index}>
                        {option}
                    </SelectedOption>
                ) : (
                    <Button 
                        type='sidebar' 
                        onClick={() => {
                            setSelected(index);
                            selectOption && selectOption(index);
                        }
                    }>
                        {option}
                    </Button>
                )
            })}
        </SidebarWrapper>
    )
};

export default Sidebar;