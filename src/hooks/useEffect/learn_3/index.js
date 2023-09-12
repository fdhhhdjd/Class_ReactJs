//* REACT
import React, { useEffect, useState } from 'react';

//* DATA
import userData from './data';

//* LIBRARY
import { AiFillCloseCircle } from 'react-icons/ai';

//* STYLE
import './style.css';

const CheckBox = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const handleChange = (e, data) => {
    const { name, checked } = e.target;
    if (checked) {
      if (name === 'all') {
        setSelectedUser(users);
      } else {
        setSelectedUser([...selectedUser, data]);
      }
    } else {
      if (name === 'all') {
        setSelectedUser([]);
      } else {
        // if uncheked and specific checkbox remove specific field from selectedList
        let tempuser = selectedUser.filter((item) => item.id !== data.id);
        setSelectedUser(tempuser);
      }
    }
  };

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="form-check-input"
                name="all"
                checked={selectedUser?.length === users?.length}
                onChange={(e) => handleChange(e, users)}
              />
            </th>
            <th>First Name</th>
            <th>Iamge</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((data, index) => (
              <tr id={index} key={index}>
                <td>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name={data.name}
                    // checked when selectedUser contains checked object/filed/row
                    checked={selectedUser.some((item) => item?.id === data.id)}
                    onChange={(e) => handleChange(e, data)}
                  />
                </td>
                <td>{data.name}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className={model ? 'model open' : 'model'}>
        <img src={tempimgSrc} />
        <AiFillCloseCircle onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {selectedUser.map((item, i) => {
          return (
            <div className="pics" key={i} onClick={() => getImg(item.image)}>
              <img src={item.image} alt="" style={{ width: '100%', alignItems: 'center' }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CheckBox;
