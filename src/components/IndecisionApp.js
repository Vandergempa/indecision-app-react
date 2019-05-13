import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
        // As we are using arrow functions now with class properties, we do not need to 
        // bind the funcation to the class instance anymore.

    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     };
    // }

    // handleDeleteOptions() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     })
    // }

    // State can be written like this because of the class property's syntax (added with yarn-babel):
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))};

    handleDeleteOption = (optionToRemove) => {
        this.setState ((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))};

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState (() => ({
            selectedOption: option
        }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item!'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        } 

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))};

    handleDeleteSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))};

    componentDidMount() {  // only for classes, not for stateless functional components
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    };

    componentWillUnmount() {
        console.log('componentWillUnmount');
    };

    render() {
        const subtitle = 'Let your computer make the decisions!';
       return (
        <div>
            <Header subtitle = { subtitle } />
            <div className= "container">
                <Action
                    hasOptions = { this.state.options.length > 0} 
                    handlePick = { this.handlePick }
                />
                <div className= "widget">
                    <Options 
                        options = { this.state.options }
                        handleDeleteOptions = { this.handleDeleteOptions }
                        handleDeleteOption = { this.handleDeleteOption }
                    />
                    <AddOption 
                    handleAddOption = { this.handleAddOption }
                    />
                </div>
            </div>
            <OptionModal 
                selectedOption = { this.state.selectedOption }
                handleDeleteSelectedOption = { this.handleDeleteSelectedOption }
            />
        </div>
       ) 
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };

export default IndecisionApp;