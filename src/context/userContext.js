import { useState, createContext, useContext, useEffect } from "react";
import { postSignupRequest } from "../api/users";

const usersContext = createContext();

export const useUsers = () => {
  const context = useContext(usersContext);
  return context;
};

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const postUser = async (user) => {
    try {
      const res = await postSignupRequest(user);
      setUsers([...users, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <usersContext.Provider
      value={{
        users,
        postUser,
      }}
    >
      {children}
    </usersContext.Provider>
  );
};
