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
import Sizes from "../assets/sizes";
import { Link } from "react-router-dom";
import LinksComponent from "../LinksComponent";
import PlainImageComponent from "../PlainImageComponent";

class LuovaTilaPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
            <NavBarOnTheLeft navBarName="Luova Tila"/>
            <CameraButton/>

            <SmallCardHeader text={"Sadonkorjuuparveke"} color={Colors.black}
            size={Sizes.small}/>

            <CardPanelNoImage text={textAssets.luovatila.teksti1.text}>
            </CardPanelNoImage>

            <CardPanelNoImage text={textAssets.luovatila.teksti2.text}>
            </CardPanelNoImage>
            <PlainImageComponent image={imageAssets.luovatila} />
            

            </React.Fragment>)
    }
}
export default LuovaTilaPage;