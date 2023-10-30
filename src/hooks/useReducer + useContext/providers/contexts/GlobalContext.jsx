//* LIB
import { createContext, useContext } from 'react';

//* IMPORT
import useCreateLoggerReducer from '../../hooks/CreateReducer';
import countReducer from '../Reducers/counts/reducer';
import { initState } from '../Reducers/counts/state';

export const store_global_context = createContext();

export const useGlobalContext = () => useContext(store_global_context);

const GlobalProviderContext = ({ children }) => {
  const [state, dispatch] = useCreateLoggerReducer(countReducer, initState);

  const data = {
    state,
    dispatch,
  };

  store_global_context.displayName = 'Global Context';

  return <store_global_context.Provider value={data}>{children}</store_global_context.Provider>;
};

export default GlobalProviderContext;
