import React from 'react';
import { GridContainer } from './grid.styles';
import Cell from '../cell/cell.component';

const Grid = ({ selected }) => {
  return (
    <GridContainer>
      {selected.items.map(item => (
        <Cell key={item.id} item={item} />
      ))}
    </GridContainer>
  );
};

export default Grid;
