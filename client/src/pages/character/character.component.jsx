import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCharacterDetail } from '../../redux/character/character.selectors';

import CharacterDetail from '../../components/character-detail/character-detail.component';
import CharacterRelated from '../../components/character-related/character-related.component';
import CharacterRecommend from '../../components/character-recommend/character-recommend.component';
import AllComments from '../../components/all-comments/all-comments.component';
import { Container } from './character.styles';

const CharacterPage = ({ character }) => {
  const { comments } = character;
  return (
    <Container>
      <CharacterDetail />
      <CharacterRelated />
      <AllComments comments={comments} />
      <CharacterRecommend />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  character: state => selectCharacterDetail(state)
});

export default connect(mapStateToProps)(CharacterPage);
