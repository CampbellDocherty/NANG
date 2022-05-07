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
  padding: 16px;
  flex-direction: column;
  grid-column: 1/3;

  & > p {
    margin: 0;
  }
`;

export const PosterChunk = styled.img`
  width: 100%;
  height: 100%;
  padding: 5px;
`;
