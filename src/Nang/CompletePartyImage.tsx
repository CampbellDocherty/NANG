import { useState } from 'react';
import PartyFullImage from '../assets/party-full-image.jpg';
import Poster from '../assets/poster.jpg';
import { ImageContainers, PartyImage, PosterImage } from './styles';

export const CompletePartyImage = () => {
  const [partyImageHidden, setPartyImageHidden] = useState(false);

  const onClick = () => {
    setPartyImageHidden(!partyImageHidden);
  };

  return (
    <ImageContainers onClick={onClick}>
      <PartyImage
        partyImageHidden={partyImageHidden}
        src={PartyFullImage}
        alt="party"
      />
      <PosterImage
        partyImageHidden={partyImageHidden}
        src={Poster}
        alt="poster"
      />
    </ImageContainers>
  );
};
