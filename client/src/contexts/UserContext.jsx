import { createContext, useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const UserContext = createContext();


export const UserContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/me`, {
          withCredentials: true,
        });
        
        // console.log(response.data);
        setuser(response.data);
      } catch (error) {
        setuser(null);
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return <UserContext value={{ user, setuser }}>{children}</UserContext>;
};
