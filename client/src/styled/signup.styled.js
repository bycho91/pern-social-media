import styled from "styled-components";

export const SignupContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > form {
    background-color: ${(props) => props.theme.elevation_1};
    text-align: center;
    height: 400px;
    width: 90%;
    max-width: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3em;
    box-shadow: ${(props) => props.theme.shadow};

    h1 {
      font-family: "Lobster", cursive;
      letter-spacing: 2px;
    }
  }
`;
