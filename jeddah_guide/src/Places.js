import React, { Component } from 'react';


class Places extends Component {


    render() {

        const places = (this.props.list).map((places, index) => {
            return <div key={index}>
                <h4>{places.name}</h4>
                <img src={places.imgSrc}></img>
                <p className='description'>{places.description}</p>
            </div>
        })

        return (
            <div>
                <h1>Places</h1>
                {places}
            </div>
        )

    }
}
export default Places;