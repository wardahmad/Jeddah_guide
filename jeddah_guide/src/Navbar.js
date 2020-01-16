import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap";
import "../src/App.css";


class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      wether: '',
      icon: ''
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  //Fetch Jeddah's weather information using Open Weather API.
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Jeddah&APPID=cbc315d131ff02c7286354ef49784966&units=metric')
      .then(res => res.json())
      .then((data) => {
        //Create the full link to the corresponding weather status using concat.
        var link = "http://openweathermap.org/img/wn/".concat(data.weather[0].icon + ".png");
        //set the states of weather and icon to the temperature data recieved and the 'link' variable respectively.
        this.setState({ wether: data.main.temp, icon: link })
      })
      .catch(console.log)
  }

  render() {
    //Render a navbar containing Jeddah Guide logo, home icon, and weather information fetched using API.
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          {/* Application Icon and name */}
          <Container className="AppIc">
            <NavbarBrand> <img src={'https://imagizer.imageshack.com/img923/6507/eWmyYS.png'} width="50" height="50" /> <span className='NavJed'> Jeddah Guide</span></NavbarBrand>
          </Container>

          {/* Home icon, linking to the homepage. Along with the current tempreture and related weather icon  */}
          <div className='HomeIcon'>
            <NavbarBrand href="/">{this.state.wether}°<img src={this.state.icon} /> <img src={'https://i.postimg.cc/13rtY39H/home.png'} width="35" height="35" /></NavbarBrand>
          </div>

        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;
