import React from 'react';
import {
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';

const CovidModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Alert color="info">See our message regarding COVID-19<Button color="secondary" onClick={ toggle } className={ className }>{ buttonLabel }</Button></Alert>
      <Modal isOpen={ modal } toggle={ toggle } className="">
        <ModalHeader toggle={ toggle }>COVID-19 Notice</ModalHeader>
        <ModalBody>
        <p>Following instructions from the governor, Villa Originals has temporarily closed it’s doors to the public.</p> 
        <p>Please know that we are vigilantly monitoring the situation around COVID-19 and have precautions in place to ensure a healthy and clean salon. We continue to follow updates from the World Health Organization (WHO) and local health agencies to ensure the highest level of health and safety for both our employees and our guests.</p>
        <p>During this period we will continue to provide updates when possible. Thank you for your support and we look forward to welcoming you back soon.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={ toggle }>Exit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CovidModal;