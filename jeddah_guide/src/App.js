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
import Display from './Display'

class App extends Component {
  render() {
    const restaurants = guide.filter(obj => obj.listName === 'bestRestaurants')[0].list;
    const cafes = guide.filter(obj => obj.listName === 'bestCafes')[0].list;
    const places = guide.filter(obj => obj.listName === 'bestPlaces')[0].list;
    const hotels = guide.filter(obj => obj.listName === 'bestHotels')[0].list;
  return (

      
  <Router>

   <NavbarMain />


   <div className='CardCont'>
          
     <div className='Card1'>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://live.staticflickr.com/65535/49355477498_f6e6edb02b_m.jpg" width="250" height="250" />
     <Card.Body>
     <Link to="/restaurants"><Card.Title>Restaurants</Card.Title></Link>
     </Card.Body>
     </Card>
     </div>
 

     <div className='Card2'>
     <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://live.staticflickr.com/65535/49356142842_5d5f5f1198_m.jpg" width="250" height="250"  />
     <Card.Body>
     <Link to="/cafes"><Card.Title>Cafe's</Card.Title></Link>
     </Card.Body>
     </Card>
     </div>

     <div className='Card3'>
     <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://live.staticflickr.com/65535/49355477153_e4cb13eb6b_m.jpg" width="250" height="250" />
     <Card.Body>
     <Link to="/places"><Card.Title>Places</Card.Title></Link>
     </Card.Body>
     </Card>
     </div>
     
     <div className='Card4'>
     <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://live.staticflickr.com/65535/49356142872_e84b35fc65_n.jpg" width="250" height="250" />
     <Card.Body>
     <Link to="/hotels"><Card.Title>Hotels</Card.Title></Link>
     </Card.Body>
     </Card>
     </div>




    

    </div>

    <Route exact path="/restaurants" component={() => <Restaurant list={restaurants} />} />
    <Route path="/cafes" component={() => <Cafes list={cafes} />} />
    <Route path="/places" component={() => <Places list={places} />} />
    <Route path="/hotels" component={() => <Hotels list={hotels} />} />
    <Route path="/restaurant/:id" component={() => <Display list={Display} />} />

    </Router>

    )
  }
}
export default App;





