import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { AuthProvider } from "react-auth-kit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthProvider
      authType={"cookie"}
      authName={"token"}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    > */}
    <App />
    {/* </AuthProvider> */}
  </React.StrictMode>
);
