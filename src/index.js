import React from "react";
import ReactDom from "react-dom";

//ReactDom.render(<h1> Hello World </h1>, document.getElementById("root"));

// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);
ReactDom.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
