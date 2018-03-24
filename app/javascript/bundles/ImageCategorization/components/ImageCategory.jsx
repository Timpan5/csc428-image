import React from 'react';
import PropTypes from 'prop-types';
import Img from '../components/Img';

function dragoverHandler(ev) {
  ev.preventDefault();
}

function ImageCategory(props) {
  function dropHandler(ev) {
    ev.preventDefault();
    props.keyPressCategorize(ev.target.className);
  }

  return (
    <div id='image-category'>
      <Img className="a" name={props.categoryTopName} draggable={false} onDragOver={dragoverHandler} onDrop={dropHandler} />
      <Img className="s" name={props.categoryMiddleName} draggable={false} onDragOver={dragoverHandler} onDrop={dropHandler} />
      <Img className="d" name={props.categoryBottomName} draggable={false} onDragOver={dragoverHandler} onDrop={dropHandler} />
    </div>
  );
}

ImageCategory.propTypes = {
  categoryTopName: PropTypes.string.isRequired,
  categoryMiddleName: PropTypes.string.isRequired,
  categoryBottomName: PropTypes.string.isRequired,
  keyPressCategorize: PropTypes.func.isRequired,
};

export default ImageCategory;
