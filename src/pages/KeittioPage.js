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
import SmallCardHeader from "./SmallCardHeader";
import ProductLink from "../ProductLink";
import Sizes from "../assets/sizes";
import LinksComponent from "../LinksComponent";

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

                <SmallCardHeader text={"Keittiön saarekkeet"} color={Colors.black}
                size={Sizes.small}/>

                <CardPanelNoImage text={textAssets.keittio.teksti3.text}>
                </CardPanelNoImage>

                <PohjaPage image={imageAssets.haltiatar8325} text={textAssets.keittio.teksti2.text} header={textAssets.keittio.teksti2.header}>
                
                </PohjaPage>

                <SmallCardHeader text={"Liesituuletin"} color={Colors.black}
                size={Sizes.small}/>

                <CardPanelNoImage text={textAssets.keittio.teksti4.text}>
                </CardPanelNoImage>  

            {/*Vihersisutaminen ja sadonkorjuuparveke*/}
            <SmallCardHeader text={"Vihersisustaminen"} color={Colors.black}
            size={Sizes.small}/>

            <CardPanelNoImage text={textAssets.sadonkorjuu.teksti1.text}>
            </CardPanelNoImage>

            <SmallCardHeader text={"Sadonkorjuuparveke"} color={Colors.black}
            size={Sizes.small}/>
            <CardPanelNoImage text={textAssets.sadonkorjuu.teksti2.text}>
            </CardPanelNoImage>


            {/*Tuotteet*/}
            <LinksComponent amountOfLinks="3" links={textAssets.keittio.links}>
            
            </LinksComponent>

            </React.Fragment>);
    }
}

export default KeittioPage;