import * as constants from '../constants/imageCategorizationConstants';

export const setMainImageIndex = (index) => ({
  type: constants.SET_MAIN_IMAGE_INDEX,
  index,
});

export const setInitialImages = () => ({
  type: constants.SET_INITIAL_IMAGES,
});

export const keyPressCategorize = (key) => ({
  type: constants.KEY_PRESS_CATEGORIZE,
  key,
})

export const keyPressConfirm = () => ({
  type: constants.KEY_PRESS_CONFIRM,
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
});

export const deleteCategorySelected = () => ({
  type: constants.DELETE_CATEGORY_SELECTED,
});

export const beginTime = (date) => ({
  type: constants.BEGIN_TIME,
  date,
});

export const setConfirmationMessage = (bool) => ({
  type: constants.SET_CONFIRMATION_MESSAGE,
  bool,
});
