import Portaat from "../kohteet/portaat.js";
import PortaidenAlla from "../kohteet/portaidenalla.js";
import React from "react";
import ReactDOM from "react-dom";
import CameraButton from "../cameraButton.js"

class PortaatPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<React.Fragment>
                    
                    <CameraButton/>
                    <br/>
                    <br/>
                    <br/>
                    <Portaat/>
                    <PortaidenAlla/>
                </React.Fragment>)
    }
}
export default PortaatPage; 