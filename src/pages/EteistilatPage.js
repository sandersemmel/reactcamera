import React from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import {Button, Icon, Navbar, Card, CardTitle} from "react-materialize";
import CameraButton from "../cameraButton.js";
import KeittionKaappi from "../kohteet/keittionKaappi.js";
import NavBarOnTheLeft from "../navigationBar.js";

/*Eteistilat*/
var eteistilatOtsikko = "Eteistilat";
var eteistilat = "Eteinen on rajattu omaksi tilakseen valaistuksen avulla. Käytävävalot päättyvät tiettyyn kohtaan, jonka jälkeen eteisessä on oma valaistuksensa. Myös maton pyöristetty leikkaus rajaa alueen ja korostaa eteistä omana erillisenä tilanaan. Näin esimerkiksi lasten on helpompi hahmottaa, mihin asti voi mennä ulkokengillä. Pyöreät, silmän luonnollista liikettä mukailevat muodot tukevat aistiesteettömyyttä. Eteisen matoilla on myös akustoiva merkitys, sillä matot vaimentavat kengistä tulevia ääniä.Eteiskäytävän seinissä ovat CLT-puuta. Tutkimusten mukaan käyttämällä puupintoja sisutuksessa voidaan selvästi lisätä ihmisten hyvinvointia. Puu materiaalina rauhoittaa monin tavoin ihmisen elimistöä, se muun muassa vähentää stressihormonien määrää ja alentaa verenpainetta. Puun tuoksun kautta vapautuu sisäilmaa parantavaa vaikutusta omaavia antibakteerisia ainesosia. Eteisessä on peili, mutta peilin sijoittamisessakin on toimittu aistiesteettömästi. Peilin osalta on mietitty sitä, mistä valo tulee, ettei valonlähde (esimerkiksi auringonvalo) heijastu suoraan peilistä ja häikäise käyttäjäänsä. Peili ei sijaintinsa vuoksi myöskään peilaa tilaa uudelleen, esimerkiksi siten, että käytävä näyttäisi kaksi kertaa pidemmältä.";
var eteistilatLiukuovikaappiUrl = "http://www.puustelli.fi/puustelli-group-oy/suomalaisia-laatukeittioita-jokaiselle";
/**Säilytystilat */
var sailytystilatOtsikko = "Sailytystilat";
var sailytystilat = "Koska lastenhuoneet ovat tarkoituksella melko pieniä, niihin ei tule omaa vaatesäilytystä. Perhe on kuitenkin halunnut panostaa hyvään ja toimivaan vaatehuoltojärjestelmään. Pyykit pestään ja kuivataan kodinhoitotiloissa, josta on helposti pääsy vaatesäilytykseen. Urheiluvälineille on omat säilytystilansa, mikä on tärkeää paljon urheilevan ja harrastavan, kuusihenkisen perheen arjessa. Myös pukeutumistila omana yksikkönään helpottaa arjen sujumista, kun suihkutilojen yhteydessä on vaatesäilytys ja pukeutumistilat. Osassa alakerran kaapistoista on sisällä valaistus, joka helpotta tavaroiden löytämistä ja lisää käyttömukavuutta. Vaikka talo Haltiattaressa on panostettu hyvään yleisvalaistukseen, se ei toimi tässä kohtaa, sillä yleensä ihminen seisoo kaapin edessä estäen valon pääsyn kaappiin. Joissakin kaapeissa on myös kuvia, jotka kertovat esimerkiksi lapsille, missä mitäkin säilytetään. Tämä auttaa lapsia osaltaan myös omatoimisuudessa. ”Kaikelle on paikkansa” -tyyppinen ajattelu on tärkeä osa aistiesteettömyyttä. Näin pienikin lapsi tietää, mistä löytää omat tavaransa, ja tietää myös, mihin ne kuuluu laittaa takaisin.";

class EteisTilatPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<React.Fragment>
                <NavBarOnTheLeft/>
                <CameraButton/>
                <br/>
                <br/>
                <br/>
                <Card   header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light' />}
                        title={eteistilatOtsikko}
                        reveal={<p>{eteistilat}
                                    <p><a href={eteistilatLiukuovikaappiUrl}>Eteisen liukuovikaappi Puustellin</a></p>
                               </p>}>
                </Card>

                <Card   header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light' />}
                        title={sailytystilatOtsikko}
                        reveal={<p>{sailytystilat}</p>}>
                </Card>
             </React.Fragment>   
            )
    }
}

export default EteisTilatPage;