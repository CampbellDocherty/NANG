import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Nang } from './Nang/Nang';

const App: FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Nang />
    </DndProvider>
  );
};

export default App;
