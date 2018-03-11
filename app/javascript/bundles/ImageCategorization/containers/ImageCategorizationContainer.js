import { connect } from 'react-redux';
import ImageCategorization from '../components/ImageCategorization';
import { setInitialImages, keyPressCategorize, keyPressConfirm }
  from '../actions/imageCategorizationActionCreators';

const actions = { setInitialImages, keyPressCategorize, keyPressConfirm };

function mergeProps(stateProps, dispatchProps) {
  return {
    setInitialImages: dispatchProps.setInitialImages,
    handleCategoryA: () => dispatchProps.keyPressCategorize('a'),
    handleCategoryS: () => dispatchProps.keyPressCategorize('s'),
    handleCategoryD: () => dispatchProps.keyPressCategorize('d'),
    handleSpace: dispatchProps.keyPressConfirm,
  };
}

export default connect(null, actions, mergeProps)(ImageCategorization);
