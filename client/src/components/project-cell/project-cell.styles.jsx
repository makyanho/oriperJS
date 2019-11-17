import styled, { css } from 'styled-components';

const transition = css`
  transition: all 0.5s;
`;

export const ProjectCellContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 12.5rem;
  height: 12.5rem;
  position: relative;
  border: 1px solid var(--color-grey-light-2);
  overflow: hidden;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    .footer {
      transform: translateY(0);
    }

    .header {
      transform: translateY(0);

      span {
        transform: translateY(0);
      }
    }
  }
`;

export const ProjectCellHeader = styled.div`
  width: 100%;
  height: 2.5rem;
  background-color: var(--color-overlay-white);
  display: flex;
  justify-content: space-between;
  transform: translateY(-0.625rem);
  ${transition}
`;

export const ProjectCellHeaderTitle = styled.span`
  align-self: center;
  margin-left: 0.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  transform: translateY(-100%);
  ${transition}
`;

export const ProjectCellHeaderDate = styled.span`
  font-size: 0.75px;
  align-self: flex-end;
  margin: 3px;
`;

export const ProjectCellFooter = styled.div`
  width: 100%;
  height: 1.5625rem;
  background-color: var(--color-overlay-white);
  transform: translateY(100%);
  ${transition}

  display: flex;
  justify-content: space-between;
`;

export const ProjectCellFooterCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ProjectCellFooterImage = styled.img``;

export const ProjectCellFooterCnt = styled.span`
  margin-left: 5px;
  font-size: 0.75px;
`;
