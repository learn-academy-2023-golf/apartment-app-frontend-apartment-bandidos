import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { useNavigate, NavLink } from "react-router-dom";



const Header = ({ currentUser, logout }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/")
  }
  
  console.log(currentUser)
  return (
    <div>
      <Navbar color="info" light expand="sm">
        <NavbarBrand to="/" className="me-auto">
          Apartment Bandito's
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to="/apartmentIndex/">Index</NavLink>
            </NavItem>
            {currentUser && (
              <>
                <NavItem>
                  <NavLink to="/apartmentProtectedIndex">MyIndex</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/apartmentNew">Create Listing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={handleClick}>
                    Log Out
                  </NavLink>
                </NavItem>
              </>
            )}
            {!currentUser && (
              <>
                <NavItem>
                  <NavLink to="/signin">Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/signup">Sign Up</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
