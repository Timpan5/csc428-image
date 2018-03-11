import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  const src = `/images/img${props.index}.jpg`;

  return(
    <span>
      <img src={src} onMouseEnter={props.setMainImageIndex} />
    </span>
  );
}

Img.propTypes = {
  index: PropTypes.number.isRequired,
  setMainImageIndex: PropTypes.func,
};

export default Img;
