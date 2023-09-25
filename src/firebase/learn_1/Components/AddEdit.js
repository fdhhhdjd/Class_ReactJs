import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Styles/AddEdit.css';
import { Navbar } from '../import';
import { db as firebaseDB } from '../utils/Firebase';

const initialState = {
  name: '',
  email: '',
  contact: '',
  status: '',
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});
  const { name, email, contact, status } = state;
  const history = useNavigate();
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !status) {
      toast.error('Please Enter Input!!!');
    } else {
      if (!id) {
        firebaseDB.child('contacts').push(state, (error) => {
          console.log(error);
          if (error) {
            toast.error('Add Informatio Fail!!');
          } else {
            toast.success('Add Informatio Success.');
          }
        });
      } else {
        firebaseDB.child(`contacts/${id}`).set(state, (error) => {
          if (error) {
            toast.error('Edit Information Fail!!');
          } else {
            toast.success('Edit Information Success.');
          }
        });
      }

      setTimeout(() => {
        history('/');
      }, 500);
    }
  };
  useEffect(() => {
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
  }, [id]);
  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
  }, [id, data]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const clearAll = () => {
    setState({});
    setData('');
  };
  return (
    <>
      <Navbar />
      <div className="select">
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
            <label htmlFor="name">Name 📛</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name..."
              value={name || ''}
              onChange={handleChange}
              className="select"
            />
            <label htmlFor="name">Email 📧</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email..."
              value={email || ''}
              onChange={handleChange}
              className="select"
            />
            <label htmlFor="name">Contact Phone ☎️</label>
            <input
              type="number"
              id="contact"
              name="contact"
              placeholder="Your Contact Number..."
              value={contact || ''}
              onChange={handleChange}
              className="select"
            />
            <label htmlFor="name">Status 🛑 </label>
            <input
              type="text"
              id="contact"
              name="status"
              value={status || ''}
              placeholder="Your Contact Status..."
              onChange={handleChange}
              className="select"
            />
            <input type="submit" value="Clear" className="clear" onClick={clearAll} />
            <input type="submit" value={id ? 'Update' : 'Save'} className="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEdit;
