import React,{Component} from 'react';
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
import logo from './logo.svg';

class App extends Component {
  render() {
    const restaurant = guide.filter(obj => obj.listName === 'bestRestaurants')[0].list;
    const cafes = guide.filter(obj => obj.listName === 'bestCafes')[0].list;
    const places = guide.filter(obj => obj.listName === 'bestPlaces')[0].list;
    const hotels = guide.filter(obj => obj.listName === 'bestHotels')[0].list;
    return (
      <Router>
        <div className='logo'>
          <img className='appLogo' src={logo}></img>
        </div>
        <div>
          <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="/Restaurant">Restaurants</Link>{" "}
            <Link to="/cafes">Cafe's</Link>{" "}
            <Link to="/places">Places</Link>{" "}
            <Link to="/hotels">Hotels</Link>
          </nav>
        </div>
        <Route path="/Restaurant" component={() => <Restaurant list={restaurant} />} />
        <Route path="/cafes" component={() => <Cafes list={cafes} />} />
        <Route path="/places" component={() => <Places list={places} />} />
        <Route path="/hotels" component={() => <Hotels list={hotels} />} />
      </Router>
    )
  }
}
export default App;





