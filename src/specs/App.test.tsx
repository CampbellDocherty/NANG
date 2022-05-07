import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import App from '../App';

describe('When a user lands on the home page', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('shows the title', () => {
    screen.getByText('NANG');
  });

  it('shows the date', () => {
    screen.getByText('June 1st 2022');
  });

  it('shows the location', () => {
    screen.getByText('Boxpark Shoreditch, E1 6GY');
  });

  it('shows the nang poster', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [...Array(9)].forEach((_, index) => {
      screen.getByAltText(`nang-poster-${index + 1}`);
    });
  });
});
