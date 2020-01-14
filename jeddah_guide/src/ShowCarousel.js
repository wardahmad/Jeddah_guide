
import { Container, Row, Carousel } from 'react-bootstrap/';
import React, { Component } from 'react';

class ShowCarousel extends Component {
    render() {

        //replace this with the array of the item.
        var images = [this.props.currentItem.imgSrc,
            "http://www.hospitalitynewsmag.com/wp-content/uploads/2019/06/JeddahBanner-1024x466.jpg",
            "https://www.webuildvalue.com/static/upload/ar-/ar-rahmah-mosque--jeddah.jpg"]

        const list = (images).map((image, index) => {
            return <Carousel.Item key={index}>
                <img
                    className="img-responsive center-block" width={500} height={400}
                    src={image}
                />

            </Carousel.Item>
        })


        return (
            <Container>
                <Row>
                    <Carousel>
                        {list}
                    </Carousel>
                </Row>
            </Container>

        )
    }
} export default ShowCarousel