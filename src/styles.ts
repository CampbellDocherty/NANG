import styled from 'styled-components/macro';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;
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

export const Title = styled.p``;

export const CircleArrow = styled.img`
  width: 30px;
  height: 30px;
  margin: 16px;
  grid-column: 3/4;
  cursor: pointer;
  justify-self: flex-end;
  align-self: center;
`;

export const Filler = styled.div`
  height: 100%;
  width: 100%;
  grid-column: 1/-1;
`;

export const PosterChunk = styled.img`
  width: 100%;
  height: 100%;
  /* padding: 4px; */
`;
