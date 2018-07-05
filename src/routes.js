import React from "react";
import ReactDOM from "react-dom";
import AkustiikkaPage from "./pages/AkustiikkaPage";
import EteisTilatPage from "./pages/EteistilatPage";
import KylpyhuonePage from "./pages/KylpyhuonePage";
import MakuuhuoneetPage from "./pages/MakuuhuoneetPage";
import PortaatPage from "./pages/PortaatPage";
import RuokailutilaPage from "./pages/RuokailutilaPage";
import SaunaPage from "./pages/SaunaPage";
import TyotilatPage from "./pages/TyotilaPage";
import UlkotilatPage from "./pages/UlkotilatPage";
import ValaistusPage from "./pages/ValaistusPage";
import KeittioPage from "./pages/KeittioPage"
import KohteetPage from "./pages/KohteetPage"
import SadonkorjuuParvekePage from "./pages/SadonkorjuuParvekePage";
import SailytystilatPage from "./pages/SailytystilatPage";
import ToiminnallisuusPage from "./pages/ToiminnallisuusPage";
import WcPage from "./pages/WcPage";

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {BrowserView, isBrowser, isMobile} from 'react-device-detect';
import OlohuonePage from "./pages/OlohuonePage";
import HomePage from "./pages/HomePage";
import LuovaTilaPage from "./pages/LuovaTilaPage";
import Footer from "react-materialize/lib/Footer";
import ImageAssets from "./assets/imageAssets";
import FooterComponent from "./FooterComponent";
import ProductButton from "./ProductButton";

class TestRoutes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/akustiikka' component={AkustiikkaPage}/>
                    <Route path='/keittio' component={KeittioPage}/>
                    <Route path='/kohteet' component={KohteetPage}/>
                    <Route path="/portaat" component={PortaatPage}/>
                    <Route path="/valaistus" component={ValaistusPage}/>
                    <Route path="/eteinen" component={EteisTilatPage}/>
                    <Route path="/sadonkorjuu" component={SadonkorjuuParvekePage}/>
                    <Route path="/sailytys" component={SailytystilatPage}/>
                    <Route path="/kylpyhuone" component={KylpyhuonePage}/>
                    <Route path="/sauna" component={SaunaPage}/>
                    <Route path="/ruokailu" component={RuokailutilaPage}/>
                    <Route path="/olohuone" component={OlohuonePage}/>
                    <Route path="/makuuhuoneet" component={MakuuhuoneetPage}/>
                    <Route path="/toiminnallisuus" component={ToiminnallisuusPage}/>
                    <Route path="/wc" component={WcPage}/>
                    <Route path="/luovatila" component={LuovaTilaPage}/>
                </Switch>
            </BrowserRouter>
            <FooterComponent/>
        </React.Fragment>);
    }
}

export default TestRoutes;