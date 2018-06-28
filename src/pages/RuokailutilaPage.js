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
import CardPanelNoImage from "./CardPanelNoImage";

class RuokailuTilaPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <CameraButton/>
                <PohjaPage text={textAssets.ruokailutila.teksti1.text}
                           header={textAssets.ruokailutila.teksti1.header}
                           image={imageAssets.haltiatar8333}>
                </PohjaPage>

                <CardPanelNoImage text={textAssets.ruokailutila.teksti2.text}>
                </CardPanelNoImage>
            </React.Fragment>);
    }
}
export default RuokailuTilaPage;