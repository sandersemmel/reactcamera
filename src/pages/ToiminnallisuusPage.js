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

            </React.Fragment>
        )

    }

}

export default ToiminnallisuusPage;    