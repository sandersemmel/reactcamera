import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";

/*Keittiön Kaapit*/ 
var keittionKaapitOtsikko = "Keittion Kaapit"
var keittionKaapit =  "Keittiön kaapit ovat hajusteettomat ja mattapintaiset. Koko kodissa on muutenkin vältetty kiiltäviä pintoja, jotka luovat ikäviä heijastumia. Keittiön tiilenvärinen laatta erottaa keittiön omaksi tilakseen, mikä tukee aistiesteetöntä ajatusta ”tilan sisällä monta tilaa”.  Tiilen värinen laatta-alue on yksi talon väripilkuista. Tällaiset selvät kontrastit tukevat aistiesteettömyyttä, sillä ne helpottavat tilojen hahmottamista. Tarkoin valittujen väripilkkujen vuoksi kodin pehmeät värit pääsevät oikeuksiinsa, sillä liian yksipuolinen värimaailmakaan ei ole aisteille hyväksi. Laattalattiaa saatetaan pitää aistiesteettömyyden näkökulmasta hieman kylmänä ja kovana materiaalina. Siksi se onkin rajattu vain pienelle alueelle. Laattalattia keittiössä on myös tietoinen valinta, sillä kyse on 4-lapsisen perheen kodista, jossa pienet käsiparit haluavat olla avuksi ja laattalattia kestää hyvin esimerkiksi kosteutta.";
var kaapistotUrl = "http://www.puustelli.fi/mallisto/keittiot";
var cafeValaisinUrl = "http://www.innolux.fi/fi/valaisin/riippuvalaisin/cafe-240-kupari-ja-musta-2015";
var mrWatsonValaisinUrl = "http://verkkokauppa.anttiairio.fi/verkkokauppa/index.tmpl?sivu_id=755;id=35954;left=true;wslevel=2";



/*Keittiön Allas*/ 
var keittionAllasOtsikko = "Keittiön allas"
var keittionAllas = "Keittiön allas erottuu väriltään mustasta kivitasosta, jolloin allas on helppo hahmottaa.  Kivitaso on mattaa, se ei synnytä heijastumia, ja on näköaistille ystävällinen. Keittiön hanan kahva on musta, joka osaltaan helpottaa hahmottamista. Liesituuletin on väriltään mattamusta, jolloin sen huomioiminen on helppoa. Tumma liesituuletin on hahmottavuudeltaan parempi vaihtoehto kuin lasinen läpinäkyvä, johon saattaa epähuomiossa törmätä. Liesituuletin on mattaa pinnaltaan. Kuusihenkisen perheen arjen sujuvuutta helpottamaan on keittiöön asennettu kaksi astianpesukonetta. Arjen toimivuuden kannalta niissä on merkit, joista tietää, onko koneessa likaiset vai puhtaat astiat. Kaikenlainen arjen toimivuuden parantaminen ehkäisee ihmisen kuormittumista, oli kyse kuinka pieniltä vaikuttavista asioista tahansa. Keittiön laatikostossa olevat huovutetut aterinlaatikot estävät puolestaan aterimista tulevaa kilinää.";

/*Saareke*/
var saareke = "Saarekkeen päällä valaisimet ovat häikäisysuojatut, ja valittu valaistus on riittävää ja tasaista. Keittiön päätyikkunan edessä olevat valaisimet puolestaan ehkäisevät näkyvyyttä ulkoa sisälle. Ulkoa katsottuna näkyy heti ikkunan edessä olevat valaisimet, ei juurikaan sen pidemmälle. Myös tällainen intimiteetin huomioiminen on aistiesteetöntä ajattelua.";


/*Sadonkorjuuparveke*/ 
var sadonkorjuuParvekeOtsikko = "Sadonkorjuuparveke";
var sadonkorjuuParveke = "Vehreyden näkeminen alentaa tutkitusti stressihormoneja sekä laskee sykettä. Näin ollen vihersisustaminen on tärkeä osa aistiesteetöntä sisustamista. Toisen kerroksen yhteydessä on sadonkorjuuparveke. Parvekkeelle on tarkoitus istuttaa erilaisia yrttejä, vihanneksia, mansikoita ynnä muuta, ja sen ideana on myös vehreyden näkyminen ja heijastuminen sisätiloihin. Myös saunan ja autotallin viherkatot näkyvät hyvin yhteisiin tiloihin, joiden suuret ikkunat avautuvat sisäpihalle. Puuttuva kasvillisuus on siis negatiivinen aistiärsyke. Tutkimukset osoittavat, että luonnon läheisyys lisää onnellisuutta ja vähentää sairastuvuutta. Viherkasvit kuuluvatkin vahvasti aistiesteettömään asumiseen; luonnon näkeminen vaikuttaa rauhoittavasti ja tasapainottaa kiireisen arjen keskellä.";

class KeittionKaappi extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){return (<React.Fragment>
        <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light' />}
            title={keittionKaapitOtsikko}
            reveal={<p>{keittionAllas}
                <p><a href={kaapistotUrl}>Keittiön kaapistot Puustellin</a></p>
                <p><a href={cafeValaisinUrl}>Cafe-valaisin</a></p>
                <p><a href={mrWatsonValaisinUrl}>Mr Watson valaisin</a></p>
            </p>}>          
        </Card>
        
        <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light' />}
        title={keittionAllasOtsikko}
        reveal={<p>{keittionAllas}
                    <p><a href="#">Linkki yrityksen kotisivuille</a></p>
                </p>}>
        </Card>

        <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light' />}
        title={sadonkorjuuParvekeOtsikko}
        reveal={<p>{sadonkorjuuParveke}
                    <p><a href="#">Linkki yrityksen kotisivuille</a></p>
                </p>}>
        </Card>
    
    
    
    </React.Fragment>)
    }
}
export default KeittionKaappi;