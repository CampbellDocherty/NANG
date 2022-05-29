import { useState } from 'react';
import { PartyDetails } from './PartyDetails';
import { StageOne } from './StageOne';
import { StageTwo } from './StageTwo';
import { Stages } from './Stages';
import { Grid } from './styles';

export const Nang = () => {
  const stageOnePreviosulyCompleted =
    localStorage.getItem('stageOneComplete') === 'true';

  const [isStageOne, setIsStageOne] = useState(true);

  const [stageOneComplete, setStageOneComplete] = useState(false);

  return (
    <Grid>
      <PartyDetails />
      <Stages
        stageOnePreviouslyCompleted={stageOnePreviosulyCompleted}
        isStageOne={isStageOne}
        setIsStageOne={setIsStageOne}
        stageOneComplete={stageOneComplete}
      />
      {isStageOne ? (
        <StageOne
          stageOnePreviouslyCompleted={stageOnePreviosulyCompleted}
          stageOneComplete={stageOneComplete}
          setStageOneComplete={setStageOneComplete}
        />
      ) : (
        <StageTwo />
      )}
    </Grid>
  );
};
