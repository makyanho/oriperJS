import React from 'react';
import {
  ProjectCellContainer,
  ProjectCellHeader,
  ProjectCellFooter,
  ProjectCellHeaderTitle,
  ProjectCellHeaderDate,
  ProjectCellFooterCell,
  ProjectCellFooterImage,
  ProjectCellFooterCnt
} from './project-cell.styles';

const ProjectCell = ({ item }) => {
  const { imageUrl, title, date, cmt, fav } = item;
  return (
    <ProjectCellContainer imageUrl={imageUrl}>
      <ProjectCellHeader className="header">
        <ProjectCellHeaderTitle>{title}</ProjectCellHeaderTitle>
        <ProjectCellHeaderDate>{date}</ProjectCellHeaderDate>
      </ProjectCellHeader>
      <ProjectCellFooter className="footer">
        <ProjectCellFooterCell>
          <ProjectCellFooterImage src="/images/ico_comment_h13.png" />
          <ProjectCellFooterCnt>{cmt}</ProjectCellFooterCnt>
        </ProjectCellFooterCell>
        <ProjectCellFooterCell>
          <ProjectCellFooterImage src="/images/ico_favourite_h13.png" />
          <ProjectCellFooterCnt>{fav}</ProjectCellFooterCnt>
        </ProjectCellFooterCell>
      </ProjectCellFooter>
    </ProjectCellContainer>
  );
};

export default ProjectCell;
