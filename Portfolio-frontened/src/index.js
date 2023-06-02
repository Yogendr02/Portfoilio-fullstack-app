import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"
import "./index.css"
// import { ThemeProvider } from "@material-tailwind/react";
// import { Provider } from "react-redux";
// import { store } from "./store";
const el = document.getElementById("root");
const root = createRoot(el);
root.render(
    
        <App />
)