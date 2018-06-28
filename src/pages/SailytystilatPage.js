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

class SailytystilatPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <CameraButton/>
                <PohjaPage text={textAssets.sailytystilat.teksti1.text}
                      image={imageAssets.haltiatar8314}
                      header={textAssets.sailytystilat.teksti1.header}>
                </PohjaPage>

                <CardPanelNoImage text={textAssets.sailytystilat.teksti2.text}>
                
                </CardPanelNoImage>
            </React.Fragment>);
    }
}
export default SailytystilatPage;