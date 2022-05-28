import styled from 'styled-components/macro';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 0.5fr 1fr 1fr 1fr;
  max-width: 600px;
  margin: 0 auto;
  max-height: 100vh;
  grid-gap: 4px;
`;

export const PartyInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px;
  flex-direction: column;
  grid-column: 1/3;

  & > p {
    margin: 0;
  }
`;

export const Filler = styled.div`
  height: 100%;
  width: 100%;
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StageNumber = styled.p<{ readonly selected: boolean }>`
  font-size: 20px;
  font-weight: 800;
  margin: 0;
  cursor: pointer;

  opacity: ${(props) => (props.selected ? 1 : 0.5)};

  &:nth-of-type(1) {
    margin-right: 8px;
  }
  &:nth-of-type(2) {
    margin-left: 8px;
  }
`;

export const PosterChunk = styled.img`
  width: 100%;
  height: 100%;
`;

export const RalphChunk = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  &:hover,
  &:active {
    opacity: 0;
  }

  transition: opacity 0.5s;
`;

export const RiddleText = styled.p`
  font-size: 16px;
  grid-column: 1/4;
  grid-row: 2/3;
  text-align: center;
  position: absolute;
  z-index: 1;
`;

export const RiddleSubtext = styled.p`
  font-size: 12px;
  grid-column: 1/4;
  grid-row: 2/3;
  text-align: center;
  position: absolute;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const RiddleContainer = styled.div`
  width: 100%;
  max-height: 100%;
  grid-column: 1/4;
  grid-row: 3/6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  position: relative;
`;
