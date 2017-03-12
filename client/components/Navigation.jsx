import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
	render () {
		return (
			<div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className='sud' href="#" onClick={() => browserHistory.push("/")}>Süding</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={0}>Signed in as: Minerva McGonagall</NavItem> 
                            <NavItem eventKey={1} href="#" onClick={() => browserHistory.push("/future")}>Booked Venues</NavItem>
                            <NavItem eventKey={2} onClick={() => browserHistory.push("/past")}>Past Venues</NavItem>
                        </Nav>
                    </Navbar.Collapse>    
                </Navbar>
			</div>
		)
	}
}

export default Navigation;
