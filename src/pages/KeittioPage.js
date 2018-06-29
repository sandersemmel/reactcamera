import React from "react";
import ReactDOM from "react-dom";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import {Button, Icon, Navbar, Card, CardTitle} from "react-materialize";
import CameraButton from "../cameraButton";
import KeittionKaappi from "../kohteet/keittionKaappi.js";
import NavBarOnTheLeft from "../navigationBar.js";
import PohjaPage from "../pages/PohjaPage";
import textAssets from "../assets/textAssets";
import imageAssets from "../assets/imageAssets";
import CardPanelNoImage from "./CardPanelNoImage";
import Colors from "../assets/colorObject";

class KeittioPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<React.Fragment>
                <NavBarOnTheLeft navBarName={"Keittiö"}/>
                <CameraButton/>

                <PohjaPage image={imageAssets.haltiatar} text={textAssets.keittio.teksti1.text} header={textAssets.keittio.teksti1.header}>
                
                </PohjaPage>

                <CardPanelNoImage text={textAssets.keittio.teksti3.text} color={Colors.black}>
                </CardPanelNoImage>

                <PohjaPage image={imageAssets.haltiatar8325} text={textAssets.keittio.teksti2.text} header={textAssets.keittio.teksti2.header}>
                
                </PohjaPage>

                <br/>
            </React.Fragment>);
    }
}

export default KeittioPage;