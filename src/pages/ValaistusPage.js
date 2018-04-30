import React from "react";
import ReactDOM from "react-dom";
import Valaistus from "../kohteet/valaistus.js";
import Valaistus2 from "../kohteet/valaistus2.js";
import CameraButton from "../cameraButton.js";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";


class ValaistusPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<React.Fragment>
                    <CameraButton/>
                    <br/>
                    <br/>
                    <br/>
            
                    <Valaistus/>
                    <Valaistus2/>
                </React.Fragment>)
    }
}
export default ValaistusPage;