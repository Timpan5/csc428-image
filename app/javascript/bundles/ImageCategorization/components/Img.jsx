import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const src = props.index ? `/images/large/pic${props.index}.jpg` : `/images/${props.name}.jpg`;
  function onDragStartHandler(ev) {
    if (props.draggable) {
      ev.dataTransfer.setData("text/plain", "foo");
      var img = new Image();
      img.src = `/images/small/pic${props.index}.jpg`;
      ev.dataTransfer.setDragImage(img, 100, 75);
    }
  }

  return(
    <span>
      <img
        src={src}
        onMouseEnter={props.setMainImageIndex}
        draggable={props.draggable}
        onDragStart={onDragStartHandler}
        onDragOver={props.onDragOver}
        onDrop={props.onDrop}
        className={props.className}
      />
    </span>
  );
}

Img.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  setMainImageIndex: PropTypes.func,
  draggable: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  className: PropTypes.string,
};

export default Img;
