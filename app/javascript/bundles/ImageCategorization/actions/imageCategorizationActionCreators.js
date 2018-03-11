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
