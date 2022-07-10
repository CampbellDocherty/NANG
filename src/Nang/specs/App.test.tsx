import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import App from '../../App';

describe('When a user lands on the home page', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('shows the title', () => {
    screen.getByText('NANG');
  });

  it('shows the date', () => {
    screen.getByText('July 14th 2022');
  });

  it('shows the venue', () => {
    screen.getByText('Boxpark Shoreditch');
  });

  it('shows the address', () => {
    screen.getByText('E1 6GY');
  });
});
