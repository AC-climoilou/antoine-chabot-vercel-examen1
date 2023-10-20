import React from 'react';

function SommeEnfant(props) {

    return (
        <div>
            <button onClick={() => props.handleAddEnfant()}>+ 2 Enfant</button>

            <label>Enfant somme Parent: </label>
            <input type="number" value={props.sommeParent} readOnly/>

            <label>Enfant somme Enfant: </label>
            <input type="number" value={props.sommeEnfant} readOnly/>

            <label>Enfant somme Total: </label>
            <input type="number" value={props.sommeParent + props.sommeEnfant} readOnly/>
        </div>
    );
}

export default SommeEnfant;