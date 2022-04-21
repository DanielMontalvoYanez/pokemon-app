import { render, screen } from '@testing-library/react';
import App from './App';
describe('Pokemon APP', () => {
  it('should show a list of caracters including bulbasaur', () => {
    render(<App />);
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
  });
});
