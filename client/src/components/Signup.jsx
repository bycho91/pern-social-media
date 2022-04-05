import { SignupContainer } from "../styled/signup.styled";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const signin = () => {
    return null;
  };
  return (
    <SignupContainer>
      <form onSubmit={signin}>
        <div>
          <h1>PERN Social</h1>
          <sub>created by Benjamin C.</sub>
        </div>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            maxWidth: "200px",
            margin: "0 auto",
            fontSize: ".7rem",
            backgroundColor: "#5a8a79",
            "&:hover": {
              backgroundColor: "#386857",
            },
          }}
        >
          Sign in With Google
          <FcGoogle size="1.3rem" />
        </Button>
      </form>
    </SignupContainer>
  );
};

export default Signup;
