import React, { Component } from 'react';
import { Card } from 'react-bootstrap/';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Cafes from './Cafes';
import Hotels from './Hotels';
import Places from './Places';
import Restaurant from './Restaurant';
import Activities from './Activities'
import guide from './DB' //Import the file where the data is stored.
import NavbarMain from './Navbar'


class App extends Component {
  render() {

    //Since guide is an array of objects, we'd like to seperate them into different variables
    //By using the filter function, checking by the name of the list.

    const restaurants = guide.filter(obj => obj.listName === 'bestRestaurants')[0].list;
    const cafes = guide.filter(obj => obj.listName === 'bestCafes')[0].list;
    const places = guide.filter(obj => obj.listName === 'bestPlaces')[0].list;
    const hotels = guide.filter(obj => obj.listName === 'bestHotels')[0].list;
    const activities = guide.filter(obj => obj.listName === 'Activities')[0].list;
    //5 lists, each one is an array of related objects. (eg: list of restaurants, list of cafes .. etc)

    return (

      <Router>

        {/* Render the NavbarMain component located in Navbar.js file */}
        <NavbarMain />

        {/* Create a div that will serve as a container for the list of other divs (cards) showing the type of items avaliable to view */}
        <div className='CardCont'>

        {/* Each card will contain a link to the path of the component that corresponds to the card's title using <Link> */}
          
          {/* Restaurant Card */}
          <div className='Card1'>
            <Card style={{ width: '15rem', margin: '1px' }} className="cardHov">
              <Card.Img variant="top" src="https://i.postimg.cc/zGfYvvSV/image.png" width="250" height="250" />
              <Card.Body>
                <Link to="/restaurants"><Card.Title class="appFont">Restaurants <img src={'https://i.postimg.cc/mD1NKHqH/cutlery.png'} width="40" height="40" /></Card.Title></Link>
              </Card.Body>
            </Card>
          </div>

          {/* Cafes' Card */}
          <div className='Card2'>
            <Card style={{ width: '15rem', margin: '1px' }} className="cardHov">
              <Card.Img variant="top" src="https://r1.ilikewallpaper.net/pic/201702/papers_co_nn75_coffe_barista_art_bokeh_6_wallpaper_640.jpg" width="250" height="250" />
              <Card.Body>
                <Link to="/cafes"><Card.Title class="appFont">Cafe's<img src={'https://i.postimg.cc/GtdwXGhc/food-and-restaurant.png'} width="40" height="40" /></Card.Title></Link>
              </Card.Body>
            </Card>
          </div>

          {/* Places Card */}
          <div className='Card3'>
            <Card style={{ width: '15rem', margin: '1px' }} className="cardHov">
              <Card.Img variant="top" src="https://3.bp.blogspot.com/-1kbp75rwvsY/WkYWiJE73HI/AAAAAAAAA0I/wKCBFDbXd0M3X4PUI4joJty8WA2S_EUZgCPcBGAYYCw/s1600/IMG_4501.JPG" width="250" height="250" />
              <Card.Body>
                <Link to="/places"><Card.Title class="appFont">Places <img src={'https://i.postimg.cc/FKVQ3YG0/place.png'} width="40" height="40" /></Card.Title></Link>
              </Card.Body>
            </Card>
          </div>

          {/* Hotels Card */}
          <div className='Card4'>
            <Card style={{ width: '15rem', margin: '1px' }} className="cardHov">
              <Card.Img variant="top" src="https://live.staticflickr.com/65535/49356142872_e84b35fc65_n.jpg" width="250" height="250" />
              <Card.Body>
                <Link to="/hotels"><Card.Title class="appFont">Hotels <img src={'https://i.postimg.cc/ry9y4FQ1/sleeping.png'} width="40" height="40" /></Card.Title></Link>
              </Card.Body>
            </Card>
          </div>

          {/* Activities Card */}
          <div className='Card5'>
            <Card style={{ width: '15rem', margin: '1px' }} className="cardHov">
              <Card.Img variant="top" src="https://lh3.googleusercontent.com/p/AF1QipPi9gXuQG_UlrD57E2kobHU6o5wKnzwVxbubrKT=s0" width="250" height="250" />
              <Card.Body>
                <Link to="/activities"><Card.Title class="appFont">Activities <img src={'https://i.postimg.cc/NMJ70D1z/birthday-and-party.png'} width="40" height="40" /></Card.Title></Link>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Define the routes to each one of the following components:
        Restaurant, Cafes, Places, Hotels, and Activites
        and send the appropriate array to that component as props named 'list' */}

        <Route path="/restaurants" component={() => <Restaurant list={restaurants} />} />
        <Route path="/cafes" component={() => <Cafes list={cafes} />} />
        <Route path="/places" component={() => <Places list={places} />} />
        <Route path="/hotels" component={() => <Hotels list={hotels} />} />
        <Route path="/activities" component={() => <Activities list={activities} />} />

      </Router>

    )
  }
} export default App;