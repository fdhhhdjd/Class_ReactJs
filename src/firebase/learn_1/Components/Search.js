import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Styles/Search.css';
import { db as firebaseDB } from '../utils/Firebase';

const Search = () => {
  const [data, setData] = useState({});
  const onDelete = (id) => {
    if (window.confirm('Are you sure you want to delete 🤔')) {
      firebaseDB.child(`contacts/${id}`).remove((error) => {
        if (error) {
          toast.error('You delete Fail 😑');
        } else {
          toast.success('You delete success 👌 ');
        }
      });
    }
  };
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  let search = query.get('name');
  console.log(search);
  const searchData = () => {
    firebaseDB
      .child('contacts')
      .orderByChild('name')

      .equalTo(search)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const data = snapshot.val();
          setData(data);
        }
      });
  };
  useEffect(() => {
    searchData();
  }, [search]);
  return (
    <div style={{ marginTop: '100px' }}>
      <Link to="/">
        <button className="btn1 btn-search1">Go Back 🔙</button>
      </Link>
      {Object.keys(data).length === 0 ? (
        <h2>No Search Found With that Name 😪: {search}</h2>
      ) : (
        <table className="styled-table">
          <thead>
            <tr>
              <td style={{ textAlign: 'center' }}>No.</td>
              <td style={{ textAlign: 'center' }}>Name</td>
              <td style={{ textAlign: 'center' }}>Email</td>
              <td style={{ textAlign: 'center' }}>Contact</td>
              <td style={{ textAlign: 'center' }}>Status</td>
              <td style={{ textAlign: 'center' }}>Action</td>
            </tr>
          </thead>
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
        </table>
      )}
    </div>
  );
};

export default Search;
