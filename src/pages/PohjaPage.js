import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";
import CameraButton from "../cameraButton.js";

class PohjaPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {teksti: this.props.teksti, otsikko: this.props.otsikko}
    }
    render() {
        return (<React.Fragment>
            <CameraButton/>
            <br/>
            <br/>
            {this.state.teksti}
            {this.state.otsikko}
            <br/>
            {this.state.teksti}
            </React.Fragment>)
    }
}


export default PohjaPage;