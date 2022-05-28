import { partyImages } from './assets/party-images';
import { PosterChunk } from './styles';

export const StageOne = () => {
  return (
    <div>
      {partyImages.map((src, index) => {
        const alt = `party-${index + 1}`;
        return <PosterChunk key={alt} src={src} alt={alt} />;
      })}
    </div>
  );
};
