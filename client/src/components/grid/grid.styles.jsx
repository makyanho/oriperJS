import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  gap: 2.5rem;

  margin: 1.25rem;
`;
