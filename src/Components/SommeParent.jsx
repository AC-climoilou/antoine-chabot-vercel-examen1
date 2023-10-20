import React, { Component } from 'react';
import SommeEnfant from './SommeEnfant';

class SommeParent extends Component {

    state = {
        sommeParent: 0,
        sommeEnfant: 0
    }

    handleAddParent = () => {
        this.setState((state) => ({
           sommeParent: state.sommeParent + 1
        }));
    }

    handleAddEnfant = () => {
        this.setState((state) => ({
            sommeEnfant: state.sommeEnfant + 2
        }));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleAddParent()}>+ 1 Parent</button>

                <label>Parent somme Parent: </label>
                <input type="number" value={this.state.sommeParent} readOnly/>

                <label>Parent somme Enfant: </label>
                <input type="number" value={this.state.sommeEnfant} readOnly/>

                <label>Parent somme Total: </label>
                <input type="number" value={this.state.sommeParent + this.state.sommeEnfant} readOnly/>

                <SommeEnfant sommeParent={this.state.sommeParent} sommeEnfant={this.state.sommeEnfant} handleAddEnfant={this.handleAddEnfant}/>
            </div>
        );
    }
}

export default SommeParent;