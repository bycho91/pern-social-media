import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const Context = ({ children }) => {
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/account`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ ...data });
        setUser({ ...data });
      });
  }, []);
  const [user, setUser] = useState({ loggedIn: null });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default Context;
