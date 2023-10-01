//* REACT
import React, { Fragment } from 'react';

//* PROP
// import Prop_Drilling from './prop_drilling';

//* HOOK
// import Hook from './hooks/hook';
// import RouterMain from './routers/router';

//* LIB
import Lib from './libs/lib';

//* CUSTOM HOOk
// import CustomHook from './custom_hooks';

//* PROJECT
// import Projects from './projects';

//* FIREBASE
import Firebase from './firebase/index';

function App() {
  return (
    <Fragment>
      {/* Prop drilling */}
      {/* <Prop_Drilling /> */}

      {/* HOOK */}
      {/* <Hook /> */}

      {/* ROUTER */}
      {/* <RouterMain /> */}

      {/* LIB */}
      <Lib />

      {/* Custom Hook */}
      {/* <CustomHook /> */}

      {/* Projects */}
      {/* <Projects /> */}

      {/* Firebase */}
      {/* <Firebase /> */}
    </Fragment>
  );
}

export default App;
