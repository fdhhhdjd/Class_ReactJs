import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addContactsStart, editContactsStart } from '../stores/action';

const AddEdit = () => {
  const values = {
    fullName: '',
    mobile: '',
    email: '',
    address: '',
  };
  const [initialState, setState] = useState(values);
  const dispatch = useDispatch();
  const { contacts: data } = useSelector((state) => state.data);

  const { fullName, mobile, email, address } = initialState;
  const [error, setError] = useState('');
  const currentId = useParams();
  const navigate = useNavigate();

  const { id } = currentId;

  console.log('currentId', currentId);

  useEffect(() => {
    if (isEmpty(id)) {
      console.log('initialState', initialState);
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
  }, [id, data]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('initialState', initialState);
    if (isEmpty(fullName) || isEmpty(email) || isEmpty(mobile) || isEmpty(address)) {
      setError('Please fill all input 😉');
    } else if (isEmpty(id)) {
      //*  Add
      dispatch(addContactsStart(initialState));
      setError('');
      navigate('/');
    } else {
      //* Edit
      dispatch(editContactsStart({ initialState, id }));
      setError('');
      navigate('/');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {error && <div style={{ color: 'red' }}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="bmd-label-floating">Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Mobile</label>
              <input
                type="number"
                className="form-control"
                name="mobile"
                value={mobile}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label className="bmd-label-floating">Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={address}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-default">Cancel</button>
            <button type="submit" className="btn btn-success btn-raised">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEdit;
