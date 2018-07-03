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
import LinksComponent from "../LinksComponent.js";
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

            {/*Lupa liikkua kotona*/}    
            <SmallCardHeader text={"Lupa Liikkua kotona"}
              color={Colors.black}
              size={Sizes.small}/>
              <CardPanelNoImage text={textAssets.toiminnallisuus.teksti1.text}/>

            {/*Välineitä energian purkuun*/}  
              <SmallCardHeader text={"Välineitä energian purkuun"}
              color={Colors.black}
              size={Sizes.small}/>
              <CardPanelNoImage text={textAssets.toiminnallisuus.teksti2.text}/>
              <ProductLink text="Lue lisää aistileluista"
              url="/portaat#"/>

            <LinksComponent amountOfLinks="1" links={textAssets.toiminnallisuus.links}>
            </LinksComponent>
            </React.Fragment>
        )

    }

}

export default ToiminnallisuusPage;    