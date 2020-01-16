import { ReactBingmaps } from 'react-bingmaps';
import React, {Component} from 'react'

class Map extends Component {
    render(){
    console.log(this.props.location)
    return (
      
        <div className="mapDiv" >
            <ReactBingmaps
                bingmapKey='AliiTsAbE3AMLr6dHgirwvlJCVXRD4-4Cvaz-SPST4JW_NW69UhDyrqOPz01mIGM'
                center={[this.props.location[0], this.props.location[1]]}
                zoom={15}
                pushPins={[{
                    'location': [this.props.location[0], this.props.location[1]],
                    'option': { color: 'black' }
                }]}

            >

            </ReactBingmaps>
        </div>
    )
            }

} export default Map

