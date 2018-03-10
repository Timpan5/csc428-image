import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/imageCategorizationStore';
import ImageCategorizationContainer from '../containers/ImageCategorizationContainer';

const ImageCategorizationApp = (props) => (
  <Provider store={configureStore(props)}>
    <ImageCategorizationContainer />
  </Provider>
);

export default ImageCategorizationApp;
