import React from "react";
import ReactDOM from "react-dom";
import Valaistus from "../kohteet/valaistus.js";
import Valaistus2 from "../kohteet/valaistus2.js";
import CameraButton from "../cameraButton.js";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";
import PohjaPage from "./PohjaPage";
import cameraButton from "../cameraButton.js";
import imageAssets from "../assets/imageAssets.js";
import textAssets from "../assets/textAssets.js";
import NavBarOnTheLeft from "../navigationBar";

class ValaistusPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <NavBarOnTheLeft navBarName={"Valaistus"}/>
                <CameraButton/>
                <PohjaPage text={textAssets.valaistus.teksti1.text} header="Kuuvalaisin" image={imageAssets.haltiatar8171} showLinks={false} header={textAssets.valaistus.teksti1.header}>
                </PohjaPage>
                <PohjaPage text={textAssets.valaistus.teksti2.text} header="Valaistus" image={imageAssets.haltiatar8394} showLinks={false} header={textAssets.valaistus.teksti2.header}>
                </PohjaPage>
                <PohjaPage text={textAssets.valaistus.teksti3.text} header="Valaistus" image={imageAssets.haltiatar8327} showLinks={false} header={textAssets.valaistus.teksti3.header}>
                </PohjaPage>
            </React.Fragment>);
    }
}
export default ValaistusPage;