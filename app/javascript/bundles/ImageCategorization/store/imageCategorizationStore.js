import { createStore } from 'redux';
import imageCategorizationReducer from '../reducers/imageCategorizationReducer';

const configureStore = (railsProps) => (
  createStore(imageCategorizationReducer, railsProps)
);

export default configureStore;
