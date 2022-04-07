import { App as StyledApp } from "./styled/App.styled";
import GlobalStyle from "./styled/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./themes";
import { BrowserRouter as Router } from "react-router-dom";
import { Signup } from "./components";
import { useContext } from "react";
import { UserContext } from "./components/UserContext";
import SignedIn from "./components/SignedIn";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function App() {
  const user = useContext(UserContext);

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
