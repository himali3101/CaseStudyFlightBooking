import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import './sidebar.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const navLinks = [
    { url: '/about-us', name: 'About Us' },
    { url: '/projects', name: 'Projects' },
    { url: '/services', name: 'Services' },
    { url: '/contact-us', name: 'Contact Us' },
];

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            style: "menu",
            menuStatus: "open"
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        switch (this.state.menuStatus) {
            case "open":
                this.setState({
                    menuStatus: "close",
                    style: "menu active"
                });
                break;
            case "close":
                this.setState({
                    menuStatus: "open",
                    style: "menu"
                });
                break;
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>menu</button>
                <div className={this.state.style}>
                    <ul>
                        {navLinks.map(({ url, name }) => (
                            <li>
                                <a href={url}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar