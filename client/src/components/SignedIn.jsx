import { SignedInContainer } from "../styled/SignedIn.styled";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Account from "./Account";

const SignedIn = () => {
  return (
    <SignedInContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </SignedInContainer>
  );
};

export default SignedIn;
