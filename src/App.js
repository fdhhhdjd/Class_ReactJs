import React, { Fragment } from "react";
import "./App.css";
import LearnOne from "./hooks/useState/learn_1";
import LearnTow from "./hooks/useState/learn_2";
import LearnThree from "./hooks/useState/learn_3";

function App() {
  return (
    <Fragment>
      {/* 1. UseState */}
      {/* <LearnOne /> */}
      {/* <LearnTow /> */}
      <LearnThree />
    </Fragment>
  );
}

export default App;
