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
import SmallCardHeader from "./SmallCardHeader";
import Colors from "../assets/colorObject";
import ProductLink from "../ProductLink";
import Sizes from "../assets/sizes";

class MakuuhuoneetPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
            <NavBarOnTheLeft navBarName={"Makuuhuoneet"}></NavBarOnTheLeft>
                {/*Makuuhuone*/} 
                <CameraButton/>
                <PohjaPage text={textAssets.makuuhuoneet.teksti1.text}
                           header={textAssets.makuuhuoneet.teksti1.header}
                           image={imageAssets.haltiatar8356}>
                </PohjaPage>
                <CardPanelNoImage text={textAssets.makuuhuoneet.teksti8.text}/>

                 {/*Alakerran makuuhuoneet isommille lapsille*/}
                 <SmallCardHeader text={textAssets.makuuhuoneet.teksti2.header}
                 color={Colors.black}
                 size={Sizes.small}/>
 
                 <CardPanelNoImage text={textAssets.makuuhuoneet.teksti2.text}/>
                 <CardPanelNoImage text={textAssets.makuuhuoneet.teksti3.text}/>

                 <SmallCardHeader
                 text={"Tuotteet"}
                 color={Colors.orange}
                 size={Sizes.small}
               />
               {/*Alakerran makuuhuoneet isommille  lapsille- tuotteet*/}
               <ProductLink text={textAssets.makuuhuoneet.links.link1.linkHeader}
               url={textAssets.makuuhuoneet.links.link1.linkUrl}/>
               
               <ProductLink text={textAssets.makuuhuoneet.links.link2.linkHeader}
               url={textAssets.makuuhuoneet.links.link2.linkUrl}/>
     
               <ProductLink text={textAssets.makuuhuoneet.links.link3.linkHeader}
               url={textAssets.makuuhuoneet.links.link3.linkUrl}/> 

               <ProductLink text={textAssets.makuuhuoneet.links.link6.linkHeader}
               url={textAssets.makuuhuoneet.links.link6.linkUrl}/> 


                {/*Tv-Huone*/}
                <SmallCardHeader text={"Tv-Huone"}
                color={Colors.black}
                size={Sizes.small}/>
                <CardPanelNoImage text={textAssets.makuuhuoneet.teksti4.text}/>
                <CardPanelNoImage text={textAssets.makuuhuoneet.teksti9.text}/>


                {/*Yläkerran makuuhuoneet pienemmille lapsille*/}
                <SmallCardHeader text={"Yläkerran makuuhuoneet pienemmille lapsille"}
                color={Colors.black}
                size={Sizes.small}/>
                
                <PohjaPage text={textAssets.makuuhuoneet.teksti5.text}
                header={textAssets.makuuhuoneet.teksti5.header}
                image={imageAssets.haltiatar8292} />

                <CardPanelNoImage text={textAssets.makuuhuoneet.teksti6.text}/>
                <CardPanelNoImage text={textAssets.makuuhuoneet.teksti7.text}/>
                {/*Yläkerran makuuhuoneet pienemmille lapsille tuotteet*/}
                <SmallCardHeader
                text={"Tuotteet"}
                color={Colors.orange}
                size={Sizes.small}
              />

              <ProductLink text={textAssets.makuuhuoneet.links.link4.linkHeader}
              url={textAssets.makuuhuoneet.links.link4.linkUrl}/>
              
              <ProductLink text={textAssets.makuuhuoneet.links.link5.linkHeader}
              url={textAssets.makuuhuoneet.links.link5.linkUrl}/>


              {/*Toiminallisuus*/}
              <SmallCardHeader text={"Toiminnallisuus"}
              color={Colors.black}
              size={Sizes.small}/>
              
              <CardPanelNoImage text={textAssets.toiminnallisuus.teksti1.text}/>
              <CardPanelNoImage text={textAssets.toiminnallisuus.teksti2.text}/>
              <ProductLink text="Lue lisää aistileluista"
              url="/portaat#"/>
                {/*Luova Tila*/}

              <SmallCardHeader text={"Luova tila"}
              color={Colors.black}
              size={Sizes.small}/>


                <CardPanelNoImage text={textAssets.luovatila.teksti1.text}/>
                <CardPanelNoImage text={textAssets.luovatila.teksti2.text}/>

              {/*Toiminallisuus-tuotteet*/}
              <SmallCardHeader
              text={"Tuotteet"}
              color={Colors.orange}
              size={Sizes.small}
                />



            <ProductLink text={textAssets.toiminnallisuus.links.link1.linkHeader}
            url={textAssets.toiminnallisuus.links.link1.linkUrl}/>


            </React.Fragment>);
    }
}
export default MakuuhuoneetPage;