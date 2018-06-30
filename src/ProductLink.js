import React from "react";
import ReactDOM from "react-dom";
import {
  CardPanel
} from "react-materialize";
import sizes from "./assets/sizes"
import colors from "./assets/colorObject";

class ProductLink extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text,
            url: this.props.url
        }
        this.redirect = this.redirect.bind(this);
    }
    redirect(){
        window.location.replace(this.props.url);
    }
    componentWillReceiveProps(){
        this.setState({
            text: this.props.text,
            url: this.props.url
        });
        console.log(this.state.text);
        console.log(this.state.url);
    }
    render(){
        return(<React.Fragment>
                <CardPanel className={colors.orangedim} onClick={this.redirect}>
                <h6>{this.state.text}</h6>
                </CardPanel>
              </React.Fragment>
        )

    }

}

export default ProductLink;    