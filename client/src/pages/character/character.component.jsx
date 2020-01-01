import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CharacterDetail from '../../components/character-detail/character-detail.container';
import { fetchCharacterDetailStart } from '../../redux/character/character.actions';

const CharacterPage = ({ fetchCharacterDetail, match }) => {
  useEffect(() => {
    fetchCharacterDetail(match.params.characterId);
  }, [fetchCharacterDetail, match.params.characterId]);

  return <CharacterDetail />;
};

const mapDispatchToProps = dispatch => ({
  fetchCharacterDetail: characterId =>
    dispatch(fetchCharacterDetailStart(characterId))
});

export default connect(null, mapDispatchToProps)(CharacterPage);
