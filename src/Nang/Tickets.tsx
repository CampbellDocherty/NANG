import Dice from '../assets/dice.png';
import Eventbrite from '../assets/eventbrite.png';
import {
  DiceImage,
  EventbriteImage,
  LinkContainer,
  TicketsList,
} from './styles';

const Tickets = () => {
  return (
    <TicketsList>
      <p>Tickets</p>
      <LinkContainer>
        <a
          href="https://dice.fm/event/wb6gg-nang-10-1st-jun-boxpark-shoreditch-london-tickets?lng=en"
          target="_blank"
          rel="noreferrer"
        >
          <DiceImage src={Dice} alt="dice" />
        </a>
        <a
          href="https://www.eventbrite.co.uk/e/nang-tickets-310534305467"
          target="_blank"
          rel="noreferrer"
        >
          <EventbriteImage src={Eventbrite} alt="eventbrite" />
        </a>
      </LinkContainer>
    </TicketsList>
  );
};

export default Tickets;
