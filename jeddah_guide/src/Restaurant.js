import React, { Component } from 'react';
class Restaurant extends Component {
    render() {
        const restaurants = (this.props.list).map((restaurant, index) => {
            return <div key={index}>
                <h4>{restaurant.name}</h4>
                <img src={restaurant.imgSrc}></img>
                <p className='description'>{restaurant.description}</p>
            </div>
        })
        return (
            <div>
                <h1>restaurants</h1>
                {restaurants}
            </div>
        )
    }
}
export default Restaurant;