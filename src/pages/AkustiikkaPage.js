import React from "react";
import ReactDOM from "react-dom";
import Kohde from '../kohteet/kohde.js'
import PohjaPage from "./PohjaPage.js"


class AkustiikkaPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<React.Fragment>
                    <PohjaPage/>
                    <Kohde/>  
               </React.Fragment>)
    }
}


export default AkustiikkaPage;