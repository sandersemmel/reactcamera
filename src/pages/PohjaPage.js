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
      text: this.props.text,
      header: this.props.header,
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
                title={this.state.header}
                reveal={
                    <p>
                    {this.state.text}
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
                title={this.state.header}
                reveal={
                    <p>
                    {this.state.text}
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
