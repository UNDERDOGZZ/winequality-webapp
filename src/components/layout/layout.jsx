import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Grid } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar  style={{backgroundColor: '#722f37'}}expand="lg" variant="dark">
					<Navbar.Brand  >Smart-Wine-Taster</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="info">About the project</Nav.Link>
							<Nav.Link href="predict">Predict/Taste</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default Layout;
