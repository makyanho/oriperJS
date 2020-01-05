import React from 'react';
import Cell from '../cell/cell.component';
import { Container, Title, Grid } from './related-grid.styles';

const RelatedGrid = ({ title, items }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>
        {items.map(item => (
          <Cell key={item.id} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default RelatedGrid;
