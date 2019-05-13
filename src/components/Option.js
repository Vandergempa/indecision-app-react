import React from 'react';

const Option = (props) => (
    // These stateless functional components can be implicitly returned instead 
    // of using return explicitly.
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button 
            className = "button button--link"
            onClick={() => {
                props.handleDeleteOption(props.optionText)
            }} 
            >
                Remove
            </button>
        </div>
    )

export default Option;