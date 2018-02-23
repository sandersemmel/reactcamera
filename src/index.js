import React from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
/*
class Video extends React.Component{
    render(){

        const opts = {
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    disableKb: 0,
                    start: "50',
                    showinfo: 0,
                    rel: 0,
                    playsinline: 1
                }
        };
        return(<div>
            <h1>Hello world</h1>
               <YouTube videoId="WNW1xRqbt94" opts={opts}/>
        </div>); 
    }
}
class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.state = ({arvo: '', cameraFeed: ''})
        this._handleChange = this._handleChange.bind(this);
        this._startCamera = this._startCamera.bind(this);

    }
    _handleChange(event){
       this.setState({arvo: event.target.value}, function(){
           console.log(this.state.arvo);
           
       })
    }
    _startCamera(){
        var scanner = new instascan.Camera();
        instascan.Camera.getCameras().then(function(cameras){
            if(cameras.length > 0){
                 var cameraFeed = scanner.start(cameras[0]).then(function(cameraFeed){
                     this.setState({cameraFeed: cameraFeed});
                 });
            }
        });
    }
    render(){
        return  <React.Fragment>
                    <input value={this.state.arvo} type="text" onChange={this._handleChange}></input>
                    <p value={this.state.arvo}>e</p>
                    <button onClick={this._startCamera}>Start Camera</button>
                    <video>
                        <source src={this.state.cameraFeed}></source>
                    </video>
                </React.Fragment> 
    }
}
*/

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
        super(props)
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
class Test extends React.Component {
/*
Checks if camera is active or not and renders the preview of camera
*/    
    constructor(props){
      super(props)
      this.state = {
        previewRender: false
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        if(this.state.previewRender == false){
            this.setState({previewRender: true}, function(){
                console.log(this.state.previewRender);
            });   
        }else{
            this.setState({previewRender: false}, function(){
                console.log(this.state.previewRender);
            })
        }
    }
    render(){
        if(this.state.previewRender == false){
            return <button onClick={this.handleClick}>Click</button>;
        }else{
            return <React.Fragment>
                        <button onClick={this.handleClick}>Click</button>
                        <ShowPreview/>
                   </React.Fragment> 
        }
    }
}

class Test2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<RenderOnClick buttonName="Show Camera" element={<ShowPreview/>}/>);
    }
}


class SendListToUSer extends React.Component{
/*
    Sends list of results to user somehow? Mail? Whatsapp? How?
*/    
    constructor(props){
        super(props)
        this.state = ({listOfResults: this.props.listOfResults});
    }
    render(){
        return(<React.Fragment>
                        <RenderOnClick buttonName="Send to me" element={this.state.listOfResults}/>
                        {this.state.listOfResults}
                </React.Fragment>);
    }
}






class RenderOnClick extends React.Component{
/*
Renders a component based on props
*/    
    constructor(props){
        super(props)
        this.state = ({preview: false, buttonName: this.props.buttonName, element: {}});
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        if(this.state.preview == false){
            this.setState({preview: true});
        }
        else{
            this.setState({preview: false});
        }
    }
    render(){
        if(this.state.preview == false){
            return <button onClick={this.handleClick}>{this.state.buttonName}</button>
        }else{
            return <React.Fragment>
                        <button onClick={this.handleClick}>{this.state.buttonName}</button>
                        <ShowPreview/>;
                   </React.Fragment> 
        }        
    }
}

ReactDOM.render(<Test2/>, document.getElementById("root"));

