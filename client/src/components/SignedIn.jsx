import { SignedInContainer } from "../styled/SignedIn.styled";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Account from "./Account";
import { useState } from "react";

const SignedIn = () => {
  const [modal, setModal] = useState(false);

  return (
    <SignedInContainer>
      <Navbar modal={modal} setModal={setModal} />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </SignedInContainer>
  );
};

export default SignedIn;
