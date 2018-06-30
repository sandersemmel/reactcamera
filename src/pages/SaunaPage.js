import React from "react";
import ReactDOM from "react-dom";
import Valaistus from "../kohteet/valaistus.js";
import Valaistus2 from "../kohteet/valaistus2.js";
import CameraButton from "../cameraButton.js";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer, CardPanel} from "react-materialize";
import PohjaPage from "./PohjaPage";
import cameraButton from "../cameraButton.js";
import imageAssets from "../assets/imageAssets.js";
import textAssets from "../assets/textAssets.js";
import CardPanelNoImage from "./CardPanelNoImage";
import NavBarOnTheLeft from "../navigationBar";
import SmallCardHeader from "./SmallCardHeader";
import Sizes from "../assets/sizes";
import ProductLink from "../ProductLink";
import Colors from "../assets/colorObject";

class SaunaPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                
                <NavBarOnTheLeft navBarName={"Sauna"}/>
                <CameraButton/>
                <PohjaPage text={textAssets.sauna.teksti1.text}
                           image={imageAssets.haltiatar8410}
                           header={textAssets.sauna.teksti1.header}>
                </PohjaPage>

                <SmallCardHeader
                text={"Ulkosauna"}
                color={Colors.black}
                size={Sizes.small}/>

                <CardPanelNoImage text={textAssets.sauna.teksti2.text}>
                </CardPanelNoImage>

                {/*Tuotteet*/}
                <SmallCardHeader
                text={"Tuotteet"}
                color={Colors.orange}
                size={Sizes.small}
              />
              <ProductLink text={textAssets.sauna.links.link1.linkHeader}
              url={textAssets.sauna.links.link1.linkUrl}/>
            </React.Fragment>);
    }
}
export default SaunaPage;