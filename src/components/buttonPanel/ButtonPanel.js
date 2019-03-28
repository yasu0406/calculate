import React, { Component } from 'react';
import Button from '../button/Button';
import './index.scss';
import PropTypes from "prop-types";

class ButtonPanel extends Component {
    handleClick = buttonName => {
        this.props.onClick(buttonName);
    };
    render() {
        return(
            <div className="component-button-panel">
                <div>
                    <Button name="AC" onClick={this.handleClick} />
                    <Button name="+/-" onClick={this.handleClick} />
                    <Button name="%" onClick={this.handleClick} />
                    <Button name="÷" onClick={this.handleClick} orange />
                </div>
                <div>
                    <Button name="7" onClick={this.handleClick} />
                    <Button name="8" onClick={this.handleClick} />
                    <Button name="9" onClick={this.handleClick} />
                    <Button name="x" onClick={this.handleClick} orange />
                </div>
                <div>
                    <Button name="4" onClick={this.handleClick} />
                    <Button name="5" onClick={this.handleClick} />
                    <Button name="6" onClick={this.handleClick} />
                    <Button name="-" onClick={this.handleClick} orange />
                </div>
                <div>
                    <Button name="1" onClick={this.handleClick} />
                    <Button name="2" onClick={this.handleClick} />
                    <Button name="3" onClick={this.handleClick} />
                    <Button name="+" onClick={this.handleClick} orange />
                </div>
                <div>
                    <Button name="0" onClick={this.handleClick} wide />
                    <Button name="." onClick={this.handleClick} />
                    <Button name="=" onClick={this.handleClick} orange />
                </div>
            </div>

        );
    }
}
ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default ButtonPanel;
