import React, { Fragment } from "react";
import "./App.css";

//* Hook
import LearnOne from "./hooks/useState/learn_1";
import LearnTow from "./hooks/useState/learn_2";
import LearnThree from "./hooks/useState/learn_3";
import LearnFour from "./hooks/useState/learn_4";
import LearnFive from "./hooks/useState/learn_5";
import LearnSix from "./hooks/useState/learn_6";

function App() {
  return (
    <Fragment>
      {/* 1. UseState */}
      {/* <LearnOne /> */}
      {/* <LearnTow /> */}
      {/* <LearnThree /> */}
      {/* <LearnFour /> */}
      {/* <LearnFive /> */}
      <LearnSix />
    </Fragment>
  );
}

export default App;
