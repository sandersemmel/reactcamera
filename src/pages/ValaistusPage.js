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

class ValaistusPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (<React.Fragment>
            <CameraButton/>
            <PohjaPage teksti={textAssets.valaistus.teksti1} otsikko="Kuuvalaisin" image={imageAssets.haltiatar8171} showLinks={false}>
            </PohjaPage>
            <PohjaPage teksti={textAssets.valaistus.teksti2} otsikko="Valaistus" image={imageAssets.haltiatar8394} showLinks={false}>
            </PohjaPage>
            <PohjaPage teksti={textAssets.valaistus.teksti2} otsikko="Valaistus" image={imageAssets.haltiatar8327} showLinks={false}>
            </PohjaPage>



                </React.Fragment>)
    }
}
export default ValaistusPage;