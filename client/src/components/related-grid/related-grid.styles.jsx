import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, 10.25rem);
  grid-template-columns: repeat(auto-fit, 9.625rem);
  grid-auto-flow: row;
  gap: 2rem;
`;
