import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    // These stateless functional components can be implicitly returned instead 
    // of using return explicitly.    
    return (
        <Modal
            isOpen={!!props.selectedOption}
            // !! converts a string to true and undefined to false
            onRequestClose={props.handleDeleteSelectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS= {200}
            className="modal"
        >
            <h3 className= "modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick = {props.handleDeleteSelectedOption} >Okay</button>
        </Modal>
    )
}

export default OptionModal;