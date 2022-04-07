import { useState } from "react";
import {
  DesktopNav,
  HamburgerBtn,
  MobileNav,
  NavbarContainer,
  PostModalButton,
} from "../styled/Navbar.styled";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import PostModal from "./PostModal";

const Navbar = ({ modal, setModal }) => {
  const [sidebar, setSidebar] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <NavbarContainer>
      <HamburgerBtn
        className={sidebar ? "fa-solid fa-xmark" : "fas fa-bars"}
        onClick={() => setSidebar(!sidebar)}
      />
      <MobileNav open={sidebar}>
        <Links setSidebar={setSidebar} handleOpen={handleOpen} />
      </MobileNav>

      <DesktopNav>
        <Links setSidebar={null} handleOpen={handleOpen} />
      </DesktopNav>
      {modal && <PostModal open={modal} handleClose={handleClose} />}
    </NavbarContainer>
  );
};

export default Navbar;

const Links = ({ setSidebar, handleOpen }) => (
  <>
    <Link
      to="/"
      onClick={() => {
        setSidebar && setSidebar(false);
      }}
    >
      <h1>PERN Social</h1>
    </Link>

    <Link
      to="/"
      onClick={() => {
        setSidebar && setSidebar(false);
      }}
    >
      <p>Feed</p>
    </Link>

    <Link
      to="/account"
      onClick={() => {
        setSidebar && setSidebar(false);
      }}
    >
      <p>Account</p>
    </Link>
    <PostModalButton
      className="fa-solid fa-square-plus"
      onClick={() => {
        handleOpen();
        setSidebar && setSidebar(false);
      }}
    />
  </>
);
