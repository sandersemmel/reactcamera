import React from "react";
import ReactDOM from "react-dom";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import {Button, Icon, Navbar, Card, CardTitle} from "react-materialize";
import CameraButton from "../cameraButton.js";
import KeittionKaappi from "../kohteet/keittionKaappi.js";
import NavBarOnTheLeft from "../navigationBar.js";
import textAssets from "../assets/textAssets";
import imageAssets from "../assets/imageAssets";
import CardPanelNoImage from "../pages/CardPanelNoImage";
import Colors from "../assets/colorObject";
class EteisTilatPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<React.Fragment>
                <NavBarOnTheLeft navBarName={"Eteinen"}/>
                <CameraButton/>
                <CardPanelNoImage text={textAssets.eteistilat.teksti1.text}>
                </CardPanelNoImage>
                <CardPanelNoImage text={textAssets.eteistilat.teksti2.text} color={Colors.grey}>
                </CardPanelNoImage>
                <CardPanelNoImage text={textAssets.eteistilat.teksti3.text} color={Colors.grey}>
                </CardPanelNoImage>
             </React.Fragment>   
            )
    }
}

export default EteisTilatPage;