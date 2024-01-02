import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = ({ currentUser, logout }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  
  return (
    <div>
      <Navbar color="info" light expand="sm">
        <NavbarBrand href="/" className="me-auto">
          Apartment Bandito's
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/apartmentIndex/">Index</NavLink>
            </NavItem>
            {currentUser && (
              <>
                <NavItem>
                  <NavLink href="/apartmentProtectedIndex">MyIndex</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" onClick={logout}>
                    Log Out
                  </NavLink>
                </NavItem>
              </>
            )}
            {!currentUser && (
              <>
                <NavItem>
                  <NavLink href="/signin">Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Sign Up</NavLink>
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
