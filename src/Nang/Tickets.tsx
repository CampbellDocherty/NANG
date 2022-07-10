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
          href="https://dice.fm/event/9dkno-nang-14th-jul-boxpark-shoreditch-london-tickets"
          target="_blank"
          rel="noreferrer"
        >
          <DiceImage src={Dice} alt="dice" />
        </a>
        <a
          href="https://www.eventbrite.co.uk/e/nang-tickets-310562951147"
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
