import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <Container className="fixed-bottom">
        <footer style={{ backgroundColor: '#2A2A2A' }}>
          <div >
            <Nav fill variant="tabs" className="footerNav" >
              <Nav.Item className="navItem">
                <img className="footerImage" alt="lunchImage" src={process.env.PUBLIC_URL + '/tab_lunch.png'} />
                <Link to="/lunch">Lunch</Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <img className="footerImage" alt="lunchImage" src={process.env.PUBLIC_URL + '/tab_internets.png'} />
                <Link to="/internets">Internets</Link>
              </Nav.Item>
            </Nav>
          </div>
        </footer>
      </Container>
    );
}

export default Footer;