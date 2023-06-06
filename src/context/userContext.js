import { useState, createContext, useContext, useEffect } from "react";
import { postSignUpRequest } from "../api/users";

const userContext = createContext();

export const useUser = () => {
  const context = useContext(userContext);
  return context;
};

export const UserProvider = ({ children }) => {
  const [users, setUser] = useState([]);

  const postUser = async (user) => {
    try {
      const res = await postSignUpRequest(user);
      setUser([...users, res.data]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <userContext.Provider
      value={{
        users,
        postUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
