import React from "react";
import ReactDOM from "react-dom";
import Valaistus from "../kohteet/valaistus.js";
import Valaistus2 from "../kohteet/valaistus2.js";
import CameraButton from "../cameraButton.js";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer, Chip, CardPanel} from "react-materialize";
import PohjaPage from "./PohjaPage";
import cameraButton from "../cameraButton.js";
import imageAssets from "../assets/imageAssets.js";
import textAssets from "../assets/textAssets.js";
import NavBarOnTheLeft from "../navigationBar";
import CardPanelNoImage from "./CardPanelNoImage";
import SmallCardHeader from "./SmallCardHeader";
import Colors from "../assets/colorObject";
import sizes from "../assets/sizes";
import { Link } from "react-router-dom";
import LinksComponent from "../LinksComponent.js";

class WcPage extends React.Component {
    constructor(props) {
        super(props);
    }
    redirect(){
        window.location.replace("http://gmail.com");
    }
    render() {
        return (
            <React.Fragment>
                <NavBarOnTheLeft navBarName="Wc"/>
                <CameraButton/>
                    
                <SmallCardHeader text={textAssets.wc.teksti1.header}
                                color={Colors.black}
                                size={sizes.small}>
                </SmallCardHeader>
                <CardPanelNoImage text={textAssets.wc.teksti1.text}>
                </CardPanelNoImage>

                
            
            </React.Fragment>)
    }
}
export default WcPage;