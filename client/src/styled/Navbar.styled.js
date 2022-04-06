import styled from "styled-components";

export const NavbarContainer = styled.div``;

export const HamburgerBtn = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  font-size: 2rem;
  z-index: 2;
  @media (min-width: 600px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.elevation_2};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 40%;
  padding: 4rem 0.5rem;
  gap: 2em;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  transform: ${(props) =>
    props.open ? "translateX(0%);" : "translateX(-100%);"};
  transition: transform 150ms ease-in;

  a:first-child {
    text-decoration: none;
  }
  a {
    color: white;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const DesktopNav = styled.nav``;
