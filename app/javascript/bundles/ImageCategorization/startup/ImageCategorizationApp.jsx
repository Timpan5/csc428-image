import React from 'react';
import { Provider } from 'react-redux';

import getStore from '../store/imageCategorizationStore';
import ImageCategorizationContainer from '../containers/ImageCategorizationContainer';

const ImageCategorizationApp = (props) => (
  <Provider store={getStore(props.dev_environment)}>
    <ImageCategorizationContainer />
  </Provider>
);

export default ImageCategorizationApp;
