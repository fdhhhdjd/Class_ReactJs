import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListRecord from './components/ListRecord';
import AddEdit from './components/AddEdit';
import Error from './components/Error';
import Headers from './components/Header';
import View from './components/View';
import About from './components/About';

function Learn_1() {
  return (
    <>
      <Router>
        <div className="App">
          <Headers />
          <Routes>
            <Route path="/" element={<ListRecord />} />
            <Route path="/add" element={<AddEdit />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/update/:id" element={<AddEdit />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default Learn_1;
