import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCharacterDetail } from '../../redux/character/character.selectors';

import { Container } from './character-recommend';
import RelatedCharacterGrid from '../related-character-grid/related-character-grid.component';

const CharacterRecommend = ({ character }) => {
  const { recommend } = character;
  return (
    <Container>
      <RelatedCharacterGrid title="推薦角色" items={recommend} />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  character: state => selectCharacterDetail(state)
});

export default connect(mapStateToProps)(CharacterRecommend);
