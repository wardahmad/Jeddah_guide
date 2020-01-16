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

    //handles the change of the state onDisplay to render the Display component with the user's chosen item from the list of cafes.
    setDisplayItem(item) {
        this.setState({
            onDisplay: <Display displayItem={item}></Display> //will send the chosen item/cafe as props to the Display Component.
        })
    }

    render() {
        //map the list recieved as props so that every cafe object in that list is displayed as a card containing the name and an image of that cafe.
        const cafes = (this.props.list).map((cafe, index) => {

            return <div key={index} className='Card'>
                <Card style={{ width: '15rem', margin: '2px', marginBottom: '30px' }} className="cardHov">
                    {/* Add onClick event handler to both the name and an image of the cafe */}
                    <Card.Img onClick={() => this.setDisplayItem(cafe)} variant="top" src={cafe.imgSrc[0]} width="250" height="250" />
                    <Card.Body>
                        <button id="linkButton" onClick={() => this.setDisplayItem(cafe)}> {cafe.name} </button>
                    </Card.Body>
                </Card>
            </div>
        })

        return (
            <div>
                {/* Wrap the cards containing the cafes in a div as their container */}
                <div className='CardCont'>
                    {/* Render the map-generated cards representing the each cafe  */}
                    {cafes}
                </div>

                {/* The following would change depending on the state that changes if the user clicked on an item  */}
                {this.state.onDisplay}

            </div>
        )
    }
}
export default Restaurant;