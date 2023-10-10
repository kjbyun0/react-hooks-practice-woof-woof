import React from 'react';

function PupButton({ pup, onPupClick }) {
    // console.log('in PupButton, pup: ', pup);

    return (
        <span onClick={() => onPupClick(pup)}>{pup.name}</span>
    );
}

export default PupButton;