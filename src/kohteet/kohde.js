import React from "react";
import ReactDOM from "react-dom";
import {Button, Icon, Navbar, Card, CardTitle, NavItem, Footer} from "react-materialize";
import suihkulahde from "../kuvat/suihkulahde.jpg"

class Kohde extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(           
        <React.Fragment>
        <Card className='large'
                  header={<CardTitle
                      image={suihkulahde} >Olohuone</CardTitle>}
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
        )}
}

export default Kohde;