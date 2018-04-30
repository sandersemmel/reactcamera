import React from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer, Toast} from "react-materialize";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {BrowserView, isBrowser, isMobile} from 'react-device-detect';

// Shows the camera preview in browser
class ShowPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 300,
            result: 'No result',
            listOfResults: [],
            redirect: false,
        };
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
        this.redirectUser = this.redirectUser.bind(this);
    }

    handleScan(data) {
        if (data) {
            this.setState({
                result: data,
                redirect: true
            }, function () {
                this.addListItemToState(data);
            })
        }
    }

    addResultToList(data) {
        this.setState({resultList: data});
    }

    handleError(err) {
        console.error(err)
    }

    addListItemToState(data) {
        /*
        Checks if state already contains the result from handleScan
        */
        var newArray = this.state.listOfResults;
        for (var i = 0; i < this.state.listOfResults.length; i++) {
            if (this.state.listOfResults[i] != data) {
                newArray.push(data);
                this.setState({listOfResults: newArray});
            }
        }
    }

    addListItemToDom(data) {
        var paragraph = document.createElement("p");
        var node = document.createTextNode(data);
        paragraph.appendChild(node);

        var element = document.getElementById("root");
        element.appendChild(paragraph);
    }

    redirectUser() {
        window.location.assign(this.state.result);
    }

    render() {
        if (this.state.redirect === true) {
            return this.redirectUser();
        }else
            {
                return <div>
                    <QrReader
                        delay={this.state.delay}
                        onError={this.handleError}
                        onScan={this.handleScan}
                        style={{width: "100%"}}
                    />

                    <p>{this.state.result}</p>
                    <p>{this.state.listOfResults}</p>
                </div>;
            }
        }
    }


class CameraButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({activated: false, activatedName: "Käynnistä QR-Koodinlukija"})
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        if (this.state.activated === false) {
            this.setState({activated: true, activatedName: "Sammuta Qr-Koodinlukija"})
        } else {
            this.setState({activated: false, activatedName: "Käynnistä QR-Koodinlukija"})
        }
    }

    render() {
        if(isMobile){
            if (this.state.activated === false) {
                return <Toast rounded={true} toast="Odota hetki, laitteen kamera käynnistyy" onClick={this.handleClick} >{this.state.activatedName} </Toast>
            } else {
                return (<React.Fragment>
                        <Toast onClick={this.handleClick} waves={"red"} >{this.state.activatedName}</Toast>
                        <ShowPreview/>
                    </React.Fragment>
                )
            }
        }else{
            return null;
        }
    }
}

export default CameraButton;