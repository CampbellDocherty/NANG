import styled from 'styled-components/macro';

export const FlipCardInner = styled.div`
  position: relative;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FlipCard = styled.div`
  background-color: transparent;
  width: 100%;
  grid-column: 1/4;
  grid-row: 3/6;
  perspective: 1000px;

  &:focus ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

export const FlipCardContent = styled.div<{ readonly isBack?: boolean }>`
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: ${(props) => (props.isBack ? 'rotateY(180deg)' : 'none')};
`;
