import React from 'react';
import {
  WorkCellContainer,
  WorkCellHeader,
  WorkCellHeaderTitle,
  WorkCellHeaderAuthor,
  WorkCellFooter,
  WorkCellFooterCell,
  WorkCellFooterImage,
  WorkCellFooterCnt,
  WorkCellSummary
} from './work-cell.styles';

const WorkCell = ({ item }) => {
  const { imageUrl, summary, title, author, cmt, fav } = item;
  return (
    <WorkCellContainer imageUrl={imageUrl}>
      <WorkCellSummary>{summary}</WorkCellSummary>
      <WorkCellHeader className="header">
        <WorkCellHeaderTitle>{title}</WorkCellHeaderTitle>
        <WorkCellHeaderAuthor>{author}</WorkCellHeaderAuthor>
      </WorkCellHeader>
      <WorkCellFooter className="footer">
        <WorkCellFooterCell>
          <WorkCellFooterImage src="/images/ico_comment_h13.png" />
          <WorkCellFooterCnt>{cmt}</WorkCellFooterCnt>
        </WorkCellFooterCell>
        <WorkCellFooterCell>
          <WorkCellFooterImage src="/images/ico_favourite_h13.png" />
          <WorkCellFooterCnt>{fav}</WorkCellFooterCnt>
        </WorkCellFooterCell>
      </WorkCellFooter>
    </WorkCellContainer>
  );
};

export default WorkCell;
