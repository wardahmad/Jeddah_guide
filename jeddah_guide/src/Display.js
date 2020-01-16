import React, { Component } from 'react';
import ShowCarousel from './ShowCarousel'

//Display component handles the display of the details of the item chosen by the user.

class Display extends Component {

    render() {
        //Return method should render the item's name, description and the display of the set of
        // images related to the currently displayed item, which should be handled by ShowCarousel component.
        return (
            <div className="contDis">
                <div>
                    <h3 className="displayH3">{this.props.displayItem.name}</h3>
                    <ShowCarousel currentItem={this.props.displayItem}></ShowCarousel>
                    <p className="displayPar">{this.props.displayItem.description}</p>
                    {console.log(this.props.restaurant)}
                </div>
            </div>
        )
    }
} export default Display