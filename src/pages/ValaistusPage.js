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
import NavBarOnTheLeft from "../navigationBar";
import SmallCardHeader from "./SmallCardHeader.js";
import PlainImageComponent from "../PlainImageComponent.js";
import CardPanelNoImage from "./CardPanelNoImage.js";
import Colors from "../assets/colorObject";
import Sizes from "../assets/sizes";

class ValaistusPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <NavBarOnTheLeft navBarName={"Valaistus"}/>
                <CameraButton/>
                {/*Kuuvalaisin*/}
                <SmallCardHeader text={"Kuuvalaisin"} color={Colors.black}
                size={Sizes.small}/>
                <PlainImageComponent image={imageAssets.haltiatar8171}/>
                <CardPanelNoImage text={textAssets.valaistus.teksti1.text}>
                </CardPanelNoImage>  
                

                {/*Valaisinten valinta*/}
                <SmallCardHeader text={textAssets.valaistus.teksti2.header} color={Colors.black}
                size={Sizes.small}/>
                <PlainImageComponent image={imageAssets.haltiatar8394}/>
                <CardPanelNoImage text={textAssets.valaistus.teksti2.text}>
                </CardPanelNoImage> 


                {/*Luonnonvalo*/}
                <SmallCardHeader text={textAssets.valaistus.teksti3.header} color={Colors.black}
                size={Sizes.small}/>
                <PlainImageComponent image={imageAssets.haltiatar8327}/>
                <CardPanelNoImage text={textAssets.valaistus.teksti3.text}>
                </CardPanelNoImage> 

            </React.Fragment>);
    }
}
export default ValaistusPage;