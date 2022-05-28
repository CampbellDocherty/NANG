import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('When a user lands on the home page', () => {
  beforeEach(async () => {
    render(<App />);
    await userEvent.click(screen.getByText('1'));
  });

  it('shows the nang poster', () => {
    screen.getByAltText('party-1');
    screen.getByAltText('party-2');
    screen.getByAltText('party-3');
    screen.getByAltText('party-4');
    screen.getByAltText('party-5');
    screen.getByAltText('party-6');
    screen.getByAltText('party-7');
    screen.getByAltText('party-8');
    screen.getByAltText('party-9');
  });

  // it('shows the nang poster', () => {
  //   screen.getByAltText('nang-poster-1');
  //   screen.getByAltText('nang-poster-2');
  //   screen.getByAltText('nang-poster-3');
  //   screen.getByAltText('nang-poster-4');
  //   screen.getByAltText('nang-poster-5');
  //   screen.getByAltText('nang-poster-6');
  //   screen.getByAltText('nang-poster-7');
  //   screen.getByAltText('nang-poster-8');
  //   screen.getByAltText('nang-poster-9');
  // });
});
