import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('When a user lands on the home page', () => {
  beforeEach(async () => {
    render(<App />);
    await userEvent.click(screen.getByText('2'));
  });

  it('has the riddle on the page', () => {
    screen.getByText(
      "What is Ralph's classic last tune to finish the dance off?"
    );
    screen.getByText('DM @thatsnang to submit your answer.');
    screen.getByText(
      'First 5 correct answers get a free double from Ralph himself!'
    );
  });

  it('shows the ralph images', () => {
    screen.getByAltText('ralph-on-the-table-1');
    screen.getByAltText('ralph-on-the-table-2');
    screen.getByAltText('ralph-on-the-table-3');
    screen.getByAltText('ralph-on-the-table-4');
    screen.getByAltText('ralph-on-the-table-5');
    screen.getByAltText('ralph-on-the-table-6');
    screen.getByAltText('ralph-on-the-table-7');
    screen.getByAltText('ralph-on-the-table-8');
    screen.getByAltText('ralph-on-the-table-9');
  });
});
