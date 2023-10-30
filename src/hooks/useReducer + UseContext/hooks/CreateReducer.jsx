import { useReducer } from 'react';
import { ReducerLogger } from '../providers/Reducers/counts/logger';
import { NODE_APP } from '../common/contants';

const useCreateLoggerReducer = (reducer, initState) => {
  const nodeEnv = process.env.APP_ENV || NODE_APP.DEV;

  // Define two separate useReducer hooks
  const reducerWithLogger = ReducerLogger(reducer);
  const [state, dispatch] = useReducer(reducerWithLogger, initState);
  const [stateWithoutLogger, dispatchWithoutLogger] = useReducer(reducer, initState);

  // Return the appropriate state and dispatch functions based on nodeEnv
  const checkNodeApp = nodeEnv === NODE_APP.DEV;
  if (checkNodeApp) {
    return [state, dispatch];
  } else {
    return [stateWithoutLogger, dispatchWithoutLogger];
  }
};

export default useCreateLoggerReducer;
