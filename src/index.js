import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

    state = {
        count: 0,
    }
    
    handleClick = event => {
        this.setState({ count: ++this.state.count })
    }
    render() {
        return (
            <div onClick={this.handleClick}>Hello World {this.state.count} times!</div> 
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))