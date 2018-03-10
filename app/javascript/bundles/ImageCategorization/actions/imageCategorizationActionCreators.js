import { IMAGE_CATEGORIZATION_NAME_UPDATE } from '../constants/imageCategorizationConstants';

export const updateName = (text) => ({
  type: IMAGE_CATEGORIZATION_NAME_UPDATE,
  text,
});
