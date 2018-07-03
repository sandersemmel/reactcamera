import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Icon,
  Navbar,
  Card,
  CardTitle,
  NavItem,
  Footer,
  CardPanel
} from "react-materialize";
import CameraButton from "../cameraButton.js";
import sizes from "../assets/sizes"
import PohjaPage from "./PohjaPage";
import textAssets from "../assets/textAssets";
import imageAssets from "../assets/imageAssets";
import Colors from "../assets/colorObject";
import CardPanelNoImage from "./CardPanelNoImage";
import SmallCardHeader from "./SmallCardHeader";
import NavBarOnTheLeft from "../navigationBar";
import Sizes from "../assets/sizes";
import ProductLink from "../ProductLink";
class ToiminnallisuusPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(<React.Fragment>

            <NavBarOnTheLeft navBarName={"Toiminnallisuus"}/>
            <CameraButton/>
                          {/*Toiminallisuus*/}
                          <SmallCardHeader text={"Toiminnallisuus"}
              color={Colors.black}
              size={Sizes.small}/>
              
              <CardPanelNoImage text={textAssets.toiminnallisuus.teksti1.text}/>
              <CardPanelNoImage text={textAssets.toiminnallisuus.teksti2.text}/>
              <ProductLink text="Lue lisää aistileluista"
              url="/portaat#"/>

            </React.Fragment>
        )

    }

}

export default ToiminnallisuusPage;    