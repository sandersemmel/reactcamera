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
class KylpyhuonePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <NavBarOnTheLeft navBarName="Kylpyhuone & KHH"></NavBarOnTheLeft>
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
            text={"Kodinhoitohuone"}
            color={Colors.black}
            size={Sizes.small}
          />

            <CardPanelNoImage text={textAssets.kylpyhuone.teksti3.text} color={Colors.grey3}>
            </CardPanelNoImage>

            <SmallCardHeader
            text={"Tuotteet"}
            color={Colors.orange}
            size={Sizes.small}
          />
          <ProductLink text={textAssets.kylpyhuone.links.link1.linkHeader}
          url={textAssets.kylpyhuone.links.link1.linkUrl}/>
          
          <ProductLink text={textAssets.kylpyhuone.links.link2.linkHeader}
          url={textAssets.kylpyhuone.links.link2.linkUrl}/>

          <ProductLink text={textAssets.kylpyhuone.links.link3.linkHeader}
          url={textAssets.kylpyhuone.links.link3.linkUrl}/>     

          <ProductLink text={textAssets.kylpyhuone.links.link4.linkHeader}
          url={textAssets.kylpyhuone.links.link4.linkUrl}/>  

            </React.Fragment>);
    }
}
export default KylpyhuonePage;