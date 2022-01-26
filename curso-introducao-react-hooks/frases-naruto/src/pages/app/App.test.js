import { render, screen, fireEvent } from '@testing-library/react';
import {App} from './App'

test('renders the app with a button, a quote and a button', () => {
    render(<App />);
    // pegando o component pelo tipo
    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.getByRole('p');

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});
