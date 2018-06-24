import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";


class Valaistus2 extends React.Component{
    constructor(props){
        super(props);
        this.state= {teksti: "Kohteen sisustusratkaisuissa painotetaan epäsuoraa valaistusta, jolloin valo voidaan esimerkiksi suunnata tulemaan seinän kautta. Valaisinten valinnassa suositaan valaisimia, joissa valonlähde on piilossa. Näin pyritään välttämään valaisimen tuottamaa häikäisyä. Lisäksi kodin valaistuksessa pyritään saman sävyiseen valaistukseen, sillä valosävyjen vaihtelu on epämiellyttävää. Valaistusratkaisuilla on myös erotettu tiloja toisistaan. Esimerkiksi alakerran eteinen erottuu käytävästä erilliseksi tilaksi muun muassa valaistuksen keinoin.Yläkerran toinen seinä on lähes kokonaan ikkunaa. Samaisella seinustalla oleva sisäänvedetty parveke kuitenkin taittaa kauniisti sisään tulevan luonnonvalon. Koti onkin hyvin valoisa kokonaisuus ilman häikäisyä. Hyvä valaistus on keskeinen osa aistiesteettömyyttä. Se vaikuttaa yleiseen vireystilaan, viihtyvyyteen, turvalliseen liikkumiseen ja auttaa suoriutumaan arjen tehtävistä. Vääränlainen valo taas voi aiheuttaa esimerkiksi väsymystä ja päänsärkyä. Aistiesteettömässä kodissa puhutaankin ergonomisesta valaistuksesta.",
                    otsikko: "Epäsuora valaistus",
                    image: ""} 
    }
    render(){
        return(  <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light'/>}
                       title={this.state.otsikko}
                       reveal={<p>{this.state.teksti}</p>}>
        </Card>)
    }
}
export default Valaistus2;