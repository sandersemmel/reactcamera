import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Icon,
  Navbar,
  Card,
  CardTitle,
  NavItem,
  Footer
} from "react-materialize";
import CameraButton from "../cameraButton.js";
import CardPanelNoImage from "./CardPanelNoImage.js";
import Sizes from "../assets/sizes";
import Colors from "../assets/colorObject";
import SmallCardHeader from "./SmallCardHeader";
import PlainImageComponent from "../PlainImageComponent";

class PohjaPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      header: this.props.header,
      image: this.props.image,
      showLinks: this.props.showLinks
    };
  }

  render() {
      if(this.state.showLinks){
        return (
            <React.Fragment>
                <Card
                header={<CardTitle reveal image={this.state.image} waves="light" />}
                title={this.state.header + "(klikkaa kuvaa)"}
                reveal={
                    <p>
                    {this.state.text}
                    <a href="#">Linkki yrityksen kotisivuille</a>
                    </p>
                }
                >
                    <p>
                    <a href="#">Linkki yrityksen kotisivuille</a>
                    </p>
                </Card>
            </React.Fragment>
            )
            }else{
        return(
            <React.Fragment>
                <SmallCardHeader text={this.state.header} color={Colors.black}
                size={Sizes.small}/>
                <PlainImageComponent image={this.state.image}/>
                <CardPanelNoImage text={this.state.text}>
                </CardPanelNoImage>  

            </React.Fragment>
            )
            }     
        }
}

export default PohjaPage;
