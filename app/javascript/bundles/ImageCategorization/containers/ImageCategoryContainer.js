import { connect } from 'react-redux';
import ImageCategory from '../components/ImageCategory';
import { keyPressCategorize, keyPressConfirm } from '../actions/imageCategorizationActionCreators';

const CATEGORY_TREE = 'category_tree';
const CATEGORY_PEOPLE = 'category_people';
const CATEGORY_OTHER = 'category_other';

const actions = {
  keyPressCategorize,
  keyPressConfirm,
};

function mapStateToProps(state) {
  return {
    confirmationMessage: state.get('confirmationMessage'),
  };
}

function mergeProps(stateProps, dispatchProps) {
  return {
    categoryTopName: CATEGORY_TREE,
    categoryMiddleName: CATEGORY_PEOPLE,
    categoryBottomName: CATEGORY_OTHER,
    keyPressCategorize: dispatchProps.keyPressCategorize,
    keyPressConfirm: dispatchProps.keyPressConfirm,
    confirmationMessage: stateProps.confirmationMessage,
  };
}

export default connect(mapStateToProps, actions, mergeProps)(ImageCategory);
