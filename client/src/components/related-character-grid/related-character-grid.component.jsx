import React from 'react';

import {
  Container,
  Title,
  Cell,
  Grid,
  Overlay,
  Relation,
  CellDesc
} from './related-character-grid.styles';

const RelatedCharacterGrid = ({ title, items }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>
        {items.map(item => (
          <Cell
            key={item.id}
            imageurl={item.imageUrl}
            to={`/character/${item.id}`}
          >
            <Overlay>
              <CellDesc>
                <Relation>{item.relation}</Relation>
              </CellDesc>
            </Overlay>
          </Cell>
        ))}
      </Grid>
    </Container>
  );
};

export default RelatedCharacterGrid;
