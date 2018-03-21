import { connect } from 'react-redux';
import ImageCategory from '../components/ImageCategory';

const CATEGORY_TREE = 'category_tree';
const CATEGORY_PEOPLE = 'category_people';
const CATEGORY_OTHER = 'category_other';

function mergeProps() {
  return {
    categoryTopName: CATEGORY_TREE,
    categoryMiddleName: CATEGORY_PEOPLE,
    categoryBottomName: CATEGORY_OTHER,
  };
}

export default connect(null, null, mergeProps)(ImageCategory);
