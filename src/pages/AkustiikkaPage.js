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
class AkustiikkaPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<React.Fragment>
                <NavBarOnTheLeft navBarName="Akustiikka"/>
                <CameraButton/>
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


                {/*Tuotteet*/}
                <SmallCardHeader text={"Tuotteet"}
                color={Colors.orange}
                size={Sizes.small}
                      />
                <ProductLink text={textAssets.akustiikka.links.link1.linkHeader}
                             url={textAssets.akustiikka.links.link1.linkUrl}/>
                             
                             <ProductLink text={textAssets.akustiikka.links.link2.linkHeader}
                             url={textAssets.akustiikka.links.link2.linkUrl}/>

                             <ProductLink text={textAssets.akustiikka.links.link3.linkHeader}
                             url={textAssets.akustiikka.links.link3.linkUrl}/>              
               </React.Fragment>)
    }
}


export default AkustiikkaPage;