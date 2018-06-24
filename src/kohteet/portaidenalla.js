import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";



var teksti = "Portaat ovat CLT-elementistä, tyylikkäät ja yksinkertaiset. Portaikossa on ikkunat, mutta ne eivät yksin takaa riittävää valaistusta pimeämpinä vuodenaikoina. Aistiesteettömässä suunnittelussa on siis pysähdytty portaiden riittävään valaistukseen. Käsijohteen alla oleva epäsuora valo ei herätä paljon huomiota, mutta tuo käyttöystävällisyyttä. Portaat ovat paikka, joka vaatii ihmiseltä syvyyden hahmottamista.  Portaiden etupinnassa on hahmottamista tukevat karheat kontrastiraidat, ne tosin eivät nyt messujen aikana ole näkyvissä. Kontrastiraidat ovat tuntoaistia stimuloivia, antavat taas erilaisen pinnan tuntua ja virikkeitä tuntoaistille.";



class PortaidenAlla extends React.Component{
    constructor(props){
        super(props);
        this.state= {teksti: "Pesämäinen maja on tila, joka mahdollistaa rauhoittumisen ja vetäytymisen omaan pieneen tilaan. Aistiesteettömyyteen kuuluu kuormituksen purkaminen sekä mahdollisuus vetäytyä omaan rauhaan. Majaan on tuotu erilaisia materiaaleja, jotka haastavat tunto-, näkö- ja kuuloaistia. Tilassa on tyynyjä, harsoja, ja muita tuntoaistia stimuloivia materiaaleja. Lisäksi hämyisä valaistus ja rauhoittava musiikki tuovat majaan satumaista tunnelmaa. Erityisesti tuntoaistimuksilla saa kokemuksia omasta kehosta ja sen rajoista. Kehoon kohdistuvien aistimusten kautta ihminen hahmottaa oman kehonsa ja sen ääriviivat, ja kokee myös lihasten ja luuston olemassaolon ja toiminnan.",
                    otsikko: "Portaiden alla oleva satumainen maja",
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

export default PortaidenAlla;