import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getContactsStart } from '../stores/action';

const View = () => {
  const currentId = useParams();
  const dispatch = useDispatch();
  const { id } = currentId;
  const { contacts: data } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getContactsStart());
  }, []);
  return (
    <div className="container mt-5">
      {Object.keys(data).map((userId) => {
        if (userId === id) {
          return (
            <div class="card">
              <div class="card-header lead">User Detail</div>
              <div class="card-body">
                <p class="card-text">Name: {data[id].fullName}</p>
                <p class="card-text">Mobile: {data[id].mobile}</p>
                <p class="card-text">Email: {data[id].email}</p>
                <p class="card-text">Address: {data[id].address}</p>
                <Link to="/">
                  <a className="btn btn-info">Go Back</a>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default View;
