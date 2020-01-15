import React, { Component } from 'react';
import Display from './Display'
import { Card } from 'react-bootstrap/';
import {Link} from 'react-router-dom';


class Restaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itemToDisplay: '',
            onDisplay:" "
        }
        this.setDisplayItem = this.setDisplayItem.bind(this)

    }

    setDisplayItem(item) {

        this.setState({
            itemToDisplay: item,
            onDisplay: <Display displayItem={item}></Display>
        })
    }

    render() {

        const restaurants = (this.props.list).map((restaurant, index) => {

            return <div key={index} className='Card'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img onClick={() => this.setDisplayItem(restaurant)} variant="top" src={restaurant.imgSrc[0]} width="250" height="250" />
                    <Card.Body>
                    <button id="linkButton" onClick={() => this.setDisplayItem(restaurant)}> {restaurant.name} </button> 
                         {/* <button id="linkButton">Click</button> */}
                    </Card.Body>
                </Card>
            </div>
        })

        return (
            <div>
                
                <div className='CardCont'>
                    {restaurants}
                </div>
                
                {this.state.onDisplay}
                
            </div>
        )
    }
}
export default Restaurant;