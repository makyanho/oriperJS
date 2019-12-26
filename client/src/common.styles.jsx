import styled, { css } from 'styled-components';

export const GreyBackground = styled.div`
  background-color: var(--color-grey-dark-1);
`;

export const ContainerMargin = css`
  margin: 0 1.875rem;
  max-width: 60.625rem;
  margin: auto;
`;

export const Container = styled.main`
  ${ContainerMargin}
`;

export const SectionHolder = styled.section`
  background-color: white;
  border-radius: 5px;
  /* box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25); */
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;

  &:first-child {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const getButtonSize = props => {
  switch (props.size) {
    case 'small':
      return css`
        padding: 2px 1.25rem;
      `;
    default:
      return css`
        padding: 0.5rem 2rem;
        font-size: 1rem;
      `;
  }
};

export const Button = styled.button`
  background: var(--color-red-1);
  border-radius: 5px;
  color: white;
  font-family: inherit;
  border: none;
  transition: all 0.2s;
  cursor: pointer;

  ${getButtonSize}

  &:hover {
    background: var(--color-red-2);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;
