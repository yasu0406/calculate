import React, { Component } from 'react';
import PropTypes from "prop-types";
import './index.scss';
class Button extends Component {
    handleClick = () => {
        this.props.onClick(this.props.name);
        console.log(this.props.name);
    };
    render() {
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
        ];
        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}
Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
};
export default Button;
