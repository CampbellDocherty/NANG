import { FC, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PartyDetails } from './PartyDetails';
import { StageOne } from './StageOne';
import { StageTwo } from './StageTwo';
import { Stages } from './Stages';
import { Grid } from './styles';

const App: FC = () => {
  const [isStageOne, setIsStageOne] = useState(true);

  return (
    <DndProvider backend={HTML5Backend}>
      <Grid>
        <PartyDetails />
        <Stages isStageOne={isStageOne} setIsStageOne={setIsStageOne} />
        {isStageOne ? <StageOne /> : <StageTwo />}
      </Grid>
    </DndProvider>
  );
};

export default App;
