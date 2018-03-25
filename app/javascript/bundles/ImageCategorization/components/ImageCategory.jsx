import React from 'react';
import PropTypes from 'prop-types';
import Img from '../components/Img';

function dragoverHandler(ev) {
  ev.preventDefault();
  ev.target.style.border = '3px solid green';
}

function dragLeaveHandler(ev) {
  ev.preventDefault();
  ev.target.style.border = '';
}

function ImageCategory(props) {
  function dropHandler(ev) {
    ev.preventDefault();
    ev.target.style.border = '';
    props.keyPressCategorize(ev.target.className);
    props.confirmationMessage ? null : props.keyPressConfirm();
  }

  return (
    <div id='image-category'>
      <Img className="a" name={props.categoryTopName} draggable={false} onDragOver={dragoverHandler} onDrop={dropHandler} dragLeave={dragLeaveHandler} />
      <Img className="s" name={props.categoryMiddleName} draggable={false} onDragOver={dragoverHandler} onDrop={dropHandler} dragLeave={dragLeaveHandler} />
      <Img className="d" name={props.categoryBottomName} draggable={false} onDragOver={dragoverHandler} onDrop={dropHandler} dragLeave={dragLeaveHandler} />
    </div>
  );
}

ImageCategory.propTypes = {
  categoryTopName: PropTypes.string.isRequired,
  categoryMiddleName: PropTypes.string.isRequired,
  categoryBottomName: PropTypes.string.isRequired,
  keyPressCategorize: PropTypes.func.isRequired,
  keyPressConfirm: PropTypes.func.isRequired,
  confirmationMessage: PropTypes.bool.isRequired,
};

export default ImageCategory;
