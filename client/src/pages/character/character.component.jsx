import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CharacterDetail from '../../components/character-detail/character-detail.container';
import CharacterRelated from '../../components/character-related/character-related.container';
import { fetchCharacterDetailStart } from '../../redux/character/character.actions';
import { Container } from './character.styles';

const CharacterPage = ({ fetchCharacterDetail, match }) => {
  useEffect(() => {
    fetchCharacterDetail(match.params.characterId);
  }, [fetchCharacterDetail, match.params.characterId]);

  return (
    <Container>
      <CharacterDetail />
      <CharacterRelated />
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCharacterDetail: characterId =>
    dispatch(fetchCharacterDetailStart(characterId))
});

export default connect(null, mapDispatchToProps)(CharacterPage);
