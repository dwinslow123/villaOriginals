import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const ActionText = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

/** Action link element */
const ActionLink = ({address = '', text = '', secondLine = ''}) => {
    return (
        <>
            <ActionText href={address}>
                {text}
                <br />
                {secondLine}
            </ActionText>
        </>
    )
};

ActionLink.propTypes = {
    /** String to provide to the href */
    address: PropTypes.string,
    /** Optional second line of text for the action link */
    secondLine: PropTypes.string,
    /** Label of the anchor tag */
    text: PropTypes.string,
}

export default ActionLink;
