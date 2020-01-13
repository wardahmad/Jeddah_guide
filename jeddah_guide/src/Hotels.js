import React, { Component } from 'react';

class Hotels extends Component {
    render() {
        const hotels = (this.props.list).map((hotel, index) => {
            return <div key={index}>
                <h4>{hotel.name}</h4>
                <img src={hotel.imgSrc}></img>
                <p className='description'>{hotel.description}</p>
            </div>
        })
        return (
            <div>
                <h1>hotels</h1>
                {hotels}
            </div>
        )
    }
}
export default Hotels;