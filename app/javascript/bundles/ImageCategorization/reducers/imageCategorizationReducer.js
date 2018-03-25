import { fromJS } from 'immutable';
import { SET_MAIN_IMAGE_INDEX, SET_INITIAL_IMAGES, KEY_PRESS_CATEGORIZE, KEY_PRESS_CONFIRM, CHANGE_PAGE,
  INTRODUCTION_PAGE, CATEGORIZATION_PAGE, RESULT_PAGE, DELETE_CATEGORY_SELECTED, BEGIN_TIME, SET_CONFIRMATION_MESSAGE }
  from '../constants/imageCategorizationConstants';

const IMG_INDEX_MAX = 5;

function generateInitialRandomImageOrder() {
  var arr =  Array.from(new Array(IMG_INDEX_MAX), (x, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const initialStoreState = fromJS({
  page: INTRODUCTION_PAGE,
  imageIndexList: generateInitialRandomImageOrder(),
  sortedImages: {},
  score: 0,
  confirmationMessage: true,
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
  const increaseScore = (mainImageIndex < 11 && categorySelection == 'a')
    || (mainImageIndex >= 11 && mainImageIndex < 21 && categorySelection =='s')
    || (mainImageIndex >= 21 && categorySelection =='d');

  if (mainImageIndex && categorySelection) {
    return state.withMutations((state) => state
      .update('sortedImages', (sortedImages) => sortedImages.set(mainImageIndex, categorySelection))
      .update('imageIndexList', (list) => list.shift())
      .update('topImageIndex', (top) => top == mainImageIndex ? nextImgIndex : top)
      .update('middleImageIndex', (middle) => middle == mainImageIndex ? nextImgIndex : middle)
      .update('bottomImageIndex', (bot) => bot == mainImageIndex ? nextImgIndex : bot)
      .update('page', (page) => state.get('sortedImages').size == IMG_INDEX_MAX ? RESULT_PAGE : page)
      .set('endTime', state.get('sortedImages').size == IMG_INDEX_MAX ? new Date : null)
      .set('mainImageIndex', nextImgIndex)
      .update('score', (score) => increaseScore ? score + 1 : score)
    )
      .delete('categorySelection');
  }
  else {
    return state;
  }
}

function changePage(state, action) {
  return state.set('page', action.page);
}

function deleteCategorySelected(state) {
  return state.delete('categorySelection');
}

function beginTime(state, action) {
  return state.set('beginTime', action.date);
}

function setConfirmationMessage(state, action) {
  return state.set('confirmationMessage', action.bool);
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
    case CHANGE_PAGE:
      return changePage(state, action);
    case DELETE_CATEGORY_SELECTED:
      return deleteCategorySelected(state);
    case BEGIN_TIME:
      return beginTime(state, action);
    case SET_CONFIRMATION_MESSAGE:
      return setConfirmationMessage(state, action);
    default:
      return state;
  }
};

export default store;
