import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";
import CameraButton from "../cameraButton.js";
import {noimagex} from "../kuvat/noimage.gif";

class PohjaPage extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {teksti: "teksti",
                      otsikko: "otsikko",
                      image: require("../kuvat/noimage.gif")
                }
    }
    componentWillReceiveProps(){
        this.state =  {teksti : this.props.teksti,
                        otsikko: this.props.otsikko,
                        image: this.props.imageUrl
        }
    }
    render() {
        return (<React.Fragment>
            <CameraButton/>
            <Card header={<CardTitle reveal image={this.state.image} waves='light'/>}
                       title={this.state.otsikko}
                       reveal={<p>{this.state.teksti}<a href="#">Linkki yrityksen kotisivuille</a></p>}>

                    <p><a href="#">Linkki yrityksen kotisivuille</a></p>
            </Card>
        </React.Fragment>)
    }
}


export default PohjaPage;