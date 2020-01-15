import React, { Component } from 'react';
import Display from './Display'
import { Card } from 'react-bootstrap/';


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

        const places = (this.props.list).map((place, index) => {

            return <div key={index} className='Card'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img onClick={() => this.setDisplayItem(place)} variant="top" src={place.imgSrc[0]} width="250" height="250" />
                    <Card.Body>
                    <button id="linkButton" onClick={() => this.setDisplayItem(place)}> {place.name} </button> 
                         {/* <button id="linkButton">Click</button> */}
                    </Card.Body>
                </Card>
            </div>
        })

        return (
            <div>
                
                <div className='CardCont'>
                    {places}
                </div>
                
                {this.state.onDisplay}
                
            </div>
        )
    }
}
export default Restaurant;