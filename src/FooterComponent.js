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
                    <a href="https://www.visitpori.fi/"><img className="partnerImage" src={ImageAssets.visitpori}></img></a>
                    <a href="http://www.karjaranta21.fi/"><img className="partnerImage" src={ImageAssets.karjaranta21}></img></a>
                    <a href="https://www.samk.fi/en/"><img className="partnerImage" src={ImageAssets.samklogo}></img></a>
                    <a href="https://www.paulahellberg.fi/"><img className="partnerImage" src={ImageAssets.paulalogo}></img></a>
                    
                        <div className="footerLow">
                            <div className="year">
                                <p className="yearText">2018</p>
                            </div>
                        </div>
                </div>
            </React.Fragment>)
    }
}
export default FooterComponent;