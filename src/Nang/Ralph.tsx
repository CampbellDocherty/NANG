import { useState } from 'react';
import { RalphChunk } from './styles';

const Ralph = ({
  alt,
  src,
}: {
  readonly alt: string;
  readonly src: string;
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const onClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <RalphChunk
      onClick={onClick}
      key={alt}
      src={src}
      alt={alt}
      isHidden={isHidden}
    />
  );
};

export default Ralph;
