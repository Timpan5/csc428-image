import React from 'react';
import PropTypes from 'prop-types';
import ImageSectionContainer from '../containers/ImageSectionContainer';
import ImageMainContainer from '../containers/ImageMainContainer';

// function attachKeyListener(handleCategoryA, handleCategoryS, handleCategoryD) {
//
// }

function ImageCategorization(props) {
  return (
    <div>
      <ImageSectionContainer />
      <ImageMainContainer />
      <button onClick={props.setInitialImages}>Init</button>
    </div>
  );
}

ImageCategorization.propTypes = {
  setInitialImages: PropTypes.func.isRequired,
};

export default ImageCategorization;
