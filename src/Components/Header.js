import React, { useState } from 'react'
import { Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.png"
import "../App.css"

const Header = () => {
    const [isopen, setIsOpen] = useState(false)


    return(
            <div className="bgImage">
                <Navbar light expand="lg"  className="bgLight">
                <NavbarBrand tag={Link} to="/"><img width={40} height={40} mode='fit' src={Logo} alt="logo"/></NavbarBrand>
                <NavbarToggler onClick={() => (
                    setIsOpen(!isopen)
                )} />
                <Collapse navbar isOpen={isopen}>
                    <Nav className="ml-auto" navbar onClick={
                        () => {
                            setIsOpen(false)
                        }
                    }>
                        <NavItem>
                            <NavLink
                                tag={Link} 
                                to="/"
                                className="text-info "
                            >
                                Home
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink 
                                tag={Link} 
                                to="/services"
                                className="text-info"
                            >
                                Services
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink 
                            className="text-info"
                            tag={Link} 
                            to="/contact"
                        >
                                Contant
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink 
                            className="text-info"
                            tag={Link} 
                            to="/signup"
                        >
                                Login
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header