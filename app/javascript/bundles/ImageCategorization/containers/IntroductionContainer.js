import { connect } from 'react-redux';
import Introduction from '../components/Introduction';
import { setInitialImages, changePage, beginTime } from '../actions/imageCategorizationActionCreators';
import { CATEGORIZATION_PAGE } from '../constants/imageCategorizationConstants';

const actions = { setInitialImages, changePage, beginTime };

function mergeProps(stateProps, dispatchProps) {
  const beginButtonClickHandler = () => {
    dispatchProps.setInitialImages();
    dispatchProps.changePage(CATEGORIZATION_PAGE);
    dispatchProps.beginTime(new Date);
  }

  return {
    beginButtonClickHandler,
  };
}

export default connect(null, actions, mergeProps)(Introduction);
