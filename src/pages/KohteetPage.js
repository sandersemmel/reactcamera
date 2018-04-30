import React from "react";
import ReactDOM from "react-dom";
import {Button, Toast} from "react-materialize";
import CameraButton from "../cameraButton.js";
import NavBarOnTheLeft from "../navigationBar.js";


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
                <br/>
                <br/>
                <Button className={"kohteetButton"} href="">{"Akustiikka"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Eteistilat"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Keittio"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Kylpyhuone"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Makuuhuoneet"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Portaat"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Ruokailutila"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Sauna"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Tyotila"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Ulkotilat"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Valaistus"}</Button>
                <br/>
                <Button className={"kohteetButton"}>{"Wc"}</Button>
                <br/>
            </React.Fragment>)
    }
}

export default Kohteet;