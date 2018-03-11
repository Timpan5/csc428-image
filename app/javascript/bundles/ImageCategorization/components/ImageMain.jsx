import React from 'react';
import PropTypes from 'prop-types';
import Img from '../components/Img';

function ImageMain(props) {
  const index = props.mainImageIndex;
  return (
    <div id='image-main'>
      {index && <Img index={index} />}
    </div>
  );
}

ImageMain.propTypes = {
  mainImageIndex: PropTypes.number,
};

export default ImageMain;
