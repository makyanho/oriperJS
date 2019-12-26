import styled from 'styled-components';
import { Button } from '../../common.styles';

export const DropdownContainer = styled.div`
  position: relative;

  &:hover {
    .tooltip {
      visibility: visible;
    }
  }
`;

export const DropDownButton = styled(Button)`
  visibility: hidden;
  position: absolute;
  bottom: 2rem;
  right: -50%;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-red-1) transparent transparent transparent;
  }
`;
