//* React
import { createContext, useContext, useState } from 'react';

//* Create Context
export const store_learn_context = createContext();

//* Give Store Context
export const useContextLearn = () => useContext(store_learn_context);

export const DataProviderLearn = ({ children }) => {
  const [lists, setLists] = useState({
    name: 'Nguyen Tien Tai',
    age: 23,
  });

  //* Data
  const data = {
    data_list: lists,
  };

  //* Name conText
  store_learn_context.displayName = 'Learn useContext';

  //* Use Context Global
  return <store_learn_context.Provider value={data}>{children}</store_learn_context.Provider>;
};
