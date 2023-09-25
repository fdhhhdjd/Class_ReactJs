import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Styles/Home.css';
import { db as firebaseDB } from '../utils/Firebase';
import Navbar from './Navbar';

const Home = () => {
  const [data, setData] = useState({});
  const [sortedData, setSortedData] = useState([]);
  const [sort, setSort] = useState(false);
  const { current } = useSelector((state) => state.user);
  const handleChange = (e) => {
    setSort(true);
    firebaseDB
      .child('contacts')
      .orderByChild(`${e.target.value}`)
      .on('value', (snapshot) => {
        let value = [];
        snapshot.forEach((snap) => {
          value.push(snap.val());
        });
        setSortedData(value);
      });
  };
  const handleReset = () => {
    setSort(false);
    firebaseDB.child('contacts').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
      return () => {
        setData({});
      };
    });
  };
  const filterData = (value) => {
    firebaseDB
      .child('contacts')
      .orderByChild('status')
      .equalTo(value)
      .on('value', (snapshot) => {
        if (snapshot.val !== null) {
          setData({ ...snapshot.val() });
        } else {
          setData({});
        }
      });
  };
  const onDelete = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      firebaseDB.child(`contacts/${id}`).remove((error) => {
        if (error) {
          toast.error('Delete Information Fail!!');
        } else {
          toast.success('Delete Information Success.');
        }
      });
    }
  };
  const refetchAll = () => {
    window.location.reload();
  };
  useEffect(() => {
    firebaseDB.child('contacts').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="App">
        <h1>home</h1>
        <h3>hi,{current.displayName}</h3>
      </div>
      <div style={{ marginTop: '100px' }}>
        <table className="styled-table">
          <thead>
            <tr>
              <td style={{ textAlign: 'center' }}>No.</td>
              <td style={{ textAlign: 'center' }}>Name</td>
              <td style={{ textAlign: 'center' }}>Email</td>
              <td style={{ textAlign: 'center' }}>Contact</td>
              <td style={{ textAlign: 'center' }}>Status</td>
              {!sort && <td style={{ textAlign: 'center' }}>Action</td>}
            </tr>
          </thead>
          {!sort && (
            <tbody>
              {Object.keys(data).map((id, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{data[id].name}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].contact}</td>
                    <td>{data[id].status}</td>
                    <td>
                      <Link to={`/update/${id}`}>
                        <button className="bttn btn-edit">Edit</button>
                      </Link>
                      <button className="bttn btn-delete" onClick={() => onDelete(id)}>
                        Delete
                      </button>
                      <Link to={`/view/${id}`}>
                        <button className="bttn btn-view">View</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
          {sort && (
            <tbody>
              {sortedData.map((id, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{id.name}</td>
                    <td>{id.email}</td>
                    <td>{id.contact}</td>
                    <td>{id.status}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
        <div className="SortMain">
          <label>Sort By</label>
          <select className="dropdown" name="colValue" onChange={handleChange}>
            <option value="">Please Select</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="contact">Contact</option>
            <option value="status">Status</option>
          </select>
          <button className="btn1 btn1-reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn1 btn1-reset" onClick={refetchAll}>
            ReFetch
          </button>

          <br />
          <label htmlFor="">Status:</label>
          <button className="btn1 btn1-active" onClick={() => filterData('Online')}>
            Online
          </button>
          <button className="btn1 btn1-inactive" onClick={() => filterData('Offline')}>
            Offline
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
