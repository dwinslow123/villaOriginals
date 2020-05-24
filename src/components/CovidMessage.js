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
      <Alert color="info">See our updates regarding COVID-19<Button color="secondary" onClick={ toggle } className={ className }>{ buttonLabel }</Button></Alert>
      <Modal isOpen={ modal } toggle={ toggle } className="">
        <ModalHeader toggle={ toggle }>COVID-19 Updates</ModalHeader>
        <ModalBody>
        <p>We will be reaching out to each of you to reschedule your appointments. We will start with the missed appointments from March and move on through April and May.</p>
        <p>We will be temporarily extending our hours to accommodate the overflow of appointments. The salon will be operating at 50% capacity to maintain social distancing so please be patient, as we do our best to fit our guests in for appointments.</p> 
        <p>Our number one priority is the health and safety of our guests, the team, and our community.</p>
        <p>In the meantime we ask:</p>
        <ol>
          <li>If you are feeling ill or someone near you is ill, please reschedule your appointment.</li>
          <li>Please do not bring any additional guests with you to your appointment.</li>
          <li>Our waiting are will be closed. Please wait in your car until we are ready for you.</li>
          <li>Please bring minimal belongings with you for your appointment.</li>
          <li>Please use the hand sanitizer that will be provided and wash your hands as often as possible.</li>
          <li>By entering the salon, you are stating that you are fever free and have no symptoms of illness.</li>
          <li>Staff and guests are required to wear a mask or face covering. Please keep your mask on for the duration of your appointment.</li>
          <li>Guests will be seated at every other station to maintain social distance.</li>
          <li>Hand sanitizer will be provided at each station.</li>
          <li>We will taking extra sanitary precautions and utilizing the time between guests to sanitize and clean.</li>
        </ol>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={ toggle }>Exit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CovidModal;