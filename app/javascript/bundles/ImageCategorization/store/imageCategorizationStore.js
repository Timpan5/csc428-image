import { createStore } from 'redux';
import imageCategorizationReducer from '../reducers/imageCategorizationReducer';

export default function getStore(dev) {
  const store = dev && window.__REDUX_DEVTOOLS_EXTENSION__
    ? createStore(imageCategorizationReducer, window.__REDUX_DEVTOOLS_EXTENSION__())
    : createStore(imageCategorizationReducer);

  // const sagaMiddleware = createSagaMiddleware();
  // const store = dev && window.__REDUX_DEVTOOLS_EXTENSION__
  //   ? createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__()))
  //   : createStore(rootReducer, applyMiddleware(sagaMiddleware));
  // sagaMiddleware.run(rootSaga);
  return store;
}
