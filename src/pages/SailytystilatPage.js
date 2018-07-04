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
import Sizes from "../assets/sizes";
import SmallCardHeader from "./SmallCardHeader.js";
import Colors from "../assets/colorObject";
import NavBarOnTheLeft from "../navigationBar.js";
import LinksComponent from "../LinksComponent.js";
import PlainImageComponent from "../PlainImageComponent";
class SailytystilatPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <NavBarOnTheLeft navBarName="Säilytys"/>
                <CameraButton/>
                <PohjaPage text={textAssets.sailytystilat.teksti1.text}
                      image={imageAssets.haltiatar8314}
                      header={textAssets.sailytystilat.teksti1.header}>
                </PohjaPage>

            {/*Säilytysjärjestelmät*/}
            <SmallCardHeader text={"Säilytysjärjestelmät"}
                color={Colors.black}
                size={Sizes.small}/>

            <PlainImageComponent image={imageAssets.korit}>
            </PlainImageComponent>
                <CardPanelNoImage text={textAssets.sailytystilat.teksti2.text}>
                
                </CardPanelNoImage>

            {/*Kuvat tukena*/}
            <SmallCardHeader text={"Kuvat tukena"}
                color={Colors.black}
                size={Sizes.small}/>

                <CardPanelNoImage text={textAssets.sailytystilat.teksti3.text}>
                    
                </CardPanelNoImage>

            {/*Tuotteet*/}

            <LinksComponent amountOfLinks="1" links={textAssets.sailytystilat.links}/>    

            </React.Fragment>);
    }
}
export default SailytystilatPage;