import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/View.css';
import { Navbar } from '../import';
import { db as firebaseDB } from '../utils/Firebase';

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    firebaseDB
      .child(`contacts/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
        return () => {
          setUser({});
        };
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '150px' }}>
        <div className="card">
          <div className="card-header">
            <p>Information User Friend</p>
          </div>
          <div className="container">
            <strong>ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name: </strong>
            <span>{user.name}</span>
            <br />
            <br />
            <strong>Email: </strong>
            <span>{user.email}</span>
            <br />
            <br />
            <strong>Contact: </strong>
            <span>{user.contact}</span>
            <br />
            <br />
            <Link to="/">
              <button className="bttn btn-edit">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
