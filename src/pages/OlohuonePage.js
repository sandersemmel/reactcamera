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
import SmallCardHeader from "./SmallCardHeader";
import Colors from "../assets/colorObject";
import Sizes from "../assets/sizes";
import LinksComponent from "../LinksComponent.js";

class OlohuonePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
            <NavBarOnTheLeft navBarName={"Olohuone"}></NavBarOnTheLeft>
                {/*Olohuone*/} 
                <CameraButton/>
                <SmallCardHeader text={"Olohuone"} color={Colors.orange}>
                </SmallCardHeader>
                
                <PohjaPage text={textAssets.olohuone.teksti1.text}
                           header={textAssets.olohuone.teksti1.header}
                           image={imageAssets.haltiatar8164}>
                </PohjaPage>

                <PohjaPage text={textAssets.olohuone.teksti2.text}
                            header={textAssets.olohuone.teksti2.header}
                            image={imageAssets.haltiatar8365}>
                </PohjaPage>

                {/*Taide*/}
                <SmallCardHeader text={"Taide"}
                color={Colors.black}
                size={Sizes.small}/>

                <CardPanelNoImage text={textAssets.olohuone.teksti3.text}
                                    color={Colors.grey3}>
                </CardPanelNoImage>

                {/*Lukunurkkaus*/}
                <SmallCardHeader text={"Lukunurkkaus"}
                        color={Colors.black}
                        size={Sizes.small}/>

                <CardPanelNoImage text={textAssets.lukunurkkaus.teksti1.text}
                                    color={Colors.grey3}>
                </CardPanelNoImage>
                <CardPanelNoImage text={textAssets.lukunurkkaus.teksti2.text}
                                    color={Colors.grey3}>
                </CardPanelNoImage>

                <LinksComponent amountOfLinks="7" links={textAssets.olohuone.links}>

                </LinksComponent>
            </React.Fragment>);
    }
}
export default OlohuonePage;