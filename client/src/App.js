import { App as StyledApp } from "./styled/App.styled";
import GlobalStyle from "./styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./components";
import { useContext } from "react";
import { UserContext } from "./components/UserContext";
import SignedIn from "./components/SignedIn";
function App() {
  const user = useContext(UserContext);

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          {user?.loggedIn === null ? (
            ""
          ) : user?.loggedIn === true ? (
            <SignedIn />
          ) : (
            <Signup />
          )}
        </StyledApp>
      </ThemeProvider>
    </Router>
  );
}

export default App;
