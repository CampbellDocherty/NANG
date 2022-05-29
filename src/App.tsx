import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Nang } from './Nang/Nang';

const App: FC = () => {
  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <Nang />
    </DndProvider>
  );
};

export default App;
