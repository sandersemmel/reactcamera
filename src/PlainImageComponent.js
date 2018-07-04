import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer, Chip, CardPanel} from "react-materialize";
import ImageAssets from "./assets/imageAssets";

class PlainImageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            image: this.props.image
        })
    }
    redirect(){

    }
    render() {
        return (
            <React.Fragment>
                <div className={"imageBox"}>
                    <img className={"imageTag"}src={this.state.image}></img>
                </div>
                
            </React.Fragment>)
    }
}
export default PlainImageComponent;