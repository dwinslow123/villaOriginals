import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactBoxContainer = styled.div`
  grid-area: contactBox;
  width: 95%;
  display: flex;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  column-gap: 1rem;
  row-gap: .5rem;
  border: 2px solid #000000;
  background: #FFFFFF;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`;

/** Box container the Contact Cards */
const ContactBox = ({children}) => {
    return (
        <>
            <ContactBoxContainer>
                {children}
            </ContactBoxContainer>
        </>
    );
}

ContactBox.propTypes = {
    /** Elements being passed into the contact box */
    children: PropTypes.array,
};

export default ContactBox;
