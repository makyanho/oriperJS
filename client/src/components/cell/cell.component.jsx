import React from 'react';
import CharacterCell from '../character-cell/character-cell.component';
import NoticeCell from '../notice-cell/notice-cell.component';
import {
  CellContainer,
  CellFooter,
  CellFooterCell,
  CellFooterImage,
  CellFooterCnt,
  CellSummary,
  CellHeader,
  WorkCellHeaderTitle,
  WorkCellHeaderAuthor,
  ProjectCellHeader,
  ProjectCellHeaderTitle,
  ProjectCellHeaderDate
} from './cell.styles';

function Cell(props) {
  const {item, size} = props;
  const {type, id, imageUrl, summary, cmt, fav, title, date, author} = item;

  const getCellHeader = () => {
    switch (type) {
      case 'project':
        return (
          <ProjectCellHeader className="header">
            <ProjectCellHeaderTitle>{title}</ProjectCellHeaderTitle>
            <ProjectCellHeaderDate>{date}</ProjectCellHeaderDate>
          </ProjectCellHeader>
        );
      default:
        return (
          <CellHeader className="header">
            <WorkCellHeaderTitle>{title}</WorkCellHeaderTitle>
            <WorkCellHeaderAuthor>{author}</WorkCellHeaderAuthor>
          </CellHeader>
        );
    }
  }

  const getCellFooter = () => {
    return (
      <CellFooter size={size} className="footer">
              <CellFooterCell>
                <CellFooterImage src="/images/ico_comment_h13.png" />
                <CellFooterCnt>{cmt}</CellFooterCnt>
              </CellFooterCell>
              <CellFooterCell>
                <CellFooterImage src="/images/ico_favourite_h13.png" />
                <CellFooterCnt>{fav}</CellFooterCnt>
              </CellFooterCell>
            </CellFooter>
    );
  }

  const compileCell = () => {
    switch (type) {
      case 'character':
        return <CharacterCell {...props} />;
      case 'notice':
        return <NoticeCell {...props} />;
      default:
        return (
          <CellContainer to={type + '/' + id} imageurl={imageUrl} size={size}>
            <CellSummary>{summary}</CellSummary>
            {getCellHeader()}
            {getCellFooter()}
          </CellContainer>
        );
    }
  }
  return compileCell();
}

export default Cell;
