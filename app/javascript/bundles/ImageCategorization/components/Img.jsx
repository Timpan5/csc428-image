import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const src = props.index ? `/images/large/img${props.index}.jpg` : `/images/${props.name}.jpg`;

//does not seem to work first time
  function onDragStartHandler(ev) {
    if (props.draggable) {
      ev.dataTransfer.setData("text/plain", "foo");
      var img = new Image(500, 500);
      img.src = `/images/small/img${props.index}.jpg`;
      ev.dataTransfer.setDragImage(img, 50, 50);
    }
  }

  return(
    <span>
      <img
        src={src}
        onMouseEnter={props.setMainImageIndex}
        draggable={props.draggable}
        onDragStart={onDragStartHandler}
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
};

export default Img;
