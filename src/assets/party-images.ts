import Party1 from './party-1.jpg';
import Party2 from './party-2.jpg';
import Party3 from './party-3.jpg';
import Party4 from './party-4.jpg';
import Party5 from './party-5.jpg';
import Party6 from './party-6.jpg';
import Party7 from './party-7.jpg';
import Party8 from './party-8.jpg';
import Party9 from './party-9.jpg';

export interface PartyImages {
  readonly src: string;
  readonly id: number;
}

export const partyImages = [
  { src: Party4, id: 1 },
  { src: Party2, id: 2 },
  { src: Party5, id: 3 },
  { src: Party3, id: 4 },
  { src: Party1, id: 5 },
  { src: Party8, id: 6 },
  { src: Party9, id: 7 },
  { src: Party7, id: 8 },
  { src: Party6, id: 9 },
];
