import styled, { css } from 'styled-components';

const transition = css`
  transition: all 0.5s;
`;

const noWrapText = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const getSize = props => {
  switch (props.size) {
    case 'big':
      return css`
        height: 12.5rem;
        width: 12.5rem;
      `;
    default:
      return css`
        width: 10.25rem;
        height: 9.625rem;
      `;
  }
};

export const CellContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) =>
    imageUrl === undefined ? 'none' : `url(${imageUrl})`};
  background-color: var(--color-grey-light-3);
  position: relative;
  border: 1px solid var(--color-grey-light-2);
  overflow: hidden;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${getSize}

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

export const CellSummary = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  font: 0.75rem;
  padding: 0.75rem;
`;

export const CellHeader = styled.div`
  width: 100%;
  background-color: var(--color-overlay-white);
  padding-left: 0.75rem;
  transform: translateY(-100%);
  height: ${({ size }) => (size === 'big' ? '2.5rem' : '2.25rem')};
  ${transition}
`;

export const ProjectCellHeader = styled(CellHeader)`
  display: flex;
  justify-content: space-between;
  transform: ${({ size }) =>
    size === 'big' ? 'translateY(-0.625rem)' : 'translateY(-100%)'};
`;

const CellHeaderTitle = css`
  font-size: 0.75rem;
  font-weight: 700;
  ${noWrapText}
`;

export const WorkCellHeaderTitle = styled.div`
  ${CellHeaderTitle}
`;

export const ProjectCellHeaderTitle = styled.span`
  ${CellHeaderTitle}
  align-self: center;
  transform: translateY(-100%);
  font-size: 1.25rem;
  ${transition}
`;

const CellHeaderTitle2 = css`
  font-size: 0.75rem;
`;

export const WorkCellHeaderAuthor = styled.div`
  ${CellHeaderTitle2}
`;

export const ProjectCellHeaderDate = styled.span`
  ${CellHeaderTitle2}
  align-self: flex-end;
  margin: 3px;
`;

export const CellFooter = styled.div`
  width: 100%;
  background-color: var(--color-overlay-white);
  transform: translateY(100%);
  height: ${({ size }) => (size === 'big' ? '1.5625rem' : '1.5rem')};
  ${transition}

  display: flex;
  justify-content: space-between;
`;

export const CellFooterCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CellFooterImage = styled.img``;

export const CellFooterCnt = styled.span`
  margin-left: 5px;
  font-size: 0.75px;
`;
