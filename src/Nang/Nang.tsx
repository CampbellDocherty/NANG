import { useState } from 'react';
import { PartyDetails } from './PartyDetails';
import { StageOne } from './StageOne';
import { StageTwo } from './StageTwo';
import { Stages } from './Stages';
import { Grid } from './styles';

export const Nang = () => {
  const [isStageOne, setIsStageOne] = useState(true);
  const [stageOneComplete, setStageOneComplete] = useState(false);
  return (
    <Grid>
      <PartyDetails />
      <Stages
        isStageOne={isStageOne}
        setIsStageOne={setIsStageOne}
        stageOneComplete={stageOneComplete}
      />
      {isStageOne ? (
        <StageOne
          stageOneComplete={stageOneComplete}
          setStageOneComplete={setStageOneComplete}
        />
      ) : (
        <StageTwo />
      )}
    </Grid>
  );
};
