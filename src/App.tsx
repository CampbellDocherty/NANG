import { FC, useEffect, useState } from 'react';
import { posterImages } from './assets/poster-images';
import { ralphImages } from './assets/ralph-images';
import {
  Filler,
  Grid,
  PartyInfo,
  PosterChunk,
  RalphChunk,
  RiddleContainer,
  RiddleSubtext,
  RiddleText,
  StageNumber,
} from './styles';

const App: FC = () => {
  const [stepOneCompleted, setStepOneCompleted] = useState(false);
  const [isStageOne, setIsStageOne] = useState(false);

  useEffect(() => {
    setStepOneCompleted(true);
  }, [stepOneCompleted]);

  const onStageOneClick = () => {
    setIsStageOne(true);
  };

  const onStageTwoClick = () => {
    setIsStageOne(false);
  };

  return (
    <Grid>
      <PartyInfo>
        <p>NANG</p>
        <p>June 1st 2022</p>
        <p>Boxpark Shoreditch</p>
        <p>E1 6GY</p>
      </PartyInfo>
      <Filler>
        <StageNumber onClick={onStageOneClick} selected={isStageOne}>
          1
        </StageNumber>
        <StageNumber onClick={onStageTwoClick} selected={!isStageOne}>
          2
        </StageNumber>
      </Filler>
      {isStageOne ? (
        posterImages.map((src, index) => {
          const alt = `nang-poster-${index + 1}`;
          return <PosterChunk key={alt} src={src} alt={alt} />;
        })
      ) : (
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
