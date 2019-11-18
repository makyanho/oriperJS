import styled, { css } from 'styled-components';

export const ContainerMargin = css`
  margin: 0 1.875rem;
  max-width: 60.625rem;
  margin: auto;
`;

export const Container = styled.div`
  ${ContainerMargin}
`;

export const SectionHolder = styled.section`
  background-color: white;
  border-radius: 5px;
  /* box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25); */
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
`;
