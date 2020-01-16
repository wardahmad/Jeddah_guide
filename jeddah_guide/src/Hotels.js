import React, { Component } from 'react';
import Display from './Display'
import { Card } from 'react-bootstrap/';

class Restaurant extends Component {

    constructor(props) {
        super(props)
        this.state = {
            onDisplay: " " //This state will be used to render the Display component only after an event (onClick).
        }
        this.setDisplayItem = this.setDisplayItem.bind(this) //Bind the click handling method setDisplayItem to 'this'

    }
    //handles the change of the state onDisplay to render the Display component with the user's chosen item from the list of hotels.
    setDisplayItem(item) {
        this.setState({
            onDisplay: <Display displayItem={item}></Display> //will send the chosen item/hotel as props to the Display Component.
        })
    }

    render() {
        //map the list recieved as props so that every hotel object in that list is displayed as a card containing the name and an image of that hotel.
        const hotels = (this.props.list).map((hotel, index) => {

            return <div key={index} className='Card'>
                <Card style={{ width: '15rem', margin: '2px', marginBottom: '30px' }} className="cardHov">
                    {/* Add onClick event handler to the name and an image of the hotel */}

                    <Card.Img onClick={() => this.setDisplayItem(hotel)} variant="top" src={hotel.imgSrc[0]} width="250" height="250" />
                    <Card.Body>
                        <button id="linkButton" onClick={() => this.setDisplayItem(hotel)}> {hotel.name} </button>
                        {/* <button id="linkButton">Click</button> */}
                    </Card.Body>
                </Card>
            </div>
        })

        return (
            <div>
                {/* Wrap the cards containing the hotels in a div as their container */}

                <div className='CardCont'>
                    {/* Render the map-generated cards representing each hotel  */}

                    {hotels}
                </div>
                {/* The following would change depending on the state that changes if the user clicked on an item  */}

                {this.state.onDisplay}

            </div>
        )
    }
}
export default Restaurant;