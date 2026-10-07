import { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchUsers() {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  /*  useEffect(() => {
    fetchUsers();
  }, []); */

  return (
    <div>
      <button onClick={fetchUsers}>Kullanıcıları Getir!</button>
      {isLoading && 'Yükleniyor!'}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>Name: {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
