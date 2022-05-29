import { useEffect, useState } from 'react';
import { partyImages } from '../assets/party-images';
import { CompletePartyImage } from './CompletePartyImage';
import DragItem from './DragItem';
import { moveElement } from './helpers';
import { PosterImagesList } from './styles';

export const StageOne = ({
  stageOneComplete,
  setStageOneComplete,
  stageOnePreviouslyCompleted,
}: {
  readonly stageOneComplete: boolean;
  readonly stageOnePreviouslyCompleted: boolean;
  readonly setStageOneComplete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [images, setImages] = useState(partyImages);
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
  }, [images, setStageOneComplete]);

  useEffect(() => {
    if (stageOneComplete) {
      const timer = setTimeout(() => {
        setTransitionComplete(true);
        localStorage.setItem('stageOneComplete', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [stageOneComplete]);

  return transitionComplete || stageOnePreviouslyCompleted ? (
    <CompletePartyImage />
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
