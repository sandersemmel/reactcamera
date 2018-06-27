import React from "react";
import ReactDOM from "react-dom";
import Kohde from '../kohteet/kohde.js'
import PohjaPage from "./PohjaPage.js"
import imageAssets from "../assets/imageAssets";
import textAssets from "../assets/textAssets";
import CardPanel from "react-materialize/lib/CardPanel";
import CameraButton from "../cameraButton";
import CardPanelNoImage from "../pages/CardPanelNoImage";
import Colors from "../assets/colorObject";
class AkustiikkaPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<React.Fragment>
                <CameraButton/>
                <PohjaPage text={textAssets.akustiikka.teksti1.text} image={imageAssets.haltiatar8273} header={textAssets.akustiikka.teksti1.header}>
                
                </PohjaPage>
                <PohjaPage text={textAssets.akustiikka.teksti2.text} image={imageAssets.haltiatar8448} header={textAssets.akustiikka.teksti2.header}>
                
                </PohjaPage>

                <CardPanelNoImage text={textAssets.akustiikka.teksti3.text} color={Colors.green}>
                
                </CardPanelNoImage>

                <CardPanelNoImage text={textAssets.akustiikka.teksti4.text} color={Colors.orange}>
                
                </CardPanelNoImage>
               </React.Fragment>)
    }
}


export default AkustiikkaPage;