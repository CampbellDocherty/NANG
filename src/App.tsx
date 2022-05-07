import { FC } from 'react';
import Arrow from './assets/arrow.png';
import { posterImages } from './assets/poster-images';
import { CircleArrow, Filler, Grid, PartyInfo, PosterChunk } from './styles';

const App: FC = () => {
  return (
    <Grid>
      <PartyInfo>
        <p>NANG</p>
        <p>June 1st 2022</p>
        <p>Boxpark Shoreditch</p>
        <p>E1 6GY</p>
      </PartyInfo>
      <CircleArrow src={Arrow} alt="circle arrow to flip the cards" />
      <Filler />
      {posterImages.map((src, index) => {
        const alt = `nang-poster-${index + 1}`;
        return <PosterChunk key={alt} src={src} alt={alt} />;
      })}
    </Grid>
  );
};

export default App;
