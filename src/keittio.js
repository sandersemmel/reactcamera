import React from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import {Button, Icon, Navbar, Card, CardTitle} from "react-materialize";


class KeittioLeft1 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(  <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light'/>}
                       title="Card Title"
                       reveal={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           <p><a href="#">This is a link</a></p>
                       </p>}>

            <p><a href="#">This is a link</a></p>
        </Card>)
    }
}
class KeittioRight1 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(  <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light'/>}
                       title="Card Title"
                       reveal={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           <p><a href="#">This is a link</a></p>
                       </p>}>

            <p><a href="#">This is a link</a></p>
        </Card>)
    }
}
class KeittioLeft2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(  <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light'/>}
                       title="Card Title"
                       reveal={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           <p><a href="#">This is a link</a></p>
                       </p>}>

            <p><a href="#">This is a link</a></p>
        </Card>)
    }
}
class KeittioRight2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(  <Card header={<CardTitle reveal image={"https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$"} waves='light'/>}
                       title="Card Title"
                       reveal={<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           <p><a href="#">This is a link</a></p>
                       </p>}>

            <p><a href="#">This is a link</a></p>
        </Card>)
    }
}
ReactDOM.render(<KeittioLeft1/>, document.getElementById("colLeft1"));
ReactDOM.render(<KeittioRight1/>, document.getElementById("colRight1"));
ReactDOM.render(<KeittioLeft2/>, document.getElementById("colLeft2"));
ReactDOM.render(<KeittioRight2/>, document.getElementById("colRight2"));

export default {KeittioLeft1,KeittioRight1,KeittioLeft2, KeittioRight2};