import { connect } from 'react-redux';
import ConfirmationModal from '../components/ConfirmationModal';
import { deleteCategorySelected, keyPressConfirm } from '../actions/imageCategorizationActionCreators';

const KEY_TO_CATEGORY_NAME = {
  a: 'Trees',
  s: 'People',
  d: 'Other',
};

const actions = { deleteCategorySelected, keyPressConfirm };

function mapStateToProps(state) {
  return {
    selectedCategory: state.get('categorySelection', ''),
  }
}

function mergeProps(stateProps, dispatchProps) {
  const showModal = !!stateProps.selectedCategory;
  const categoryString = KEY_TO_CATEGORY_NAME[stateProps.selectedCategory];

  return {
    showModal,
    categoryString,
    noButtonHandler: dispatchProps.deleteCategorySelected,
    yesButtonHandler: dispatchProps.keyPressConfirm,
  }
}

export default connect(mapStateToProps, actions, mergeProps)(ConfirmationModal);
