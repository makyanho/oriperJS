import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const getSize = props => {
  switch (props.size) {
    case 'big':
      return css`
        font-size: 1.5rem;
        padding: 0.375rem 1.5rem;
        border-radius: 1.5rem;
      `;
    case 'small':
      return css`
        font-size: 0.75rem;
        padding: 0.3125rem 1rem;
        border-radius: 0.75rem;
      `;
    default:
      return css`
        padding: 0.365rem 1rem;
        border-radius: 1rem;
      `;
  }
};

const getColor = props => {
  switch (props.color) {
    default:
    case 'red':
      return css`
        background-color: #fbf0f3;
      `;
    case 'blue':
      return css`
        background-color: #eef3f6;
      `;
    case 'green':
      return css`
        background-color: #efffed;
      `;
  }
};

export const Container = styled(Link)`
  border: none;
  color: var(--color-grey-dark-2);
  text-decoration: none;

  &:hover {
    color: var(--color-grey-dark-1);
  }

  ${getSize}
  ${getColor}

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
