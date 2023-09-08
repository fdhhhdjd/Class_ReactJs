//* REACT
import React, { Fragment } from "react";

//* STYLE
import "./App.css";

//* HOOK
import UseState from "./hooks/useState/useState";
import UseEffect from "./hooks/useEffect/useEffect";
import UseRef from "./hooks/useRef/useRef";
import UseLayoutEffect from "./hooks/useLayoutEffect/useLayoutEffect";
import UseCallback from "./hooks/useCallback/useCallback";

///* HOC
import Memo from "./Hoc/memo/memo";

function App() {
  return (
    <Fragment>u
      {/* 1. useState */}
      {/* <UseState /> */}

      {/* 2. useEffect */}
      {/* <UseEffect/> */}

      {/* 3. useRef */}
      {/* <UseRef/> */}

      {/* 4. useLayoutEffect */}
      {/* <UseLayoutEffect/> */}

      {/* 5. Memo */}
      {/* <Memo /> */}

      {/* 6.useCallback */}
      <UseCallback/>
    </Fragment>
  );
}

export default App;
