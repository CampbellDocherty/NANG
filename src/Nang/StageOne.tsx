/* eslint-disable functional/no-let */

/* eslint-disable functional/prefer-readonly-type */

/* eslint-disable functional/immutable-data */
import { useEffect, useState } from 'react';
import PartyFullImage from '../assets/party-full-image.jpg';
import { PartyImages, partyImages } from '../assets/party-images';
import Poster from '../assets/poster.jpg';
import DragItem from './DragItem';
import {
  ImageContainers,
  PartyImage,
  PosterImage,
  PosterImagesList,
} from './styles';

const move = (array: PartyImages[], oldIndex: number, newIndex: number) => {
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

const moveElement = (array: PartyImages[], index: number, offset: number) => {
  const newIndex = index + offset;
  return move(array, index, newIndex);
};

export const StageOne = () => {
  const [images, setImages] = useState(partyImages);
  const [stageOneComplete, setStageOneComplete] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  const moveItem = (sourceId: number, destinationId: number) => {
    if (stageOneComplete) {
      return;
    }

    const sourceIndex = images.findIndex((item) => item.id === sourceId);
    const destinationIndex = images.findIndex(
      (item) => item.id === destinationId
    );

    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    const newImages = moveElement(images, sourceIndex, offset);
    setImages(newImages);
  };

  useEffect(() => {
    const imagesInCorrectPosition = images.filter((image, index) => {
      if (image.id === index + 1) {
        return true;
      }
      return false;
    });
    if (imagesInCorrectPosition.length === images.length) {
      setStageOneComplete(true);
    } else {
      setStageOneComplete(false);
    }
  }, [images]);

  useEffect(() => {
    if (stageOneComplete) {
      const timer = setTimeout(() => {
        setTransitionComplete(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [stageOneComplete]);

  console.log(transitionComplete);

  return true ? (
    <ImageContainers>
      <PartyImage src={PartyFullImage} alt="party" />
      <PosterImage src={Poster} alt="poster" />
    </ImageContainers>
  ) : (
    <PosterImagesList stageOneComplete={stageOneComplete}>
      {images.map(({ src, id }) => {
        const alt = `party-${id}`;
        return (
          <DragItem
            key={id}
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
