import React from 'react';
import { GridContainer } from './grid.styles';
import Cell from '../cell/cell.component';

const Grid = ({ selected, type }) => {
  return (
    <GridContainer type={type}>
      {selected.items.map(item => (
        <Cell key={item.id} item={item} />
      ))}
    </GridContainer>
  );
};

export default Grid;
