import bar from "./bar.js";
// CommonJS方式
const foo = require("./foo.js");

// bar();
// foo();

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hello</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
