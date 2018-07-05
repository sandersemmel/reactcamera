import React from "react";
import ReactDOM from "react-dom";
import {Button, Toast} from "react-materialize";
import CameraButton from "../cameraButton.js";
import NavBarOnTheLeft from "../navigationBar.js";
import paths from "../assets/paths";


class Kohteet extends React.Component{
    constructor(props){
        super(props);
        this.state = {navBarName: "Kohteet"}
    }

    render(){
        return(<React.Fragment>
                <NavBarOnTheLeft navBarName={this.state.navBarName}/>
                <CameraButton/> 
                <br/>
                <a href={paths.akustiikka}>   <Button className={"kohteetButton"} >{"Akustiikka"}</Button></a>
                <br/>
                <a href={paths.eteinen}><Button className={"kohteetButton"} >{"Eteistilat"} </Button></a>
                <br/>      
                <a href={paths.keittio}>  <Button className={"kohteetButton"} >{"Keittio"}</Button></a>
                <br/>
                <a href={paths.kylpyhuone}><Button className={"kohteetButton"} >{"Kylpyhuone"}</Button></a>
                <br/>
                <a href={paths.makuuhuoneet}><Button className={"kohteetButton"} href={paths.makuuhuoneet}>{"Makuuhuoneet"}</Button></a>
                <br/>
                <a href={paths.portaat}><Button className={"kohteetButton"}>{"Portaat"}</Button></a>
                <br/>
                <a href={paths.ruokailu}><Button className={"kohteetButton"} >{"Ruokailutila"}</Button></a>
                <br/>
                <a href={paths.sauna}><Button className={"kohteetButton"} href={paths.sauna}>{"Sauna"}</Button></a>
                <br/>
                <a href={paths.valaistus}><Button className={"kohteetButton"} href={paths.valaistus}>{"Valaistus"}</Button></a>
                <br/>
                <a href={paths.wc}><Button className={"kohteetButton"} href={paths.wc}>{"Wc"}</Button></a>
                <br/>
                <a href={paths.toiminnallisuus}><Button className={"kohteetButton"} href={paths.toiminnallisuus}>{"Toiminnallisuus"}</Button></a>
                <br/>
                <a href={paths.sailytys}><Button className={"kohteetButton"} href={paths.sailytys}>{"Sailytys"}</Button></a>
                <br/>
                <a href={paths.luovatila}><Button className={"kohteetButton"} href={paths.luovatila}>{"Luova tila"}</Button></a>
                <br/>
                <a href={paths.olohuone}><Button className={"kohteetButton"} href={paths.olohuone}>{"Olohuone"}</Button></a>
                <br/>
            </React.Fragment>)
    }
}

export default Kohteet;