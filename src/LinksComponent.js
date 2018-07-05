import React from "react";
import ReactDOM from "react-dom";
import {
  CardPanel, Button
} from "react-materialize";
import sizes from "./assets/sizes"
import colors from "./assets/colorObject";
import ProductLink from "./ProductLink";
import SmallCardHeader from "./pages/SmallCardHeader";
import Colors from "././assets/colorObject";
import Sizes from "././assets/sizes";

class LinksComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links: this.props.links,
            amountOfLinks: this.props.amountOfLinks,
            showContents: false,
            buttonName: "Näytä tuotteet"
        }
        this.clickHandler = this.clickHandler.bind(this);

    }
    clickHandler(){
        this.setState({showContents: !this.state.showContents});
        console.log(this.state.showContents);
    }
    render(){
        if(this.state.amountOfLinks === "1"){
            if(this.state.showContents){
                return(<React.Fragment>
                                
                            <Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>

                            <ProductLink text={this.state.links.link1.linkHeader}
                                url={this.state.links.link1.linkUrl}/>

                            

                        </React.Fragment>);
            }
            else{
                return(<Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>);
                
            }
        }
           {/*2*/}
            if(this.state.amountOfLinks === "2"){
                if(this.state.showContents){
                    return(<React.Fragment>
                                <Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>
    
                                <ProductLink text={this.state.links.link1.linkHeader}
                                    url={this.state.links.link1.linkUrl}/>
    
                                <ProductLink text={this.state.links.link2.linkHeader}
                                    url={this.state.links.link2.linkUrl}/>
    
                            
                            </React.Fragment>);
                }
                else{
                    return(<Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>);
                    
                } 


            }
            {/*3*/}
            if(this.state.amountOfLinks === "3"){
                if(this.state.showContents){
                    return(<React.Fragment>
                                <Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>
    
                                <ProductLink text={this.state.links.link1.linkHeader}
                                    url={this.state.links.link1.linkUrl}/>
    
                                <ProductLink text={this.state.links.link2.linkHeader}
                                    url={this.state.links.link2.linkUrl}/>
                                        
                                <ProductLink text={this.state.links.link3.linkHeader}
                                    url={this.state.links.link3.linkUrl}/>
    
                            
                            </React.Fragment>);
                }
                else{
                    return(<Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>);
                    
                } 


            }
            {/*4*/}
            if(this.state.amountOfLinks === "4"){
                if(this.state.showContents){
                    return(<React.Fragment>
                                <Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>
    
                                <ProductLink text={this.state.links.link1.linkHeader}
                                    url={this.state.links.link1.linkUrl}/>
    
                                <ProductLink text={this.state.links.link2.linkHeader}
                                    url={this.state.links.link2.linkUrl}/>
                                        
                                <ProductLink text={this.state.links.link3.linkHeader}
                                    url={this.state.links.link3.linkUrl}/>

                                <ProductLink text={this.state.links.link4.linkHeader}
                                    url={this.state.links.link4.linkUrl}/>
    
                            
                            </React.Fragment>);
                }
                else{
                    return(<Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>);
                    
                } 
            }
            if(this.state.amountOfLinks === "7"){
                if(this.state.showContents){
                    return(<React.Fragment>
                                <Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>
    
                                <ProductLink text={this.state.links.link1.linkHeader}
                                    url={this.state.links.link1.linkUrl}/>
    
                                <ProductLink text={this.state.links.link2.linkHeader}
                                    url={this.state.links.link2.linkUrl}/>
                                        
                                <ProductLink text={this.state.links.link3.linkHeader}
                                    url={this.state.links.link3.linkUrl}/>

                                <ProductLink text={this.state.links.link4.linkHeader}
                                    url={this.state.links.link4.linkUrl}/>

                                <ProductLink text={this.state.links.link5.linkHeader}
                                    url={this.state.links.link5.linkUrl}/>
    
                                <ProductLink text={this.state.links.link6.linkHeader}
                                    url={this.state.links.link6.linkUrl}/>
                                        
                                <ProductLink text={this.state.links.link7.linkHeader}
                                    url={this.state.links.link7.linkUrl}/>
                        
                            </React.Fragment>);
                }
                else{
                    return(<Button className={"showLinksButton"} onClick={this.clickHandler}>{this.state.buttonName}</Button>);
                    
                } 
            }
        }
    }

export default LinksComponent;    