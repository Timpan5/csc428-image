import { connect } from 'react-redux';
import ImageCategory from '../components/ImageCategory';
import { keyPressCategorize } from '../actions/imageCategorizationActionCreators';

const CATEGORY_TREE = 'category_tree';
const CATEGORY_PEOPLE = 'category_people';
const CATEGORY_OTHER = 'category_other';

const actions = {
  keyPressCategorize,
};

function mergeProps(stateProps, dispatchProps) {
  return {
    categoryTopName: CATEGORY_TREE,
    categoryMiddleName: CATEGORY_PEOPLE,
    categoryBottomName: CATEGORY_OTHER,
    keyPressCategorize: dispatchProps.keyPressCategorize,
  };
}

export default connect(null, actions, mergeProps)(ImageCategory);
