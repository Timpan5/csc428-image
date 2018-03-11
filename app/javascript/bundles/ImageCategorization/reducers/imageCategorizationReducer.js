import { fromJS } from 'immutable';
import { SET_MAIN_IMAGE_INDEX, SET_INITIAL_IMAGES, KEY_PRESS_CATEGORIZE, KEY_PRESS_CONFIRM }
  from '../constants/imageCategorizationConstants';

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
  sortedImages: {},
});

function setMainImageIndex(state, action) {
  return state.set('mainImageIndex', action.index);
}

function setInitialImages(state) {
  const fullList = state.get('imageIndexList');
  return state.withMutations((state) => state
    .set('topImageIndex', fullList.get(0))
    .set('middleImageIndex', fullList.get(1))
    .set('bottomImageIndex', fullList.get(2))
    .set('imageIndexList', fullList.skip(3))
  );
}

function keyPressCategorize(state, action) {
  return state.set('categorySelection', action.key);
}

function keyPressConfirm(state) {
  const mainImageIndex = state.get('mainImageIndex');
  const categorySelection = state.get('categorySelection');
  const nextImgIndex = state.get('imageIndexList').first();

  if (mainImageIndex) {
    return state.withMutations((state) => state
      .update('sortedImages', (sortedImages) => sortedImages.set(mainImageIndex, categorySelection))
      .update('imageIndexList', (list) => list.shift())
      .update('topImageIndex', (top) => top == mainImageIndex ? nextImgIndex : top)
      .update('middleImageIndex', (middle) => middle == mainImageIndex ? nextImgIndex : middle)
      .update('bottomImageIndex', (bot) => bot == mainImageIndex ? nextImgIndex : bot)
    )
      .delete('mainImageIndex')
      .delete('categorySelection');
  }
  else {
    return state;
  }
}

const store = (state = initialStoreState, action) => {
  switch (action.type) {
    case SET_MAIN_IMAGE_INDEX:
      return setMainImageIndex(state, action);
    case SET_INITIAL_IMAGES:
      return setInitialImages(state);
    case KEY_PRESS_CATEGORIZE:
      return keyPressCategorize(state, action);
    case KEY_PRESS_CONFIRM:
      return keyPressConfirm(state);
    default:
      return state;
  }
};

export default store;
