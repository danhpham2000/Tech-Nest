import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (name, email, password, confirmedPassword) => {
    const user = { name, email, password, confirmedPassword };
    setError(null);

    try {
      const res = await fetch("http://localhost:3000/signup", {
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
        // save user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update auth context
        dispatch({ type: "LOGIN", payload: json });

        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { signup, error };
};
