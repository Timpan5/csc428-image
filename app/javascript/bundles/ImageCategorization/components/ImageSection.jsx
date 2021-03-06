import React from 'react';
import PropTypes from 'prop-types';
import Img from '../components/Img';

function renderPlaceholder() {
  return (
    <div className='placeholder'></div>
  );
}

function ImageSection(props) {
  function renderThumbnailImage(index) {
    return index ?
      (<Img
        draggable
        index={index}
        setMainImageIndex={() => props.setMainImageIndex(index)} />) : renderPlaceholder();
  }

  return (
    <div id='image-section'>
      {renderThumbnailImage(props.topImageIndex)}
      {renderThumbnailImage(props.middleImageIndex)}
      {renderThumbnailImage(props.bottomImageIndex)}
    </div>
  );
}

ImageSection.propTypes = {
  setMainImageIndex: PropTypes.func.isRequired,
  topImageIndex: PropTypes.number,
  middleImageIndex: PropTypes.number,
  bottomImageIndex: PropTypes.number,
}

export default ImageSection;
