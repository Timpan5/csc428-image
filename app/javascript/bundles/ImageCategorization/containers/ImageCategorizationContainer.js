import { connect } from 'react-redux';
import ImageCategorization from '../components/ImageCategorization';
import { keyPressCategorize, keyPressConfirm }
  from '../actions/imageCategorizationActionCreators';
import { INTRODUCTION_PAGE, CATEGORIZATION_PAGE, RESULT_PAGE } from '../constants/imageCategorizationConstants';

const actions = { keyPressCategorize, keyPressConfirm };

function mapStateToProps(state) {
  const page = state.get('page');

  return {
    showIntroduction: page === INTRODUCTION_PAGE,
    showCategorization: page === CATEGORIZATION_PAGE,
    showResults: page === RESULT_PAGE,
  };
}

function mergeProps(stateProps, dispatchProps) {
  function keydownHandler(e) {
    switch(e.key) {
      case 'a':
        dispatchProps.keyPressCategorize('a');
        break;
      case 's':
        dispatchProps.keyPressCategorize('s');
        break;
      case 'd':
        dispatchProps.keyPressCategorize('d');
        break;
      case ' ':
        dispatchProps.keyPressConfirm();
        break;
    }
  }

  const addKeyListener = () => window.addEventListener('keydown', keydownHandler);
  const removeKeyListener = () => window.removeEventListener('keydown', keydownHandler);

  return {
    showIntroduction: stateProps.showIntroduction,
    showCategorization: stateProps.showCategorization,
    showResults: stateProps.showResults,
    addKeyListener,
    removeKeyListener,
  };
}

export default connect(mapStateToProps, actions, mergeProps)(ImageCategorization);
