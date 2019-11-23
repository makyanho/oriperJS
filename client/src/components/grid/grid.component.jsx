import React from 'react';
import { GridContainer } from './grid.styles';
import Cell from '../cell/cell.component';

const Grid = ({ selected, type, size }) => {
  return (
    <GridContainer type={type}>
      {selected.items.map(item => (
        <Cell key={item.id} item={item} size={size} />
      ))}
    </GridContainer>
  );
};

export default Grid;
