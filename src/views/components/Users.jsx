import React from 'react';
import { useQuery } from 'react-query';

export default function Users() {
  const { isLoading, error, data } = useQuery('users', () =>
    fetch('/api/v1/users').then((res) => res.json()),
  );

  if (isLoading) {
    return <div>🔄 Loading...</div>;
  }

  if (error) {
    return <div>❌ Error!</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-5 ">
      {data.data.map((user) => {
        return (
          <div key={user.id} className="flex gap-3 bg-neutral-50 p-5 rounded-md">
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
