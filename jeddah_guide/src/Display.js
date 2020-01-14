import React, { Component } from 'react';
import {Card} from 'react-bootstrap/';
import {withRouter} from 'react-router'
import ShowCarousel from './ShowCarousel'



class Display extends Component {

    render() {

        return (
           
                <Card style={{ width: '18rem'}}>
                <Card.Title><h2>{this.props.displayItem.name}</h2> </Card.Title>
                <Card.Body>
                {/* <img src={this.props.restaurant.imgSrc}></img>  //old single picture */}
                <ShowCarousel currentItem={this.props.displayItem}></ShowCarousel>
                {console.log(this.props.restaurant)}
                </Card.Body>
                </Card>

        )
    }
} export default withRouter(Display)