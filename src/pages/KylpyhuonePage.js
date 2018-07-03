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
import Colors from "../assets/colorObject";
import SmallCardHeader from "./SmallCardHeader";
import Sizes from "../assets/sizes";
import NavBarOnTheLeft from "../navigationBar";
import ProductLink from "../ProductLink";
import ReactDropdown from "react-dropdown";
import LinksComponent from "../LinksComponent.js";
class KylpyhuonePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <NavBarOnTheLeft navBarName="Suihku- ja kodinhoito"></NavBarOnTheLeft>
                <CameraButton/>
                <SmallCardHeader
                text={"Suihkutila"}
                color={Colors.black}
                size={Sizes.small}
              />
            <CardPanelNoImage text={textAssets.kylpyhuone.teksti1.text} color={Colors.grey}>
            </CardPanelNoImage>
            <SmallCardHeader
            text={"Suihkukalusteet"}
            color={Colors.black}
            size={Sizes.small}
          />
            <CardPanelNoImage text={textAssets.kylpyhuone.teksti2.text} color={Colors.grey2}>
            </CardPanelNoImage>

            <SmallCardHeader
            text={"Kodinhoitotila"}
            color={Colors.black}
            size={Sizes.small}
          />
            <CardPanelNoImage text={textAssets.kylpyhuone.teksti3.text} color={Colors.grey3}>
            </CardPanelNoImage>

            <SmallCardHeader
            text={"Pesu- ja puhdistusaineet"}
            color={Colors.black}
            size={Sizes.small}
          />
            <CardPanelNoImage text={textAssets.kylpyhuone.teksti5.text} color={Colors.grey3}>
            </CardPanelNoImage>
          

          <LinksComponent amountOfLinks="4" links={textAssets.kylpyhuone.links}>
          </LinksComponent>
            </React.Fragment>);
    }
}
export default KylpyhuonePage;