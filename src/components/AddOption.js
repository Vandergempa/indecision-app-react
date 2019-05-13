import React from 'react';

class AddOption extends React.Component {
    // State can be written like this because of the class property's syntax (added with yarn-babel):
    state = {
        error: undefined
    };
    // As we are using arrow functions now with class properties, we do not need to 
    // bind the funcation to the class instance anymore.

    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     // this.state = {
    //     //     error: undefined
    //     // };
    // }

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error: error }));

        if (!error) {
            e.target.elements.option.value = ""
        }
    };

    render() {
        return (
        <div>
        {this.state.error && <p className= "add-option-error">{ this.state.error }</p>}
            <form className= "add-option" onSubmit={this.handleAddOption}>
                <input className= "add-option__input" type="text" name="option" />
                <button className= "button" >Add Option</button>
            </form>            
        </div>
        );
    }
}

export default AddOption;