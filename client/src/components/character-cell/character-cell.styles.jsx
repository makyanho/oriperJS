import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const transition = css`
  transition: all 0.5s;
`;

export const CharacterCellContainer = styled(Link)`
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 9rem;
  height: 9rem;
  position: relative;
  border: 1px solid var(--color-red-1);
  overflow: hidden;
  cursor: pointer;
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

export const CharacterCellOverlay = styled.div`
  background-color: var(--color-overlay-white);
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;

  ${transition}
`;

export const CharacterCellDesc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const CharacterCellTitle = styled.div`
  text-align: center;
`;

export const CharacterCellAuthor = styled.div`
  font-size: 0.75rem;
  text-align: center;
`;

export const CharacterCellFooter = styled.div`
  align-self: center;
  display: flex;
`;

export const CharacterCellFooterCell = styled.div`
  margin-top: 25%;

  &:last-child {
    margin-left: 0.5rem;
  }
`;

export const CharacterCellFooterImage = styled.img``;

export const CharacterCellFooterCnt = styled.span`
  margin-left: 5px;
  font-size: 0.75px;
`;
