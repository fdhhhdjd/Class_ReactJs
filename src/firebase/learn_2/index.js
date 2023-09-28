import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

function Learn_2() {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [isFlag, setIsFlag] = useState(false);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    clearInput();
    setIsFlag(!isFlag);
  };

  const clearInput = () => {
    setNewName('');
    setNewAge(0);
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
    setIsFlag(!isFlag);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    setIsFlag(!isFlag);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, [isFlag]);

  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          Learn_2;
          setNewName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />

      <button onClick={createUser}> Create User</button>
      {users.map((user, index) => {
        return (
          <div key={index}>
            {' '}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {' '}
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {' '}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Learn_2;
