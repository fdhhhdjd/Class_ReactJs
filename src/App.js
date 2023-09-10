//* REACT
import React, { Fragment } from "react";

//* HOOK
// import UseState from "./hooks/useState/useState";
// import UseEffect from "./hooks/useEffect/useEffect";
// import UseRef from "./hooks/useRef/useRef";
// import UseLayoutEffect from "./hooks/useLayoutEffect/useLayoutEffect";
// import UseCallback from "./hooks/useCallback/useCallback";
// import UseId from "./hooks/useId/useId";
import UseTransition from "./hooks/useTransition/useTransition";
// import UseDeferredValue from "./hooks/useDeferredValue/UseDeferredValue";

///* HOC
// import Memo from "./Hoc/memo/memo";

function App() {
  return (
    <Fragment>
      {/* 1. useState */}
      {/* <UseState /> */}

      {/* 2. useEffect */}
      {/* <UseEffect /> */}

      {/* 3. useRef */}
      {/* <UseRef /> */}

      {/* 4. useLayoutEffect */}
      {/* <UseLayoutEffect/> */}

      {/* 5. Memo */}
      {/* <Memo /> */}

      {/* 6.useCallback */}
      {/* <UseCallback/> */}

      {/* 7. useId*/}
      {/* <UseId /> */}

      {/* 8. useTransition*/}
      <UseTransition />

      {/* 9. useDeferredValue*/}
      {/* <UseDeferredValue/> */}
    </Fragment>
  );
}

export default App;
