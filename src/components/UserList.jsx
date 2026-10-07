import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('Şapka');

  function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  /* fetchUsers(); */

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [title]);

  console.log('component render oldu!');

  return (
    <div>
      {/*  <button onClick={fetchUsers}>Kullanıcıları Getir!</button> */}
      <button onClick={() => setTitle('Çanta')}>Title Değiştir!</button>
      <b>{title}</b>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>Name: {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
