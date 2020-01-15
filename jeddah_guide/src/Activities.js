import React, { Component } from 'react';
import Display from './Display'
import { Card } from 'react-bootstrap/';


class Activities extends Component {

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

        const activities = (this.props.list).map((activity, index) => {

            return <div key={index} className='Card'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img onClick={() => this.setDisplayItem(activity)} variant="top" src={activity.imgSrc[0]} width="250" height="250" />
                    <Card.Body>
                    <button id="linkButton" onClick={() => this.setDisplayItem(activity)}> {activity.name} </button> 
                         {/* <button id="linkButton">Click</button> */}
                    </Card.Body>
                </Card>
            </div>
        })

        return (
            <div>
                
                <div className='CardCont'>
                    {activities}
                </div>
                
                {this.state.onDisplay}
                
            </div>
        )
    }
}
export default Activities;