import React from 'react';
import data from '../utils/data';

export default function AboutUs() {
  return (
    <div className="flex flex-col p-5 items-center gap-5">
      <div className="grid grid-cols-2 gap-5">
        {data.map((user) => {
          return (
            <div className="bg-green-100 shadow-md p-4 rounded-md">
              {/* image */}
              <img className="w-full" src={user.image} alt={user.name} />

              {/* bio */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="font-bold text-2xl">{user.name}</div>
                <div>{user.bio}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
