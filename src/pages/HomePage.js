import React from "react";
import ReactDOM from "react-dom";
import Valaistus from "../kohteet/valaistus.js";
import Valaistus2 from "../kohteet/valaistus2.js";
import CameraButton from "../cameraButton.js";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";
import PohjaPage from "./PohjaPage";
import cameraButton from "../cameraButton.js";
import imageAssets from "../assets/imageAssets.js";
import textAssets from "../assets/textAssets.js";
import SmallCardHeader from "./SmallCardHeader";
import Colors from "../assets/colorObject";
import {BrowserView, isBrowser, isMobile} from 'react-device-detect';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(isMobile){
            return (
                <React.Fragment>
                    <CameraButton/>
                    <br/>
                    <SmallCardHeader text={"1. Käynnistä QR-koodinlukija ylhäällä olevasta napista"}
                                     color={Colors.green}/>
    
                    <SmallCardHeader text={"2. Salli laitteen käyttää kameraa."}/>
    
                    <SmallCardHeader text={"3. Kohdista puhelimen kamera QR-koodin kohdalle"}
                    color={Colors.green} />
                </React.Fragment>);
        }else{
            return(window.location.replace("https://www.haltiatar.xyz/kohteet"))
        }
    }
}
export default HomePage;