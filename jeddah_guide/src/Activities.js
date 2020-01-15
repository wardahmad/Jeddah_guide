import React, { Component } from 'react';
import Display from './Display'
import { Card } from 'react-bootstrap/';

class Activities extends Component {

    constructor(props) {
        super(props)
        this.state = {
            onDisplay: " " //This state will be used to render the Display component only after an event (onClick).
        }
        this.setDisplayItem = this.setDisplayItem.bind(this) //Bind the click handling method setDisplayItem to 'this'
    }

    //handles the change of the state onDisplay to render the Display component with the user's chosen item from the list of acivities.
    setDisplayItem(item) {
        this.setState({
            onDisplay: <Display displayItem={item}></Display> //will send the chosen item/activity as props to the Display Component.
        })
    }

    render() {

        //map the list recieved as props so that every activity object in that list is displayed as a card containing the name and an image of that activity.
        const activities = (this.props.list).map((activity, index) => {
            return <div key={index} className='Card'>
                <Card style={{ width: '15rem', margin: '2px', marginBottom: '30px' }} className="cardHov">
                    {/* Add onClick event handler to the name and an image of the activity */}
                    <Card.Img onClick={() => this.setDisplayItem(activity)} variant="top" src={activity.imgSrc[0]} width="250" height="250" />
                    <Card.Body>
                        <button id="linkButton" onClick={() => this.setDisplayItem(activity)}> {activity.name} </button>
                    </Card.Body>
                </Card>
            </div>
        })

        return (
            <div>
                {/* Wrap the cards containing the activities in a div as their container */}
                <div className='CardCont'>
                    {/* Render the map-generated cards representing each activity  */}
                    {activities}
                </div>

                {/* The following would change depending on the state that changes if the user clicked on an item  */}
                {this.state.onDisplay}

            </div>
        )
    }
}
export default Activities;