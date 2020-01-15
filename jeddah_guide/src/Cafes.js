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

        const cafes = (this.props.list).map((cafe, index) => {

            return <div key={index} className='Card'>
                <Card style={{ width: '15rem', margin: '2px', marginBottom: '30px'}} className="cardHov">
                    <Card.Img onClick={() => this.setDisplayItem(cafe)} variant="top" src={cafe.imgSrc[0]} width="250" height="250" />
                    <Card.Body>
                    <button id="linkButton" onClick={() => this.setDisplayItem(cafe)}> {cafe.name} </button> 
                         {/* <button id="linkButton">Click</button> */}
                    </Card.Body>
                </Card>
            </div>
        })

        return (
            <div>
                
                <div className='CardCont'>
                    {cafes}
                </div>
                
                {this.state.onDisplay}
                
            </div>
        )
    }
}
export default Restaurant;