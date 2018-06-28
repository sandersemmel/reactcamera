import Portaat from "../kohteet/portaat.js";
import PortaidenAlla from "../kohteet/portaidenalla.js";
import React from "react";
import ReactDOM from "react-dom";
import CameraButton from "../cameraButton.js"
import textAssets from "../assets/textAssets";
import imageAssets from "../assets/imageAssets";
import CardPanelNoImage from "./CardPanelNoImage";

class PortaatPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<React.Fragment>
                    
                    <CameraButton/>
                    <CardPanelNoImage text={textAssets.portaat.teksti1.text}>
                    </CardPanelNoImage>

                    <CardPanelNoImage text={textAssets.portaat.teksti2.text}>
                    </CardPanelNoImage>
                </React.Fragment>)
    }
}
export default PortaatPage; 