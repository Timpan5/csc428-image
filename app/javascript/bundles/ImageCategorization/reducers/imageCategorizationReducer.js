import { combineReducers } from 'redux';
import { IMAGE_CATEGORIZATION_NAME_UPDATE } from '../constants/imageCategorizationConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case IMAGE_CATEGORIZATION_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const imageCategorizationReducer = combineReducers({ name });

export default imageCategorizationReducer;
