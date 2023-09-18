import { useState } from 'react';

const App = () => {
  const [friends, setFriends] = useState(['Hao', 'Tai']);

  const addOne = () => setFriends([...friends, 'HuXn']);

  const removeOne = () => setFriends(friends.filter((f) => f !== 'Tai'));

  const updateOne = () => {
    setFriends(friends.map((f) => (f === 'Hao' ? 'Hao Smith' : f)));
  };

  return (
    <div>
      {friends.map((t) => (
        <li key={Math.random()}>{t}</li>
      ))}
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </div>
  );
};

export default App;
