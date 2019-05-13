class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
        render() {
            return (
                <div>
                    <h1>Visibility Toggle</h1>
                    <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                    {this.state.visibility && <p>Hey! Now you can see the details!</p>}
                </div>
            )
        }
    }
    
    ReactDOM.render(<Visibility />, document.getElementById('app'));
    

// let isClicked = false;

// const onClickToggle = () => {
//     isClicked ? isClicked = false : isClicked = true;
//     // or isClicked = !isClicked;
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClickToggle}>{isClicked ? 'Hide details' : 'Show details'}</button>
//             {isClicked && <p>Hey! Now you can see the details!</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');

// renderApp();