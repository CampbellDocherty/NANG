/* eslint-disable functional/prefer-readonly-type */

/* eslint-disable functional/immutable-data */
import { useState } from 'react';
import DragItem from './DragItem';
import { PartyImages, partyImages } from './assets/party-images';
import { PosterImagesList } from './styles';

const move = (array: PartyImages[], oldIndex: number, newIndex: number) => {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
};

const moveElement = (array: PartyImages[], index: number, offset: number) => {
  const newIndex = index + offset;

  return move(array, index, newIndex);
};

export const StageOne = () => {
  const [images, setImages] = useState(partyImages);

  const moveItem = (sourceId: number, destinationId: number) => {
    const sourceIndex = images.findIndex((item) => item.id === sourceId);
    const destinationIndex = images.findIndex(
      (item) => item.id === destinationId
    );

    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    const newItems = moveElement(images, sourceIndex, offset);
    setImages(newItems);
  };

  return (
    <PosterImagesList>
      {images.map(({ src, id }, index: number) => {
        const alt = `party-${index + 1}`;
        return (
          <DragItem
            key={alt}
            id={id}
            onMoveItem={moveItem}
            src={src}
            alt={alt}
          />
        );
      })}
    </PosterImagesList>
  );
};
