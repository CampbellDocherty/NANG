import { FC, useEffect, useState } from 'react';
import { PartyDetails } from './PartyDetails';
import { StageOne } from './StageOne';
import { StageTwo } from './StageTwo';
import { Stages } from './Stages';
import { Grid } from './styles';

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
      {isStageOne ? <StageOne /> : <StageTwo />}
    </Grid>
  );
};

export default App;
