import { FC, useEffect, useState } from 'react';
import { PartyDetails } from './PartyDetails';
import { Stages } from './Stages';
import { partyImages } from './assets/party-images';
// import { posterImages } from './assets/poster-images';
import { ralphImages } from './assets/ralph-images';
import {
  Grid,
  PosterChunk,
  RalphChunk,
  RiddleContainer,
  RiddleSubtext,
  RiddleText,
} from './styles';

const App: FC = () => {
  const [stepOneCompleted, setStepOneCompleted] = useState(false);
  const [isStageOne, setIsStageOne] = useState(false);

  useEffect(() => {
    setStepOneCompleted(true);
  }, [stepOneCompleted]);

  return (
    <Grid>
      <PartyDetails />
      <Stages isStageOne={isStageOne} setIsStageOne={setIsStageOne} />
      {isStageOne ? (
        partyImages.map((src, index) => {
          const alt = `party-${index + 1}`;
          return <PosterChunk key={alt} src={src} alt={alt} />;
        })
      ) : (
        /* posterImages.map((src, index) => {
          const alt = `nang-poster-${index + 1}`;
          return <PosterChunk key={alt} src={src} alt={alt} />;
        }) */
        <RiddleContainer>
          {ralphImages.map((src, index) => {
            const alt = `ralph-on-the-table-${index + 1}`;
            return <RalphChunk key={alt} src={src} alt={alt} />;
          })}
          <RiddleText>
            What is Ralph's classic last tune to finish the dance off?
          </RiddleText>
          <RiddleSubtext>DM @thatsnang to submit your answer</RiddleSubtext>
        </RiddleContainer>
      )}
    </Grid>
  );
};

export default App;
