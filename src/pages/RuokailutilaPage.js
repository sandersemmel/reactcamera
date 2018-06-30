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
import CardPanelNoImage from "./CardPanelNoImage";
import NavBarOnTheLeft from "../navigationBar";
import Colors from "../assets/colorObject";
import SmallCardHeader from "./SmallCardHeader";
import Sizes from "../assets/sizes";
import ProductLink from "../ProductLink";

class RuokailuTilaPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
            <NavBarOnTheLeft navBarName={"Ruokailutila"}></NavBarOnTheLeft>
                <CameraButton/>
                <PohjaPage text={textAssets.ruokailutila.teksti1.text}
                           header={textAssets.ruokailutila.teksti1.header}
                           image={imageAssets.haltiatar8333}>
                </PohjaPage>

                <SmallCardHeader
                text={"Ruokapöytä"}
                color={Colors.black}
                size={Sizes.small}
              />

                <CardPanelNoImage text={textAssets.ruokailutila.teksti2.text}>
                </CardPanelNoImage>
                
                
                <SmallCardHeader
                text={"Kattaus"}
                color={Colors.black}
                size={Sizes.small}
              />
                <CardPanelNoImage text={textAssets.ruokailutila.teksti3.text}>
                </CardPanelNoImage>
                
                {/*Tuotteet*/}
                <SmallCardHeader
                text={"Tuotteet"}
                color={Colors.orange}
                size={Sizes.small}
              />
              <ProductLink text={textAssets.ruokailutila.links.link1.linkHeader}
              url={textAssets.ruokailutila.links.link1.linkUrl}/>
              
              <ProductLink text={textAssets.ruokailutila.links.link2.linkHeader}
              url={textAssets.ruokailutila.links.link2.linkUrl}/>

              <ProductLink text={textAssets.ruokailutila.links.link3.linkHeader}
              url={textAssets.ruokailutila.links.link3.linkUrl}/>
              
              <ProductLink text={textAssets.ruokailutila.links.link4.linkHeader}
              url={textAssets.ruokailutila.links.link4.linkUrl}/>

              {/*Olohuone*/}
              <SmallCardHeader text={"Olohuone"} color={Colors.orange}>
              </SmallCardHeader>
              
              <PohjaPage text={textAssets.olohuone.teksti1.text}
                         header={textAssets.olohuone.teksti1.header}
                         image={imageAssets.haltiatar8164}>
              </PohjaPage>

              <PohjaPage text={textAssets.olohuone.teksti2.text}
                          header={textAssets.olohuone.teksti2.header}
                          image={imageAssets.haltiatar8365}>
              </PohjaPage>

              {/*OlohuoneTuotteet*/}
              
            <SmallCardHeader
            text={"Tuotteet"}
            color={Colors.orange}
            size={Sizes.small}
          />
          <ProductLink text={textAssets.olohuone.links.link1.linkHeader}
          url={textAssets.olohuone.links.link1.linkUrl}/>
          
          <ProductLink text={textAssets.olohuone.links.link2.linkHeader}
          url={textAssets.olohuone.links.link2.linkUrl}/>

          <ProductLink text={textAssets.olohuone.links.link3.linkHeader}
          url={textAssets.olohuone.links.link3.linkUrl}/>     

          <ProductLink text={textAssets.olohuone.links.link4.linkHeader}
          url={textAssets.olohuone.links.link4.linkUrl}/>  

          <ProductLink text={textAssets.olohuone.links.link5.linkHeader}
          url={textAssets.olohuone.links.link5.linkUrl}/>  



              
              {/*Ruokailutila*/}

              <SmallCardHeader text={"Ruokailutila"} color={Colors.orange}>
              </SmallCardHeader>

              <PohjaPage text={textAssets.ruokailutila.teksti1.text}
              header={textAssets.ruokailutila.teksti1.header}
              image={imageAssets.haltiatar8333}>
              </PohjaPage>

              <SmallCardHeader text={textAssets.ruokailutila.teksti2.header}
                               size={Sizes.small}
                               color={Colors.black}>
              </SmallCardHeader>
              <CardPanelNoImage text={textAssets.ruokailutila.teksti2.text}
                                  color={Colors.grey3}>
              </CardPanelNoImage>
              
              <SmallCardHeader text={textAssets.ruokailutila.teksti3.header}
              size={Sizes.small}
              color={Colors.black}>
              </SmallCardHeader>
              <CardPanelNoImage text={textAssets.ruokailutila.teksti3.text}
                                  color={Colors.grey3}>
              </CardPanelNoImage>
                
              {/*Lukunurkkaus*/}

              <SmallCardHeader text={"Lukunurkkaus"} color={Colors.orange}>
              </SmallCardHeader>
              
              <PohjaPage text={textAssets.lukunurkkaus.teksti1.text}
              header={textAssets.lukunurkkaus.teksti1.header}
              image={imageAssets.haltiatar8171}>
              </PohjaPage>
              {/*Lukunurkkaus tuotteet*/}

              <SmallCardHeader
              text={"Tuotteet"}
              color={Colors.orange}
              size={Sizes.small}
            />
            <ProductLink text={textAssets.lukunurkkaus.links.link1.linkHeader}
            url={textAssets.lukunurkkaus.links.link1.linkUrl}/>
            
            <ProductLink text={textAssets.lukunurkkaus.links.link2.linkHeader}
            url={textAssets.lukunurkkaus.links.link2.linkUrl}/>


            </React.Fragment>);
    }
}
export default RuokailuTilaPage;