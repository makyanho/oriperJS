import React from 'react';
import { GridContainer } from './grid.styles';
import ProjectCell from '../project-cell/project-cell.component';

const Grid = () => (
  <GridContainer>
    <ProjectCell />
    <ProjectCell />
    <ProjectCell />
    <ProjectCell />
  </GridContainer>
);

export default Grid;
