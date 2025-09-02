import axios from "axios";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const API_URL = import.meta.env.VITE_API_URL;

const Logout = () => {
  const [error, setError] = useState(null);
  const { setuser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/logout`, {
        withCredentials: true,
      });
      const user = response.data.data;
      setuser(user);
      setError(null);
    } catch (error) {
      setError(error.message);
      setuser(null);
    }
  };

  return (
<>
      <button onClick={handleLogout}>Logout</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Logout;
