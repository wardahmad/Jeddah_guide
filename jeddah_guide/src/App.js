import React,{Component} from 'react';
import {Card, Button} from 'react-bootstrap/';

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
import guide from './DB'
import NavbarMain from './Navbar'
//import Display from './Display'
import Activities from './Activities'

class App extends Component {
  render() {
    const restaurants = guide.filter(obj => obj.listName === 'bestRestaurants')[0].list;
    const cafes = guide.filter(obj => obj.listName === 'bestCafes')[0].list;
    const places = guide.filter(obj => obj.listName === 'bestPlaces')[0].list;
    const hotels = guide.filter(obj => obj.listName === 'bestHotels')[0].list;
    const activities = guide.filter(obj => obj.listName === 'Activities')[0].list;
  return (

      
  <Router>

   <NavbarMain />


   <div className='CardCont'>
         
   <div className='Card1'>
      <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://i.postimg.cc/zGfYvvSV/image.png" width="250" height="250" />
     <Card.Body>
     <Link to="/Restaurant"><Card.Title>Restaurants <img src={'https://i.postimg.cc/mD1NKHqH/cutlery.png'} width="40" height="40" /></Card.Title></Link>
     </Card.Body>
     </Card>
     </div>
 

     <div className='Card2'>
     <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://r1.ilikewallpaper.net/pic/201702/papers_co_nn75_coffe_barista_art_bokeh_6_wallpaper_640.jpg" width="250" height="250"  />
     <Card.Body>
     <Link to="/cafes"><Card.Title>Cafe's <img src={'https://i.postimg.cc/GtdwXGhc/food-and-restaurant.png'} width="40" height="40" /></Card.Title></Link>
     </Card.Body>
     </Card>
     </div>

     <div className='Card3'>
     <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://3.bp.blogspot.com/-1kbp75rwvsY/WkYWiJE73HI/AAAAAAAAA0I/wKCBFDbXd0M3X4PUI4joJty8WA2S_EUZgCPcBGAYYCw/s1600/IMG_4501.JPG" width="250" height="250" />
     <Card.Body>
     <Link to="/places"><Card.Title>Places <img src={'https://i.postimg.cc/FKVQ3YG0/place.png'} width="40" height="40" /></Card.Title></Link>
     </Card.Body>
     </Card>
     </div>
     
     <div className='Card4'>
     <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://live.staticflickr.com/65535/49356142872_e84b35fc65_n.jpg" width="250" height="250" />
     <Card.Body>
     <Link to="/hotels"><Card.Title>Hotels <img src={'https://i.postimg.cc/ry9y4FQ1/sleeping.png'} width="40" height="40" /></Card.Title></Link>
     </Card.Body>
     </Card>
     </div>


     <div className='Card5'>
     <Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://lh3.googleusercontent.com/p/AF1QipPi9gXuQG_UlrD57E2kobHU6o5wKnzwVxbubrKT=s0" width="250" height="250" />
     <Card.Body>
     <Link to="/activities"><Card.Title>Activities <img src={'https://i.postimg.cc/NMJ70D1z/birthday-and-party.png'} width="40" height="40" /></Card.Title></Link>
     </Card.Body>
     </Card>
     </div>
    </div>

    <Route exact path="/restaurants" component={() => <Restaurant list={restaurants} />} />
    <Route path="/cafes" component={() => <Cafes list={cafes} />} />
    <Route path="/places" component={() => <Places list={places} />} />
    <Route path="/hotels" component={() => <Hotels list={hotels} />} />
    <Route path="/activities" component={() => <Activities list={activities} />} />
    

    </Router>

    )
  }
}
export default App;





