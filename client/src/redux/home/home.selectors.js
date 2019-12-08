import { createSelector } from 'reselect';

const selectHome = state => state.home;

export const selectHomeData = createSelector(
  [selectHome],
  home => home.homeData
);

export const selectIsHomeLoaded = createSelector(
  [selectHome],
  home => !!home.homeData
);
