import React from "react";
import ReactDOM from "react-dom";
import Valaistus from "../kohteet/valaistus.js";
import Valaistus2 from "../kohteet/valaistus2.js";
import CameraButton from "../cameraButton.js";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer, CardPanel} from "react-materialize";
import PohjaPage from "./PohjaPage";
import cameraButton from "../cameraButton.js";
import imageAssets from "../assets/imageAssets.js";
import textAssets from "../assets/textAssets.js";
import CardPanelNoImage from "./CardPanelNoImage";
import NavBarOnTheLeft from "../navigationBar";

class SaunaPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <CameraButton/>
                <NavBarOnTheLeft navBarName={"Sauna"}>
                </NavBarOnTheLeft>
                <PohjaPage text={textAssets.sauna.teksti1.text}
                           image={imageAssets.haltiatar8410}
                           header={textAssets.sauna.teksti1.header}>
                </PohjaPage>

                <CardPanelNoImage text={textAssets.sauna.teksti2.text}>
                </CardPanelNoImage>
            </React.Fragment>);
    }
}
export default SaunaPage;