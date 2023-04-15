import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement("div", {}, [
  React.createElement("h1", {}, "1 - H1"),
  React.createElement("h1", {}, "2 - H1"),
]);

const root = ReactDOM.createRoot(document.getElementById("root-react"));
root.render(div);
