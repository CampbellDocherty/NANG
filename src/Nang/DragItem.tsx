import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { PosterChunk } from './styles';

interface DraggableItem {
  readonly id: number;
  readonly onMoveItem: any;
  readonly alt: string;
  readonly src: string;
}

const DragItem = ({ id, onMoveItem, src, alt }: DraggableItem) => {
  const ref = useRef(null);

  const [{ isDragging }, connectDrag] = useDrag({
    item: { id },
    type: 'IMG',
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  const [, connectDrop] = useDrop({
    accept: 'IMG',
    hover(hoveredOverItem: DraggableItem) {
      if (hoveredOverItem.id !== id) {
        onMoveItem(hoveredOverItem.id, id);
      }
    },
  });

  connectDrag(ref);
  connectDrop(ref);

  const opacity = isDragging ? 0.5 : 1;
  const containerStyle = { opacity };

  return <PosterChunk ref={ref} src={src} alt={alt} style={containerStyle} />;
};

export default DragItem;
