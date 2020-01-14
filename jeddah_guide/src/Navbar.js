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
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
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
            <NavbarBrand href="/"> <img src={'https://i.postimg.cc/13rtY39H/home.png'} width="35" height="35" /></NavbarBrand>
            </div>
            
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;
