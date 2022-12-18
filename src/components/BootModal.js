import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

// This is modal which appears if uou clear settings on settings page
const BootModal = (props) => {
  // State of modal and its handling
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // If you confirm resetting settings
  const handleReset = () => {
    props.setTwoHoursProgram(false);
    props.setThreeHoursProgram(false);
    props.setFourHoursProgram(false);
    props.setFiveHoursProgram(false);
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Reset Settings
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reset Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleReset}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default BootModal;
