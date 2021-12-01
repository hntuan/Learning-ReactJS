import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active">Active</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link">{this.props.name}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">{this.props.children}</a>
                </li>
            </ul>

        );
    }
}

export default Header;