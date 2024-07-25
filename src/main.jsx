import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Menu from "./menu.jsx";
import Items from "./Item.jsx";
import Footer from "./footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Menu />
    <Footer />
  </React.StrictMode>
);
