import React from 'react';

function PupDesc({ pup, onUpdatePup }) {
    function handleToggleGoodDog(e) {
        fetch(`http://localhost:3001/pups/${pup.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                isGoodDog: !pup.isGoodDog,
            }),
        })
        .then(resp => resp.json())
        .then(data => onUpdatePup(data));
    }

    return pup.name === '' ? null : (
        <React.Fragment>
            <img src={pup.image} alt={pup.name} />
            <h2>{pup.name}</h2>
            <button onClick={handleToggleGoodDog}>{pup.isGoodDog ? 'Good Dog' : 'Bad Dog'}</button>
        </React.Fragment>
    );
}

export default PupDesc;