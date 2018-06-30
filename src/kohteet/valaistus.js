import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";
import suihkulahde from "../kuvat/suihkulahde.jpg"


class Valaistus extends React.Component{
    constructor(props){
        super(props);
        this.state= {teksti: "Messukohteessa suositaan säädettävää valaistusta. Toisinaan valaistukselta vaaditaan enemmän tehoa, esimerkiksi helpottamaan siivousta. Kuitenkin myös himmennysmahdollisuus on tärkeää, sillä aistiesteettömässä asumisessa mahdollisuus luoda erityyppistä tunnelmaa on keskeistä. Valaistuksessa on suosittu isoja valaisimia, sillä ne tuottavat valoa, josta ei tule juurikaan varjoja, toisin kuin pienistä valaisimista.",
                    otsikko: "Valaistus",
                    image: ""} 
    }
    render(){
        return(  <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light'/>}
                       title={this.state.otsikko}
                       reveal={<p>{this.state.teksti}</p>}>

        </Card>)
    }
}
export default Valaistus;