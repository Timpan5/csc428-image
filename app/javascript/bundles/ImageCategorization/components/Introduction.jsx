import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, Radio } from 'react-radio-group'

function Introduction(props) {
  function radioButtonChangeHandler(value) {
    props.setConfirmationMessage(value);
  }

  return (
    <div id="introduction-page">
      <h2>Image Categorization</h2>
      <h4>Instructions</h4>
      <div>
        Your task is to categorize a set of 30 images as being most related to <b>Trees, People, or Other</b>.<br />
        You will be shown an icon for each of those categories and thumbnails for each image to categorize.<br />
        To categorize an image, <b>drag the thumbnail ontop of the category icon</b>.<br />
        You will be timed and accessed for correctness.<br />
      </div>
      <h4>Confirmation Modal</h4>
      <div>
        Do you want to see a confirmation modal to confirm each image categorization?
      </div>
      <div>
        <RadioGroup name="modal" selectedValue={props.confirmationMessage} onChange={radioButtonChangeHandler}>
          <Radio value={true} />&nbsp; Yes <br />
          <Radio value={false} />&nbsp; No
        </RadioGroup>
      </div>
      <h4>Begin Categorization</h4>
      <button onClick={props.beginButtonClickHandler}>Begin</button>
    </div>
  );
}

Introduction.propTypes = {
  beginButtonClickHandler: PropTypes.func.isRequired,
  confirmationMessage: PropTypes.bool.isRequired,
  setConfirmationMessage: PropTypes.func.isRequired,
};

export default Introduction;
