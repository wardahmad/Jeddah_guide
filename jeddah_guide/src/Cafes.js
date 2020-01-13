import React, { Component } from 'react';


class Cafes extends Component {


    render() {

        const cafes = (this.props.list).map((cafe, index) => {
            return <div key={index}>
                <h4>{cafe.name}</h4>
                <img src={cafe.imgSrc}></img>
                <p className='description'>{cafe.description}</p>
            </div>
        })

        return (
            <div>
                <h1>Cafes</h1>
                {cafes}
            </div>
        )

    }
}
export default Cafes;