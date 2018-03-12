import React from 'react';
import PropTypes from 'prop-types';

function Results(props) {
  return (
    <div>
      {props.results}
    </div>
  );
}

Results.propTypes = {
  results: PropTypes.object.isRequired,
}

export default Results;
