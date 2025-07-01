import React from 'react';
import { render, screen } from '@testing-library/react';
import AuroraButton from './AuroraButton';

describe('AuroraButton', () => {
  it('should render the button with correct text', () => {
    render(<AuroraButton text="Test Button" link="/test" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should have the correct link', () => {
    render(<AuroraButton text="Test Button" link="/test" />);
    const buttonElement = screen.getByRole('link', { name: /Test Button/i });
    expect(buttonElement).toHaveAttribute('href', '/test');
  });
});
