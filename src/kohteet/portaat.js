import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";
import suihkulahde from "../kuvat/suihkulahde.jpg"


var teksti = "Portaat ovat CLT-elementistä, tyylikkäät ja yksinkertaiset. Portaikossa on ikkunat, mutta ne eivät yksin takaa riittävää valaistusta pimeämpinä vuodenaikoina. Aistiesteettömässä suunnittelussa on siis pysähdytty portaiden riittävään valaistukseen. Käsijohteen alla oleva epäsuora valo ei herätä paljon huomiota, mutta tuo käyttöystävällisyyttä. Portaat ovat paikka, joka vaatii ihmiseltä syvyyden hahmottamista.  Portaiden etupinnassa on hahmottamista tukevat karheat kontrastiraidat, ne tosin eivät nyt messujen aikana ole näkyvissä. Kontrastiraidat ovat tuntoaistia stimuloivia, antavat taas erilaisen pinnan tuntua ja virikkeitä tuntoaistille.";



class Portaat extends React.Component{
    constructor(props){
        super(props);
        this.state= {teksti: "Portaat ovat CLT-elementistä, tyylikkäät ja yksinkertaiset. Portaikossa on ikkunat, mutta ne eivät yksin takaa riittävää valaistusta pimeämpinä vuodenaikoina. Aistiesteettömässä suunnittelussa on siis pysähdytty portaiden riittävään valaistukseen. Käsijohteen alla oleva epäsuora valo ei herätä paljon huomiota, mutta tuo käyttöystävällisyyttä. Portaat ovat paikka, joka vaatii ihmiseltä syvyyden hahmottamista.  Portaiden etupinnassa on hahmottamista tukevat karheat kontrastiraidat, ne tosin eivät nyt messujen aikana ole näkyvissä. Kontrastiraidat ovat tuntoaistia stimuloivia, antavat taas erilaisen pinnan tuntua ja virikkeitä tuntoaistille.",
                    otsikko: "Portaat",
                    image: ""} 
    }
    render(){
        return(  <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light'/>}
                       title={this.state.otsikko}
                       reveal={<p>{this.state.teksti}
                           <p><a href="#">Linkki yrityksen kotisivuille</a></p>
                       </p>}>

            <p><a href="#">Linkki yrityksen kotisivuille</a></p>
        </Card>)
    }
}

export default Portaat;