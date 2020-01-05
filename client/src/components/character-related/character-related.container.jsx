import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCharacterLoaded } from '../../redux/character/character.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import ChracterRelated from './character-related.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCharacterLoaded(state)
});

const CharacterDetailContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ChracterRelated);

export default CharacterDetailContainer;
