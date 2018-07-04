import React from "react";
import ReactDOM from "react-dom";
import ImageAssets from "./assets/imageAssets";

class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="footerDiv">
                    <h3>Talo Haltiatar</h3>
                    <img className="partnerImage" src={ImageAssets.visitpori}></img>
                    <img className="partnerImage" src={ImageAssets.karjaranta21}></img>
                    <img className="partnerImage" src={ImageAssets.samklogo}></img>
                        <div className="footerLow">
                            <p className="year">2018</p>
                        </div>
                </div>
            </React.Fragment>)
    }
}
export default FooterComponent;