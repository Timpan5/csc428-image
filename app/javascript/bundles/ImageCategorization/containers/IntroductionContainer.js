import { connect } from 'react-redux';
import Introduction from '../components/Introduction';
import { setInitialImages, changePage, beginTime, setConfirmationMessage }
  from '../actions/imageCategorizationActionCreators';
import { CATEGORIZATION_PAGE } from '../constants/imageCategorizationConstants';

const actions = { setInitialImages, changePage, beginTime, setConfirmationMessage };

function mapStateToProps(state) {
  return {
    confirmationMessage: state.get('confirmationMessage'),
  };
}

function mergeProps(stateProps, dispatchProps) {
  const beginButtonClickHandler = () => {
    dispatchProps.setInitialImages();
    dispatchProps.changePage(CATEGORIZATION_PAGE);
    dispatchProps.beginTime(new Date);
  }

  return {
    beginButtonClickHandler,
    confirmationMessage: stateProps.confirmationMessage,
    setConfirmationMessage: dispatchProps.setConfirmationMessage,
  };
}

export default connect(mapStateToProps, actions, mergeProps)(Introduction);
