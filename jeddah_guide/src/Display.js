import React, { Component } from 'react';
import {Card} from 'react-bootstrap/';
import {withRouter} from 'react-router'
import ShowCarousel from './ShowCarousel'



class Display extends Component {

    render() {

        return (
        //     <div>
        //        <div>
        //        {this.props.displayItem.name}
        //        <ShowCarousel currentItem={this.props.displayItem}></ShowCarousel>
        //        {this.props.displayItem.description}
        //        {console.log(this.props.restaurant)}
        //        </div>
        //    </div>
                <Card style={{ width: '40rem'}}>
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