import { connect } from 'react-redux';
import Introduction from '../components/Introduction';
import { setInitialImages, changePage } from '../actions/imageCategorizationActionCreators';
import { CATEGORIZATION_PAGE } from '../constants/imageCategorizationConstants';

const actions = { setInitialImages, changePage };

function mergeProps(stateProps, dispatchProps) {
  const beginButtonClickHandler = () => {
    dispatchProps.setInitialImages();
    dispatchProps.changePage(CATEGORIZATION_PAGE);
  }

  return {
    beginButtonClickHandler,
  };
}

export default connect(null, actions, mergeProps)(Introduction);
