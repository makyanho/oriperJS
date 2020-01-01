import { combineReducers } from 'redux';
import homeReducer from './home/home.reducer';
import characterReducer from './character/character.reducer';

const rootReducer = combineReducers({
  home: homeReducer,
  character: characterReducer
});

export default rootReducer;
