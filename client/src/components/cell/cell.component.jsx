import React from 'react';
import CharacterCell from '../character-cell/character-cell.component';
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

class Cell extends React.Component {
  renderSwitch({ type, title, author, date }) {
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

  render() {
    const { item, size } = this.props;
    const { type, imageUrl, summary, cmt, fav } = item;
    switch (type) {
      case 'character':
        return <CharacterCell {...this.props} />;
      default:
        return (
          <CellContainer imageUrl={imageUrl} size={size}>
            <CellSummary>{summary}</CellSummary>
            {this.renderSwitch(item)}
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
          </CellContainer>
        );
    }
  }
}

export default Cell;
