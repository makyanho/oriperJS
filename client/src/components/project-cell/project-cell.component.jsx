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

const ProjectCell = () => (
  <ProjectCellContainer imageUrl="'/images/dummy/project_thumb.jpg'">
    <ProjectCellHeader className="header">
      <ProjectCellHeaderTitle>企劃名稱</ProjectCellHeaderTitle>
      <ProjectCellHeaderDate>01/01/2020</ProjectCellHeaderDate>
    </ProjectCellHeader>
    <ProjectCellFooter className="footer">
      <ProjectCellFooterCell>
        <ProjectCellFooterImage src="/images/ico_comment_h13.png" />
        <ProjectCellFooterCnt>99</ProjectCellFooterCnt>
      </ProjectCellFooterCell>
      <ProjectCellFooterCell>
        <ProjectCellFooterImage src="/images/ico_favourite_h13.png" />
        <ProjectCellFooterCnt>99</ProjectCellFooterCnt>
      </ProjectCellFooterCell>
    </ProjectCellFooter>
  </ProjectCellContainer>
);

export default ProjectCell;
