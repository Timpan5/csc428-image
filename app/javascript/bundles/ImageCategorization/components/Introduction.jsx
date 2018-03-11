import React from 'react';
import PropTypes from 'prop-types';

function Introduction(props) {
  return (
    <button onClick={props.beginButtonClickHandler}>Begin</button>
  );
}

Introduction.propTypes = {
  beginButtonClickHandler: PropTypes.func.isRequired,
};

export default Introduction;
