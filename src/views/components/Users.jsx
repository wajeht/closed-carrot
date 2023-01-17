import { useState, useEffect } from 'react';
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const json = await res.json();
      setUsers(json.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {users.map((user) => {
        return (
          <div key={user.id} className="flex gap-3 bg-neutral-50 p-5">
            <img src={user.avatar} className="rounded-md" />
            <div>
              <p>👶 {user.username}</p>
              <p>💌 {user.email}</p>
              <p>🔒 {user.password}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
