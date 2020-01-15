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
  //////////
  componentDidMount() { 
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Jeddah&APPID=cbc315d131ff02c7286354ef49784966&units=metric')
    .then(res => res.json())
    .then((data) => {
      var link = "http://openweathermap.org/img/wn/".concat( data.weather[0].icon + ".png");
      this.setState({ wether: data.main.temp,icon: link })
    })
    .catch(console.log)
  }
  ///////////
  render() {
      return (
        <div>
          <Navbar
            color="faded"
            dark
            expand="md"
            fixed={`top`}
            className="navDark"
          >
            <Container className="AppIc">
              <NavbarBrand> <img src={'https://imagizer.imageshack.com/img923/6507/eWmyYS.png'} width="50" height="50" /> <span className='NavJed'> Jeddah Guide</span></NavbarBrand>
            </Container>
            
            <div className='HomeIcon'>
            <NavbarBrand href="/">{this.state.wether}°<img src={this.state.icon}/> <img src={'https://i.postimg.cc/13rtY39H/home.png'} width="35" height="35" /></NavbarBrand>
            </div>
            
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;
