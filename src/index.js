import React from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import {Button, Icon, Navbar} from "react-materialize";

class ListMaker extends React.Component{
    constructor(props){
        super(props);
        this.state = ({list: [this.props.listItem]});
    }
    addListItemToDom(){
        var paragraph = document.createElement("p");
        var node = document.createTextNode(this.state.list[0]);
        paragraph.appendChild(node);
        
        var element = document.getElementById("root");
        element.appendChild(paragraph);
    }
    render(){
        return <h1>Hello</h1> 
    }
}

// Shows the camera preview in browser
class ShowPreview extends React.Component{
    constructor(props){
        super(props);
        this.state = {delay: 300,
                      result: 'No result',
                      listOfResults: []}                
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
    }
    handleScan(data){
        if(data){
            this.setState({
              result: data
            }, function (){
                this.addListItemToState(data);
            })
        }
    }
    addResultToList(data){
        this.setState({resultList: data});
    }
    handleError(err){
        console.error(err)
    }
    addListItemToState(data){
    /*
    Checks if state already contains the result from handleScan
    */
        var newArray = this.state.listOfResults;
        for(var i = 0; i < this.state.listOfResults.length; i++){
            if(this.state.listOfResults[i] != data){
                newArray.push(data);
                this.setState({listOfResults: newArray});
            }
        } 
    }
    addListItemToDom(data){   
        var paragraph = document.createElement("p");
        var node = document.createTextNode(data);
        paragraph.appendChild(node);
        
        var element = document.getElementById("root");
        element.appendChild(paragraph);
    }
    render(){
        return (<div>
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{ width: "100%" }}
                    />
                        
                        <p>{this.state.result}</p>
                        <p>{this.state.listOfResults}</p>
                </div>);
    }
}


class CameraButton extends React.Component{
    constructor(props){
        super(props)
        this.state = ({activated: false, activatedName: "Käynnistä QR-Koodinlukija"})
        this.handleClick = this.handleClick.bind(this);
        const Button = (<Button onClick={this.handleClick}>{this.state.activatedName}</Button>)
    }
    handleClick(){
        if(this.state.activated == false){
            this.setState({activated: true, activatedName: "Sammuta Qr-Koodinlukija"})
        }else{
            this.setState({activated: false, activatedName:"Käynnistä QR-Koodinlukija"})
        }
    }
   
    render(){
        if(this.state.activated == false){
            return <Button onClick={this.handleClick}>{this.state.activatedName}</Button>
        }else{
            return(<React.Fragment>
                        <Button onClick={this.handleClick}>{this.state.activatedName}</Button>
                        <ShowPreview />
                   </React.Fragment> 
                  )
        }
    }
}





class NavBarOnTheLeft extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<Navbar brand="Huoneet" right={true}/>)
    }
}

class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<React.Fragment>
                    <NavBarOnTheLeft />
                    <CameraButton/>
                </React.Fragment>)
    }
}

ReactDOM.render(<Main/>, document.getElementById("root"));

