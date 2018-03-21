import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const src = props.index ? `/images/img${props.index}.jpg` : `/images/${props.name}.jpg`;

  return(
    <span>
      <img src={src} onMouseEnter={props.setMainImageIndex} />
    </span>
  );
}

Img.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  setMainImageIndex: PropTypes.func,
};

export default Img;
