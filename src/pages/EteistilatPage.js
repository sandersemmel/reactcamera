import React from "react";
import ReactDOM from "react-dom";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import { Button, Icon, Navbar, Card, CardTitle } from "react-materialize";
import CameraButton from "../cameraButton.js";
import KeittionKaappi from "../kohteet/keittionKaappi.js";
import NavBarOnTheLeft from "../navigationBar.js";
import textAssets from "../assets/textAssets";
import imageAssets from "../assets/imageAssets";
import CardPanelNoImage from "../pages/CardPanelNoImage";
import Colors from "../assets/colorObject";
import SmallCardHeader from "./SmallCardHeader";
import Sizes from "../assets/sizes";
import ProductLink from "../ProductLink";
class EteisTilatPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <NavBarOnTheLeft navBarName={"Eteinen"} />
        <CameraButton />

        <SmallCardHeader
        text={"Eteinen"}
        color={Colors.black}
        size={Sizes.small}
      />
        <CardPanelNoImage text={textAssets.eteistilat.teksti1.text} />
        
        <SmallCardHeader
        text={"Eteiskäytävä"}
        color={Colors.black}
        size={Sizes.small}
      />
        <CardPanelNoImage
          text={textAssets.eteistilat.teksti2.text}
          color={Colors.grey}
        />
        <SmallCardHeader
        text={"Paloturvallisuus"}
        color={Colors.black}
        size={Sizes.small}
      />
        <CardPanelNoImage
          text={textAssets.eteistilat.teksti3.text}
          color={Colors.grey}
        />

        {/*Tuotteet*/}

        <SmallCardHeader
          text={"Tuotteet"}
          color={Colors.orange}
          size={Sizes.small}
        />
        <ProductLink
          text={textAssets.eteistilat.links.link1.linkHeader}
          url={textAssets.eteistilat.links.link1.linkUrl}
        />
      </React.Fragment>
    );
  }
}

export default EteisTilatPage;
