import * as constants from '../constants/imageCategorizationConstants';

export const setMainImageIndex = (index) => ({
  type: constants.SET_MAIN_IMAGE_INDEX,
  index,
});

export const setInitialImages = () => ({
  type: constants.SET_INITIAL_IMAGES,
});
