import React from 'react';

const Action = (props) => {
    // These stateless functional components can be implicitly returned instead 
    // of using return explicitly.
    return (
        <div>
            <button 
                className = "big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    )
}

export default Action;