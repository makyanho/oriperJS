import React from 'react';

import CharacterDetail from '../../components/character-detail/character-detail.component';
import CharacterRelated from '../../components/character-related/character-related.component';
import { Container } from './character.styles';

const CharacterPage = () => {
  return (
    <Container>
      <CharacterDetail />
      <CharacterRelated />
    </Container>
  );
};

export default CharacterPage;
