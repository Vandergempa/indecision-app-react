class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {  // only for classes, not for stateless functional components
            const countStored = parseInt(localStorage.getItem('count'), 10); 

            if (!isNaN(countStored)) {
                this.setState(() => ({ count: countStored }));
            }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }
        // addOne() {
        //     this.setState({ count: this.state.count+1});
        // };
        //OR!!!!!
        addOne() {
            this.setState((prevState) => {
                return {
                    count: prevState.count + 1
                };
            });
        }
        minusOne() {
            this.setState({ count: this.state.count-1});
        };
        reset() {
            this.setState({ count: 0});
        };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne} >+1</button>
                <button onClick={this.minusOne} >-1</button>
                <button onClick={this.reset} >Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;
// const someId = 'myidhere';
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count = count - 1;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} id={someId} className="button">+1</button>
//             <button onClick={minusOne} >-1</button>
//             <button onClick={reset} >Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();