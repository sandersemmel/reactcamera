import React from "react";
import ReactDOM from "react-dom";
import Kohde from '../kohteet/kohde.js'
import PohjaPage from "./PohjaPage.js"
import imageAssets from "../assets/imageAssets";
import textAssets from "../assets/textAssets";
import CardPanel from "react-materialize/lib/CardPanel";
import CameraButton from "../cameraButton";
import CardPanelNoImage from "../pages/CardPanelNoImage";
import Colors from "../assets/colorObject";
import NavBarOnTheLeft from "../navigationBar";
import SmallCardHeader from "./SmallCardHeader";
import Sizes from "../assets/sizes";
import ProductLink from "../ProductLink";
import LinksComponent from "../LinksComponent.js";
import { Card, CardTitle } from "react-materialize";
class AkustiikkaPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<React.Fragment>
                <NavBarOnTheLeft navBarName="Akustiikka"/>
                <CameraButton/>
                <SmallCardHeader text={"Akustiikka ja hyvinvointi"}
                                  color={Colors.black}
                                  size={Sizes.small}
                                        />
                
                <PohjaPage text={textAssets.akustiikka.teksti1.text} image={imageAssets.haltiatar8273} header={textAssets.akustiikka.teksti1.header}>
                
                </PohjaPage>
                <PohjaPage text={textAssets.akustiikka.teksti2.text} image={imageAssets.haltiatar8448} header={textAssets.akustiikka.teksti2.header}>
                
                </PohjaPage>

                <SmallCardHeader text={"Puun käyttö"}
                                  color={Colors.black}
                                  size={Sizes.small}
                                        />
                <CardPanelNoImage text={textAssets.akustiikka.teksti3.text} />
                

                <SmallCardHeader text={"Äänieristys"}
                                  color={Colors.black}
                                  size={Sizes.small}
                                        />
                <CardPanelNoImage text={textAssets.akustiikka.teksti4.text} />

                <SmallCardHeader text={"Huoneiden sijoittelu"}
                                  color={Colors.black}
                                  size={Sizes.small}
                                        />
                <CardPanelNoImage text={textAssets.akustiikka.teksti5.text} />

                <LinksComponent amountOfLinks={"3"} links={textAssets.akustiikka.links}>
                
                </LinksComponent>            
               </React.Fragment>)
    }
}


export default AkustiikkaPage;