import React from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";
import Fetch from "fetch";
import QrReader from "react-qr-reader";
import {Button, Icon, Navbar, Card, CardTitle} from "react-materialize";
import Keittio from './keittio';
import Valaistus from './valaistus';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


class ListMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({list: [this.props.listItem]});
    }

    addListItemToDom() {
        var paragraph = document.createElement("p");
        var node = document.createTextNode(this.state.list[0]);
        paragraph.appendChild(node);

        var element = document.getElementById("root");
        element.appendChild(paragraph);
    }

    render() {
        return <h1>Hello</h1>
    }
}

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
        const Button = (<Button onClick={this.handleClick}>{this.state.activatedName}</Button>)
    }

    handleClick() {
        if (this.state.activated === false) {
            this.setState({activated: true, activatedName: "Sammuta Qr-Koodinlukija"})
        } else {
            this.setState({activated: false, activatedName: "Käynnistä QR-Koodinlukija"})
        }
    }

    render() {
        if (this.state.activated === false) {
            return <Button onClick={this.handleClick}>{this.state.activatedName}</Button>
        } else {
            return (<React.Fragment>
                    <Button onClick={this.handleClick}>{this.state.activatedName}</Button>
                    <ShowPreview/>
                </React.Fragment>
            )
        }
    }
}


class NavBarOnTheLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {navBarName: this.props.navBarName}
    }

    render() {
        return (<Navbar brand={this.state.navBarName} right={true}/>)
    }
}

class KeittioPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<React.Fragment>
            <NavBarOnTheLeft navBarName={"Keittiö"}/>
            <CameraButton/>
            <Keittio/>
        </React.Fragment>)
    }
}

class ValaistusPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<React.Fragment>
            <NavBarOnTheLeft navBarName={"Valaistus"}/>
            <CameraButton/>
            <Valaistus/>
        </React.Fragment>)
    }
}


class TestRoutes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={KeittioPage}/>
                    <Route path='/keittio' component={KeittioPage}/>
                    <Route path='/valaistus' component={ValaistusPage}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>);
    }
}

class TestCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <React.Fragment>

            <Card className='large'
                  header={<CardTitle
                      image='https://images2.roomstogo.com/is/image/roomstogo/lr_rm_bellingham_gray~Cindy-Crawford-Home-Bellingham-Gray-5-Pc-Living-Room.jpeg?$pdp_gallery_945$'>Olohuone</CardTitle>}
                  actions={[<a href='http://www.google.com'>Linkki yrityksen kotisivulle.</a>]}
                  reveal={<p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                      more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                      Ipsum."</p>}>

                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card>
        </React.Fragment>
    }
}


ReactDOM.render(<TestRoutes/>, document.getElementById("root"));
