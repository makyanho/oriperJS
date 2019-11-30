import styled, { css } from 'styled-components';

const WorksGrid = css`
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 2.5rem;
`;

export const NoticeGrid = css`
  grid-auto-flow: row;
`;

const getGridStyle = props => {
  switch (props.type) {
    case 'works':
      return WorksGrid;
    case 'notices':
      return NoticeGrid;
    default:
      return css``;
  }
};

export const GridContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;

  margin: 1.25rem;

  ${getGridStyle}
`;
