import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"},"Namaste React 🚀");

//JSX
const jsxHeading = (<h1 id="heading" tabIndex="5">Namaste React Using JSX 🚀</h1>);

console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);