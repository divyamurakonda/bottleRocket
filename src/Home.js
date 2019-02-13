import React, {Component} from 'react';
import Footer from './Footer';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div>
                <Container className="home" style={{ minHeight: '80vh' }}>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand>bottlerocket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/lunch">Lunch</Link>
                        <Link to="/internets">Internets</Link>
                        <Link to="#">contact</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Home;