import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer, Chip, CardPanel} from "react-materialize";

class ProductButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            // link: this.state.link,
            // url: this.state.url
        })
    }
    redirect(){

    }
    render() {
        return (
            <React.Fragment>
            <div className="productDiv">
            <p className="productText">text</p>
                <input type="button" className="productButton">
                </input>
            </div>    
            </React.Fragment>)
    }
}
export default ProductButton;