import { useState } from "react";
import {
  DesktopNav,
  HamburgerBtn,
  MobileNav,
  NavbarContainer,
} from "../styled/Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <NavbarContainer>
      <HamburgerBtn
        className="fas fa-bars"
        onClick={() => setSidebar(!sidebar)}
      />
      <MobileNav open={sidebar}>
        <Link to="/">
          <h1>PERN Social</h1>
        </Link>
        <Link to="/">
          <p>Feed</p>
        </Link>
        <Link to="/account">
          <p>Account</p>
        </Link>
      </MobileNav>

      {/* <DesktopNav>
        <Link to="/">
          <h1>PERN Social</h1>
        </Link>
        <Link to="/">
          <p>Feed</p>
        </Link>
        <Link to="/account">
          <p>Account</p>
        </Link>
      </DesktopNav> */}
    </NavbarContainer>
  );
};

export default Navbar;
