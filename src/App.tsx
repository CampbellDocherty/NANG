import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Nang } from './Nang/Nang';

const App: FC = () => {
  return (
    <DndProvider backend={TouchBackend}>
      <Nang />
    </DndProvider>
  );
};

export default App;
