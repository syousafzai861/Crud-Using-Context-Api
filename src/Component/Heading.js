import React from 'react'
import {
    NavLink,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    Container
} from 'reactstrap';

import {Link} from 'react-router-dom';

const Heading = () => {
  return (
    <div className='container'>
      <Navbar color='dark' dark>
        <Container style={{display: "flex", justifyContent:"space-between"}}>
            <NavbarBrand href='/'>Context API</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className='btn btn-primary' to="/add">ADD USER</Link>
                </NavItem>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Heading
