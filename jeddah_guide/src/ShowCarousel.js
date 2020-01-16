
import { Container, Row, Carousel } from 'react-bootstrap/';
import React, { Component } from 'react';

//ShowCarousel Component, rendered by the Display component to handle the display of the set of
//images related to the item being displayed.

class ShowCarousel extends Component {

    render() {

        //store the array of images' sources passed as props in a variable.
        var images = this.props.currentItem.imgSrc
        //Using a map function, loop through each item in the 'images' array and store it as a Carousel item.
        const list = (images).map((image, index) => {
            return <Carousel.Item key={index}>
                <img
                    className="img-responsive center-block" width={500} height={400}
                    src={image} //set the source of the image to the current array item value (image source).
                />
            </Carousel.Item>
        })

        return (
            <Container>
                <Row>
                    <Carousel>
                        {/* render the list of Carousel items generated in the render method above */}
                        {list}
                    </Carousel>
                </Row>
            </Container>

        )
    }
} export default ShowCarousel