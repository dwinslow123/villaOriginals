import React from "react";
import {
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

const CovidModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Alert color="info">
        See our updates regarding COVID-19
        <Button color="secondary" onClick={toggle} className={className}>
          {buttonLabel}
        </Button>
      </Alert>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>COVID-19 Updates</ModalHeader>
        <ModalBody>
          <p>
            As we enter Phase 4 or Restore Illinois, the guidelines have not
            changed much for us:</p>
            <p>A face mask/covering is required to enter the salon and we
            are still limiting the amount of people in our establishment at one
            time.<br />
            <strong>
              Capacity numbers have increased slightly according to the
              guidelines.
            </strong>
          </p>
          <p>
            Our waiting room is now open but please be courteous about giving
            people their space. Please check in the with front desk and we will advise if you need
            to wait outside on the bench.
            <br />
          </p>
          <p>Thank you all for your patience during this time, and we look forward to continuing to serve you!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Exit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CovidModal;
