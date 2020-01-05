import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCharacterDetail } from '../../redux/character/character.selectors';

import { Container } from './character-related.styles';
import RelatedGrid from '../related-grid/related-grid.component';

const CharacterRelated = ({ character }) => {
  const { projects, works } = character;
  return (
    <Container>
      <RelatedGrid title="關聯作品" items={works} />
      <RelatedGrid title="關聯企劃" items={projects} />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  character: state => selectCharacterDetail(state)
});

export default connect(mapStateToProps)(CharacterRelated);
