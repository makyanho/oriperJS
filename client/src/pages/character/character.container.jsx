import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCharacterLoaded } from '../../redux/character/character.selectors';
import { fetchCharacterDetailStart } from '../../redux/character/character.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CharacterPage from './character.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCharacterLoaded(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacterDetail: characterId =>
    dispatch(fetchCharacterDetailStart(characterId))
});

const CharacterPageContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSpinner
)(CharacterPage);

export default CharacterPageContainer;
