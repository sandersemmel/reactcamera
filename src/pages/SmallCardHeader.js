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

class SmallCardHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text,
            color: this.props.color,
            size: this.props.size
        }
    }
    componentDidMount(){
        console.log(this.state.color);
    }
    render(){
        if(this.state.size == sizes.small){
            return(<React.Fragment>
                <CardPanel className={this.state.color}>
                <h6><center>{this.state.text}</center></h6>
                </CardPanel>
                </React.Fragment>)
        }else{
            
            return(<React.Fragment>
                <CardPanel className={this.state.color}>
                <h5><center>{this.state.text}</center></h5>
                </CardPanel>
            </React.Fragment>

        )
        }

    }
}

export default SmallCardHeader;    