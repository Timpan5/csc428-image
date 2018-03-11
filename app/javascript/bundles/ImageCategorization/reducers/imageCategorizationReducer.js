import { fromJS } from 'immutable';
import { SET_MAIN_IMAGE_INDEX, SET_INITIAL_IMAGES } from '../constants/imageCategorizationConstants';

const IMG_INDEX_MAX = 153;

function generateInitialRandomImageOrder() {
  var arr =  Array.from(new Array(IMG_INDEX_MAX), (x, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const initialStoreState = fromJS({
  imageIndexList: generateInitialRandomImageOrder(),
});

function setMainImageIndex(state, action) {
  return state.set('mainImageIndex', action.index);
}

function setInitialImages(state) {
  const fullList = state.get('imageIndexList');
  return state
    .set('topImageIndex', fullList.get(0))
    .set('middleImageIndex', fullList.get(1))
    .set('bottomImageIndex', fullList.get(2))
    .set('imageIndexList', fullList.skip(3));
}

const store = (state = initialStoreState, action) => {
  switch (action.type) {
    case SET_MAIN_IMAGE_INDEX:
      return setMainImageIndex(state, action);
    case SET_INITIAL_IMAGES:
      return setInitialImages(state);
    default:
      return state;
  }
};

export default store;
