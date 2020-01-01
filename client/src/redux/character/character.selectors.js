import { createSelector } from 'reselect';

const selectCharacter = state => state.character;

export const selectCharacterDetail = createSelector(
  [selectCharacter],
  character => character.characterDetail
);

export const selectIsCharacterLoaded = createSelector(
  [selectCharacter],
  character => !!character.characterDetail
);
