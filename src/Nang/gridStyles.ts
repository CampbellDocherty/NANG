import styled from 'styled-components/macro';

export const Grid = styled.div`
  grid-column: 1/4;
  grid-row: 3/6;
  width: 600px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  position: relative;
`;

export const GridImage = styled.div<{ readonly src: string }>`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
`;

export const GridItemWrapper = styled.div<{ readonly isHidden: boolean }>`
  flex: 0 0 33.3%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  box-sizing: border-box;
  :before {
    content: '';
    display: table;
    padding-top: 100%;
  }
  cursor: pointer;
  z-index: 2;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};

  transition: opacity 0.5s;
`;
