import styled from 'styled-components/macro';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr 1fr;
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

export const PosterImagesList = styled.ul<{
  readonly stageOneComplete: boolean;
}>`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: ${(props) => (props.stageOneComplete ? '0px' : '2px')};
  grid-column: 1/4;
  grid-row: 3/6;

  transition: grid-gap 1s;
`;

export const PartyImage = styled.img`
  width: 100%;
`;

export const PosterImage = styled.img`
  width: 100%;
  opacity: 0;
`;

export const ImageContainers = styled.div`
  grid-column: 1/4;
  grid-row: 3/6;
  display: flex;
  width: 100%;

  &:hover {
    transform: translateX(-100%);
  }

  &:hover ${PartyImage} {
    opacity: 0;
    transition: opacity 1s;
  }

  &:hover ${PosterImage} {
    opacity: 1;
    transition: opacity 1s ease-out;
  }

  transition: transform 1s;
`;

export const StageContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StageNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HintText = styled.p`
  font-size: 12px;
  text-align: center;
  align-self: center;
  padding-left: 20px;
  padding-right: 20px;
  opacity: 0.9;
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

export const RalphChunk = styled.img<{ readonly isHidden: boolean }>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};

  transition: opacity 0.5s;
`;

export const RiddleText = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const RiddleSubtext = styled.p`
  font-size: 12px;
  text-align: center;

  &:nth-of-type(3) {
    margin: 0;
  }
`;

export const RalphContainer = styled.div`
  width: 100%;
  max-height: 100%;
  grid-column: 1/4;
  grid-row: 3/6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  position: relative;
`;

export const RiddleContainer = styled.div`
  grid-column: 1/4;
  grid-row: 2/3;
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  flex-direction: column;
  padding: 24px;
`;
