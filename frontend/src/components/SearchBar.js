import React from 'react';
import { Navbar, Form, Container } from 'react-bootstrap'

function SearchBar(props) {
    return <Navbar expand="lg" className="NavBar" variant="dark">
        <Container>
            <Navbar.Brand href="/"><h1 className="title">Tookaway<span style={{ fontWeight: "100", fontSize: "30px" }}>.com</span></h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Form inline>
                    <Form.Control type="text" placeholder="Search" onChange={props.changeSearch} />
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label column className="text">Sort by:</Form.Label>
                        <Form.Control as="select" onChange={props.changeSorting}>
                            <option value="-1">Top Restaurants</option>
                            <option value="0">Best Match</option>
                            <option value="1">Newest</option>
                            <option value="2">Avg. Rating</option>
                            <option value="3">Distance</option>
                            <option value="4">Popularity</option>
                            <option value="5">Avg. Price</option>
                            <option value="6">Delivery Costs</option>
                            <option value="7">Min. Costs</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default SearchBar