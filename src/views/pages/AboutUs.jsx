import React from 'react';
import data from '../data/users';
import { SiGithub } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

export default function AboutUs() {
  return (
    <div className="fade-in">
      <div className="bg-orange-100">
        <div className=" mx-auto w-full max-w-7xl px-3 py-10">
          <br />
          <br />
          <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advisors&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {data.map((user, idx) => {
              return user.title == 'Advisor' ? (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  {/* image */}
                  <img
                    className="w-full h-72 object-none rounded-md hover:object-none hover:object-scale-down"
                    src={user.image}
                    alt={user.name}
                  />

                  {/* bio */}
                  <div className="flex flex-col gap-2 mt-5">
                    <h3 className="text-center ">
                      <span className="text-2xl font-bold underline decoration-3 decoration-orange-500 underline-offset-4">
                        &nbsp;&nbsp;{user.name}&nbsp;&nbsp;
                      </span>
                      <span className="font-light text-xl"> - {user.title} </span>
                    </h3>

                    <p className="p-3 rounded-sm font-light mt-3">{user.bio}</p>

                    {user.linked || user.git || user.email ? (
                      <div className="inline-flex w-56 h-12 px-12 m-auto justify-around">
                        {user.git && (
                          <a href={user.git} target="_blank" rel="noreferrer">
                            <SiGithub className="text-4xl" />
                          </a>
                        )}
                        {user.linked && (
                          <a href={user.linked} target="_blank" rel="noreferrer">
                            <ImLinkedin className="text-4xl" />
                          </a>
                        )}
                        {user.email && (
                          <a href={`mailto:${user.email}`} target="_blank" rel="noreferrer">
                            <MdEmail className="text-4xl hover:cursor-pointer	" />
                          </a>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : (
                ''
              );
            })}
          </div>
          <br />
          <br />
          {/* NON-ADVISORS */}
          <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((user, idx) => {
              return user.title != 'Advisor' ? (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  {/* image */}
                  <img
                    className="w-full h-72 object-cover rounded-md hover:object-none hover:object-scale-down"
                    src={user.image}
                    alt={user.name}
                  />

                  {/* bio */}
                  <div className="flex flex-col gap-2 mt-5">
                    <h3 className="text-center ">
                      <span className="text-2xl font-bold underline decoration-3 decoration-orange-500 underline-offset-4">
                        &nbsp;&nbsp;{user.name}&nbsp;&nbsp;
                      </span>
                      <span className="font-light text-xl"> - {user.title} </span>
                    </h3>

                    <p className="p-3 rounded-sm font-light mt-3">{user.bio}</p>

                    {user.linked || user.git || user.email ? (
                      <div className="inline-flex w-56 h-12 px-12 m-auto justify-around">
                        {user.git && (
                          <a href={user.git} target="_blank" rel="noreferrer">
                            <SiGithub className="text-4xl" />
                          </a>
                        )}
                        {user.linked && (
                          <a href={user.linked} target="_blank" rel="noreferrer">
                            <ImLinkedin className="text-4xl" />
                          </a>
                        )}
                        {user.email && (
                          <a href={`mailto:${user.email}`} target="_blank" rel="noreferrer">
                            <MdEmail className="text-4xl hover:cursor-pointer	" />
                          </a>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : (
                ''
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
