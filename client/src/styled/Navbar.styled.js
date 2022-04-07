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
  padding: 4rem 0;
  gap: 2em;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  transform: ${(props) =>
    props.open ? "translateX(0%);" : "translateX(-100%);"};
  transition: transform 150ms ease-in;

  a:first-child {
    padding: 0.5em;
  }
  a {
    text-decoration: none;
    color: white;
  }

  h1 {
    font-family: "Lobster", cursive;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.elevation_2};

  max-width: 100%;
  gap: 2rem;
  font-size: 1.5rem;
  padding: 1em 1.5em;

  a:first-child {
    margin-right: auto;
    &:hover {
      text-decoration: none;
      transform: none;
    }
  }
  a {
    text-decoration: none;
    color: white;
    transition: transform 120ms ease-in;
    &:hover {
      transform: scale(1.05);
    }
  }

  h1 {
    font-family: "Lobster", cursive;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const PostModalButton = styled.i`
  font-size: 3rem;
  cursor: pointer;
  color: ${(props) => props.theme.primary};
  &:hover {
    transform: scale(1.05);
    color: ${(props) => props.theme.primaryHover};
  }

  @media (max-width: 600px) {
    margin-top: auto;
    font-size: 4rem;
  }
`;
