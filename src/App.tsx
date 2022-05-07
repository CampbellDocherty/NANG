import { FC } from 'react';
import { posterImages } from './assets/poster-images';
import { Grid, PartyInfo, PosterChunk } from './styles';

const App: FC = () => {
  return (
    <Grid>
      <PartyInfo>
        <p>NANG</p>
        <p>June 1st 2022</p>
        <p>Boxpark Shoreditch, E1 6GY</p>
      </PartyInfo>
      {posterImages.map((src, index) => {
        const alt = `nang-poster-${index + 1}`;
        return <PosterChunk key={alt} src={src} alt={alt} />;
      })}
    </Grid>
  );
};

export default App;
