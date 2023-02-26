import React from 'react';
import { useQuery } from 'react-query';
import { FaSpinner, FaSkull, FaUserAlt } from 'react-icons/fa';
import { AiTwotoneMail, AiFillLock } from 'react-icons/ai';

export default function Users() {
  const { isLoading, error, data } = useQuery('users', async () =>
    fetch('/api/v1/users').then((res) => res.json()),
  );

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <FaSpinner />
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2">
        <FaSkull />
        Error!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-5 ">
      {data.data.map((user) => {
        return (
          <div key={user.id} className="flex flex-col gap-3 bg-slate-200 p-5 rounded-md  shadow-md">
            <img src={user.avatar} alt={user.username} className="rounded-md" />
            <div>
              <p className="flex items-center gap-2">
                <FaUserAlt />
                {user.username}
              </p>
              <p className="flex items-center gap-2">
                <AiTwotoneMail />
                {user.email}
              </p>
              <p className="flex items-center gap-2">
                <AiFillLock />
                {user.password}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
