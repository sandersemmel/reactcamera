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
import Colors from "../assets/colorObject";

class KylpyhuonePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <CameraButton/>
            <CardPanelNoImage text={textAssets.kylpyhuone.teksti1.text} color={Colors.grey}>
            </CardPanelNoImage>
            <CardPanelNoImage text={textAssets.kylpyhuone.teksti2.text} color={Colors.grey2}>
            </CardPanelNoImage>

            <CardPanelNoImage text={textAssets.kylpyhuone.teksti3.text} color={Colors.grey3}>
            </CardPanelNoImage>

            </React.Fragment>);
    }
}
export default KylpyhuonePage;