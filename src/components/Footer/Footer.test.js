import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer on root path', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/ react/i);
  expect(linkElement).toBeInTheDocument();
});