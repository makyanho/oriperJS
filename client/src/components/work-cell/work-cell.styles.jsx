import styled, { css } from 'styled-components';

const transition = css`
  transition: all 0.5s;
`;

export const WorkCellContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-color: var(--color-grey-light-3);
  width: 10.25rem;
  height: 9.625rem;
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

export const WorkCellSummary = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font: 0.75rem;
  padding: 0.75rem;
`;

export const WorkCellHeader = styled.div`
  width: 100%;
  height: 2.25rem;
  background-color: var(--color-overlay-white);
  padding-left: 0.75rem;
  transform: translateY(-100%);
  ${transition}
`;

export const WorkCellHeaderTitle = styled.div`
  font-size: 0.5rem;
  font-weight: 700;
`;

export const WorkCellHeaderAuthor = styled.div`
  font-size: 0.75rem;
`;

export const WorkCellFooter = styled.div`
  width: 100%;
  height: 1.5rem;
  background-color: var(--color-overlay-white);
  transform: translateY(100%);
  ${transition}

  display: flex;
  justify-content: space-between;
`;

export const WorkCellFooterCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const WorkCellFooterImage = styled.img``;

export const WorkCellFooterCnt = styled.span`
  margin-left: 5px;
  font-size: 0.75px;
`;
