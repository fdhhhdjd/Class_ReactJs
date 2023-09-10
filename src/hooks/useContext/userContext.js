//* React
import React, { Fragment } from "react";

//* Hook
import LearnOne from "./learn_1";
import { DataProviderLearn } from "./store";
const UserContext = () => {
  return (
    <Fragment>
      <DataProviderLearn>
        <LearnOne />
      </DataProviderLearn>
    </Fragment>
  );
};

export default UserContext;
