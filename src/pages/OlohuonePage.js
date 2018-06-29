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
import sizes from "../assets/sizes";

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
                // ADD LINKS

                <SmallCardHeader text={"Ruokailutila"} color={Colors.orange}>
                </SmallCardHeader>
               { /*Ruokailutila*/ }
                <PohjaPage text={textAssets.ruokailutila.teksti1.text}
                header={textAssets.ruokailutila.teksti1.header}
                image={imageAssets.haltiatar8333}>
                </PohjaPage>

                <SmallCardHeader text={textAssets.ruokailutila.teksti2.header}
                                 size={sizes.small}
                                 color={Colors.black}>
                </SmallCardHeader>
                <CardPanelNoImage text={textAssets.ruokailutila.teksti2.text}
                                    color={Colors.grey3}>
                </CardPanelNoImage>
                
                <SmallCardHeader text={textAssets.ruokailutila.teksti3.header}
                size={sizes.small}
                color={Colors.black}>
                </SmallCardHeader>
                <CardPanelNoImage text={textAssets.ruokailutila.teksti3.text}
                                    color={Colors.grey3}>
                </CardPanelNoImage>

                <SmallCardHeader text={"Lukunurkkaus"} color={Colors.orange}>
                </SmallCardHeader>
                {/*Lukunurkkaus*/}
                <PohjaPage text={textAssets.lukunurkkaus.teksti1.text}
                header={textAssets.lukunurkkaus.teksti1.header}
                image={imageAssets.haltiatar8171}>
                </PohjaPage>
            </React.Fragment>);
    }
}
export default OlohuonePage;