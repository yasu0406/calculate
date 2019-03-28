import React, { Component } from 'react';
import Display from "./display/Display";
import ButtonPanel from "./buttonPanel/ButtonPanel";
import calculate from "../logic/calculate";

import './common/common.scss';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }
    handleClick = buttonName => {
        this.setState(calculate(this.state, buttonName));
    };
    render() {
        return (
            <div className="component-app">
                <Display value={this.state.next || this.state.total || "0"}/>
                <ButtonPanel onClick={this.handleClick} />
            </div>
        );
    }
}

export default App;