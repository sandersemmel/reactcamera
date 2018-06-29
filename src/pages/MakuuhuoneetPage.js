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
import NavBarOnTheLeft from "../navigationBar";

class MakuuhuoneetPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
            <NavBarOnTheLeft navBarName={"Makuuhuoneet"}></NavBarOnTheLeft>
                {/*Makuuhuone*/} 
                <CameraButton/>
                <PohjaPage text={textAssets.olohuone.teksti1.text}
                           header={textAssets.olohuone.teksti1.header}
                           image={imageAssets.haltiatar8164}>
                </PohjaPage>
            </React.Fragment>);
    }
}
export default MakuuhuoneetPage;