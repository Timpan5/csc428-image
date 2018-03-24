import React from 'react';
import PropTypes from 'prop-types';
import Img from '../components/Img';

function ImageCategory(props) {
  return (
    <div id='image-category'>
      <Img name={props.categoryTopName} draggable={false} />
      <Img name={props.categoryMiddleName} draggable={false} />
      <Img name={props.categoryBottomName} draggable={false} />
    </div>
  );
}

ImageCategory.propTypes = {
  categoryTopName: PropTypes.string.isRequired,
  categoryMiddleName: PropTypes.string.isRequired,
  categoryBottomName: PropTypes.string.isRequired,
};

export default ImageCategory;
