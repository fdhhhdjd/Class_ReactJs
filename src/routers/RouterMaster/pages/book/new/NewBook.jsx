import React from 'react';
import { useOutletContext } from 'react-router-dom';

const NewBook = () => {
  const { title } = useOutletContext();

  return <h1>NewBook --- {title}</h1>;
};

export default NewBook;
