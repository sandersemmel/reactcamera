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

class CardPanelNoImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text,
            color: this.props.color
        }
    }
    componentDidMount(){
        console.log(this.state.color);
    }
    render(){
        return(<React.Fragment>
                <CardPanel className={this.state.color}>
                <span>{this.state.text}</span>
                </CardPanel>
            </React.Fragment>

        )
    }
}

export default CardPanelNoImage;    