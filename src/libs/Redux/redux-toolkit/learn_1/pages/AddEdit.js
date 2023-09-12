//* REACT
import React, { useEffect, useState } from 'react';

//* LIBRARY
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

//* SLICE
import { GetTodo, addContact, getContact, updateContact } from '../stores/Slice';

//* STYLE
import '../styles/addEdit.css';

//* UTILS
import { showToastError, showToastSuccess } from '../../../../../utils/toast';

const initialState = {
  name: '',
  email: '',
  phone: '',
  status: '',
};
const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { name, email, phone, status } = state;
  const { contact } = useSelector(GetTodo);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !status) {
      showToastError('Please Enter Input !!!');
    } else {
      if (!id) {
        dispatch(addContact(state), showToastSuccess('Add user Success 😊'));
      } else {
        dispatch(updateContact(state), showToastSuccess('Edit user Success 👌 '));
      }
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  useEffect(() => {
    dispatch(getContact(id));
    setState({ ...contact });
  }, [id, contact]);
  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <form
          style={{
            margin: 'auto',
            padding: '15px',
            maxWidth: '400px',
            alignContent: 'center',
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name ..."
            value={name || ''}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email ..."
            value={email || ''}
            onChange={handleInputChange}
          />
          <label htmlFor="status">Status</label>
          <select className="dropdown" name="status" onChange={handleDropdownChange}>
            <option>Please Select Status</option>
            <option value="Active" selected={status === 'Active' ? status : ''}>
              Active
            </option>
            <option value="Inactive" selected={status === 'Inactive' ? status : ''}>
              Inactive
            </option>
          </select>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Your Contact No ..."
            value={phone || ''}
            onChange={handleInputChange}
          />
          {id ? (
            <input type="submit" value="Edit User" />
          ) : (
            <input type="submit" value="Add User" />
          )}
          <Link to="/">
            <input type="button" value="Go Back 🤏" />
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddEdit;
