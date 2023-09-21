//* REACT
import React from 'react';

//* LIBRARY
import { Route, Routes } from 'react-router-dom';
import BookDetail from '../BookDetailNotOutLet';
import BookStep2 from '../BookStep2';
import New from '../New';
import BookLayout from '../layouts/BookLayout';

export function BookRoutes() {
  return (
    <React.Fragment>
      {/* Step 1 */}
      {/* <BookLayout /> */}
      <Routes>
        <Route element={<BookLayout />}>
          <Route index element={<BookStep2 />} />
          <Route path=":id" element={<BookDetail />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
