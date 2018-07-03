import Portaat from "../kohteet/portaat.js";
import PortaidenAlla from "../kohteet/portaidenalla.js";
import React from "react";
import ReactDOM from "react-dom";
import CameraButton from "../cameraButton.js"
import CardPanelNoImage from "./CardPanelNoImage";
import SmallCardHeader from "./SmallCardHeader";
import textAssets from "../assets/textAssets";
import imageAssets from "../assets/imageAssets";
import Colors from "../assets/colorObject";
import NavBarOnTheLeft from "../navigationBar";
import Sizes from "../assets/sizes";
import PohjaPage from "./PohjaPage";


class PortaatPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<React.Fragment>
                    <NavBarOnTheLeft navBarName="Portaat ja maja"/>                    
                    <CameraButton/>
                    <SmallCardHeader text={"Portaikko"}
                    color={Colors.black}
                    sizes={Sizes.small}
                    />
                    <CardPanelNoImage text={textAssets.portaat.teksti1.text}>
                    </CardPanelNoImage>


                    {/*Portaiden alla oleva maja*/}

                   <SmallCardHeader text={"Portaiden alla oleva maja"}
                        color={Colors.black}
                        size={Sizes.small}/>

                    <CardPanelNoImage text={textAssets.portaat.teksti2.text}>
                    </CardPanelNoImage>

            


                    {/*Aistilelut*/}
                    <SmallCardHeader text={"Majan aistilelu"}
                        color={Colors.black}/>
                    
                    <CardPanelNoImage text={textAssets.aistilelut.teksti1.text}>
                    </CardPanelNoImage>
                    <SmallCardHeader text={textAssets.aistilelut.teksti2.header}
                    color={Colors.black}
                    sizes={Sizes.small}
                    />
                    <CardPanelNoImage text={textAssets.aistilelut.teksti2.text}>
                    </CardPanelNoImage>
                    <SmallCardHeader text={textAssets.aistilelut.teksti3.header}
                    color={Colors.black}
                    sizes={Sizes.small}
                    />
                    <CardPanelNoImage text={textAssets.aistilelut.teksti3.text}>
                    </CardPanelNoImage>
                    <SmallCardHeader text={textAssets.aistilelut.teksti4.header}
                    color={Colors.black}
                    sizes={Sizes.small}
                    />
                    <CardPanelNoImage text={textAssets.aistilelut.teksti4.text}>
                    </CardPanelNoImage>
                    <SmallCardHeader text={textAssets.aistilelut.teksti5.header}
                    color={Colors.black}
                    sizes={Sizes.small}
                    />
                    <CardPanelNoImage text={textAssets.aistilelut.teksti5.text}>
                    </CardPanelNoImage>
                    <SmallCardHeader text={textAssets.aistilelut.teksti6.header}
                    color={Colors.black}
                    sizes={Sizes.small}
                    />
                    <CardPanelNoImage text={textAssets.aistilelut.teksti6.text}>
                    </CardPanelNoImage>
                </React.Fragment>)
    }
}
export default PortaatPage; 