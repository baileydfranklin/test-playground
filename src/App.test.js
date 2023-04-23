import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

it('it renders the correct text in header', () => {
  render(<App />);
  const headerEl = screen.getByRole('heading');
  expect(headerEl.textContent).toBe('Testing Playground');
});

describe('When there is a button', () => {
  test('it changes color when clicked', () => {
    render(<App />);
    const colorBtn = screen.getByRole('button');
    expect(colorBtn.getAttribute('style')).toBe('background-color: green;');

    fireEvent.click(colorBtn)

    expect(colorBtn.getAttribute('style')).toBe('background-color: blue;');
    expect(colorBtn.textContent).toBe('Change button color to green');

    fireEvent.click(colorBtn)

    expect(colorBtn.getAttribute('style')).toBe('background-color: green;');
    expect(colorBtn.textContent).toBe('Change button color to blue');
  })
});