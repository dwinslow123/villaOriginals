import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {ActionLink} from '../index';

const CardSection = styled.div`
  height: 100%;
  width: 50%;
  margin-bottom: 2%;
  display: flex;
  justify-content: space-evenly;
  background: #ffffff;
`;

const CardContext = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 100%;
`;

const CardTitle = styled.div`
  border-bottom: 1px solid #000000;
  margin-bottom: 1.5rem;
`;

/** Contact card component */
const ContactCard = ({actionText = '', actionTextSecondLine = '', linkAddress = '', title = ''}) => {
    return (<>
        <CardSection>
            <CardContext>
                <CardTitle>
                    {title}
                </CardTitle>
                <ActionLink address={linkAddress} text={actionText}
                            secondLine={actionTextSecondLine}/>
            </CardContext>
        </CardSection>
    </>)
}
ContactCard.propTypes = {
    /** Text for the action link */
    actionText: PropTypes.string,
    /** Optional second line of text for action link */
    actionTextSecondLine: PropTypes.string,
    /** If there's an anchor tag this is the link for it. */
    linkAddress: PropTypes.string,
    /** Title of the card. */
    title: PropTypes.string,
}

export default ContactCard;
