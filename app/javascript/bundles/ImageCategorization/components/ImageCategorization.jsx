import React from 'react';
import PropTypes from 'prop-types';
import ImageSectionContainer from '../containers/ImageSectionContainer';
import ImageMainContainer from '../containers/ImageMainContainer';

function attachKeyListener(handleCategoryA, handleCategoryS, handleCategoryD, handleSpace) {
  window.addEventListener('keydown', function (e) {
    switch(e.key) {
      case 'a':
        handleCategoryA();
        break;
      case 's':
        handleCategoryS();
        break;
      case 'd':
        handleCategoryD();
        break;
      case ' ':
        handleSpace();
        break;
    }
  });
}

function ImageCategorization(props) {
  attachKeyListener(props.handleCategoryA, props.handleCategoryS, props.handleCategoryD, props.handleSpace);

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
  handleCategoryA: PropTypes.func.isRequired,
  handleCategoryS: PropTypes.func.isRequired,
  handleCategoryD: PropTypes.func.isRequired,
  handleSpace: PropTypes.func.isRequired,
};

export default ImageCategorization;
