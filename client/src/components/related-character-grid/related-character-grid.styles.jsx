import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Title = styled.h1``;

export const Cell = styled(Link)`
  background-size: cover;
  background-position: center;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  border: 1px solid var(--color-red-1);
  overflow: hidden;
  border-radius: 50%;

  &:link,
  &:visited {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:active {
    div {
      opacity: 100%;
    }
  }
`;

export const Overlay = styled.div`
  background-color: var(--color-overlay-white);
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  transition: all 0.5s;
`;

export const CellDesc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Relation = styled.span`
  text-align: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, 4.5rem);
  grid-template-columns: repeat(auto-fit, 4.5rem);
  grid-auto-flow: row;
  gap: 0.25rem;
`;
