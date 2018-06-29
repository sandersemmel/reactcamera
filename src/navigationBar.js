import React from "react";
import ReactDOM from "react-dom";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";
import Keittio from './keittio';
import Valaistus from './valaistus';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {BrowserView, isBrowser, isMobile} from 'react-device-detect';

class NavBarOnTheLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {navBarName: this.props.navBarName}
    }

    render() {
        return (
                <Navbar brand={this.state.navBarName} left={true} className={"navBar"} >
                        <NavItem href="/kohteet">Kohteet</NavItem>
                </Navbar>)
    }
}

export default NavBarOnTheLeft;