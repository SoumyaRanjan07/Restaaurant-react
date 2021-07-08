 
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faSearch, faDatabase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Link } from 'react-router-dom'
class Navbarmenu extends Component {
    render() {
        return (
            <div>
                <Navbar collapse onClick bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">
                   <Link ><FontAwesomeIcon icon={faReact} color="Orange" size='2x' /></Link>
                    Restaurant Application</Navbar.Brand> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#action1"><Link to='/home'><FontAwesomeIcon icon={faHome} color="Orange" /></Link>Home</Nav.Link>
                            <Nav.Link href="#action2"><Link to='/list'><FontAwesomeIcon icon={faList} color="Orange" /></Link> List</Nav.Link>
                            <Nav.Link href="#action3"><Link to='/create'><FontAwesomeIcon icon={faPlus} color="Orange" /></Link>Register</Nav.Link>
                            <Nav.Link href="#action4"><Link to='/detail'><FontAwesomeIcon icon={faDatabase} color="Orange" /></Link>Menu</Nav.Link>
                            <Nav.Link href="#action5"><Link to='/search'><FontAwesomeIcon icon={faSearch} color="Orange" /></Link>Search</Nav.Link>
                            {
                                localStorage.getItem("login") ?
                                <Nav.Link href="#link1"><Link to='/logout'><FontAwesomeIcon icon={faUser} color="Orange" /></Link>Logout</Nav.Link>
                                :
                                <Nav.Link href="#link2"><Link to='/login'><FontAwesomeIcon icon={faUser} color="Orange" /></Link>Login </Nav.Link>

                            }
                            
                            <NavDropdown title="Aboutus" id="collasible-nav-dropdown">

                                <NavDropdown.Item href="#dd1"><Link to='/ '>Introduction</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#dd2"><Link to='/ '>Media Interaction</Link></NavDropdown.Item>


                                <NavDropdown.Divider />

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                    <p >You can follow me on</p>
                    <Nav.Link href="#action1"><a href='https://twitter.com/Srk07here'><FontAwesomeIcon icon={faTwitter} color="deepskyblue" size="1x" /></a></Nav.Link>
                    <Nav.Link href="#action1"><a href='https://www.instagram.com/_soumyasrk_/'><FontAwesomeIcon icon={faInstagram} color="fuchsia" size="1x" /></a></Nav.Link>
                    <Nav.Link href="#action1"><a href='https://www.facebook.com/profile.php?id=100008164155776'><FontAwesomeIcon icon={faFacebookF} color="deepblue" size="1x" /></a></Nav.Link>
                    {/* <Nav.Link href="#action1"><Link to='/'><FontAwesomeIcon icon={faGit} color="" size="1x"/></Link></Nav.Link> */}
                </Navbar>
            </div>
        );
    }
}

export default Navbarmenu;