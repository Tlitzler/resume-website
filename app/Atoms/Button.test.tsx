import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    test('renders default button with correct text', () => {
        const buttonText = 'Click me';
        const { getByText } = render(<Button>{buttonText}</Button>);
        const buttonElement = getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders primary button', () => {
        const buttonText = 'Primary Button';
        const { getByText } = render(<Button type="primary">{buttonText}</Button>);
        const buttonElement = getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('primary');
    });

    test('renders secondary button', () => {
        const buttonText = 'Secondary Button';
        const { getByText } = render(<Button type="secondary">{buttonText}</Button>);
        const buttonElement = getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('secondary');
    });

    test('renders sidebar button', () => {
        const buttonText = 'Sidebar Button';
        const { getByText } = render(<Button type="sidebar">{buttonText}</Button>);
        const buttonElement = getByText(buttonText);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('sidebar');
    });

    test('renders icon button', () => {
        const { getByRole } = render(<Button type="icon"><span className="icon">Icon</span></Button>);
        const iconElement = getByRole('button');
        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveClass('icon');
    });

    test('calls onClick handler when clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
        const buttonElement = getByText('Click me');
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });

});