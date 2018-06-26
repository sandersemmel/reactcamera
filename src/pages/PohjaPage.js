import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Icon,
  Navbar,
  Card,
  CardTitle,
  NavItem,
  Footer
} from "react-materialize";
import CameraButton from "../cameraButton.js";

class PohjaPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teksti: this.props.teksti,
      otsikko: this.props.otsikko,
      image: this.props.image,
      showLinks: this.props.showLinks
    };
  }
  render() {
      if(this.state.showLinks){
        return (
            <React.Fragment>
                <Card
                header={<CardTitle reveal image={this.state.image} waves="light" />}
                title={this.state.otsikko}
                reveal={
                    <p>
                    {this.state.teksti}
                    <a href="#">Linkki yrityksen kotisivuille</a>
                    </p>
                }
                >
                    <p>
                    <a href="#">Linkki yrityksen kotisivuille</a>
                    </p>
                </Card>
            </React.Fragment>
            )
            }else{
        return(
            <React.Fragment>
                <Card
                header={<CardTitle reveal image={this.state.image} waves="light" />}
                title={this.state.otsikko}
                reveal={
                    <p>
                    {this.state.teksti}
                    </p>
                }
                >
                    <p>
                    </p>
                </Card>
            </React.Fragment>
            )
            }     
        }
}

export default PohjaPage;
