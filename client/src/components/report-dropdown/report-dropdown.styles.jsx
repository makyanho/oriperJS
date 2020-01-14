import styled, { css } from 'styled-components';
import { Button } from '../../common.styles';

export const DropdownContainer = styled.div`
  position: relative;

  &:hover {
    .tooltip {
      visibility: visible;
    }
  }
`;

const getArrowPos = props => {
  if (props.pos === 'right')
    return css`
      right: 0;
    `;
};

const getArrowPosAfter = props => {
  switch (props.pos) {
    case 'right':
      return css`
        right: 1rem;
        margin-right: -5px;
      `;
    default:
      return css`
        left: 1rem;
        margin-left: -5px;
      `;
  }
};

export const DropDownButton = styled(Button)`
  visibility: hidden;
  position: absolute;
  bottom: 2rem;
  white-space: nowrap;

  ${getArrowPos}

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-red-1) transparent transparent transparent;

    ${getArrowPosAfter}
  }
`;
