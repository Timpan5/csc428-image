import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid rgb(204, 204, 204)',
    overflow: 'auto',
    borderRadius: '2px',
    outline: 'none',
    padding: '10px',
    width: '33vw',
    height: '30vh',
    margin: 'auto',
  }
};

function ConfirmationModal(props) {
  return (
    <Modal isOpen={props.showModal} style={modalStyle} ariaHideApp={false}>
      <div id="confirmation-modal">
        <h2>Confirm</h2>
        <div>{`Add image to ${props.categoryString} category?`}</div>
        <div id="buttons-container">
          <button id="no-button" onClick={props.noButtonHandler}>No</button>
          <button id="yes-button" onClick={props.yesButtonHandler}>Yes</button>
        </div>
      </div>
    </Modal>
  );
}

ConfirmationModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  categoryString: PropTypes.string,
  noButtonHandler: PropTypes.func.isRequired,
  yesButtonHandler: PropTypes.func.isRequired,
};

export default ConfirmationModal;
