/* eslint-disable functional/no-let */

/* eslint-disable functional/prefer-readonly-type */

/* eslint-disable functional/immutable-data */
import { PartyImages } from '../assets/party-images';

export const move = (
  array: PartyImages[],
  oldIndex: number,
  newIndex: number
) => {
  let newArray: PartyImages[] = [...array];
  [newArray[oldIndex], newArray[newIndex]] = [
    newArray[newIndex],
    newArray[oldIndex],
  ];

  return newArray;
};

export const moveElement = (
  array: PartyImages[],
  index: number,
  offset: number
) => {
  const newIndex = index + offset;
  return move(array, index, newIndex);
};
