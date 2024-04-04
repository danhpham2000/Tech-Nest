import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    const user = { email, password };
    setError(null);

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(user),
      });
      const json = await res.json();

      if (!res.ok) {
        console.log(json);
        setError(json.message);
      }
      if (res.ok) {
        console.log(json);

        localStorage.setItem("user", JSON.stringify(json));

        dispatch({ type: "LOGIN", payload: json });

        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { login, error };
};
