import React from 'react';
import { GridContainer } from './grid.styles';
import Cell from '../cell/cell.component';

const Grid = ({ items, type, size }) => {
  return (
    <GridContainer type={type}>
      {items.map(item => (
        <Cell key={item.id} item={item} size={size} />
      ))}
    </GridContainer>
  );
};

export default Grid;
