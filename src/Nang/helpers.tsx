/* eslint-disable functional/no-let */

/* eslint-disable functional/prefer-readonly-type */

/* eslint-disable functional/immutable-data */
import { PartyImages } from '../assets/party-images';

export const move = (
  array: PartyImages[],
  oldIndex: number,
  newIndex: number
) => {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  let newArray: PartyImages[] = [];
  array.forEach((image, index) => {
    if (index === oldIndex) {
      return;
    }
    if (index === newIndex) {
      newArray.push(array[oldIndex]);
    }
    newArray.push(image);
  });

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
