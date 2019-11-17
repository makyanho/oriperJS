import React from 'react';
import { GridContainer } from './grid.styles';
import ProjectCell from '../project-cell/project-cell.component';

const Grid = () => {
  const item = {
    imageUrl: '/images/dummy/project_thumb.jpg',
    title: '企劃名稱',
    date: '01/01/2020',
    cmt: 99,
    fav: 99
  };
  return (
    <GridContainer>
      <ProjectCell key={1} item={item} />
      <ProjectCell key={2} item={item} />
      <ProjectCell key={3} item={item} />
      <ProjectCell key={4} item={item} />
    </GridContainer>
  );
};

export default Grid;
