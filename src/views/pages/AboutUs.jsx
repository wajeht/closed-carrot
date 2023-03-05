import React from 'react';
import data from '../data/users';
import { SiGithub } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';

export default function AboutUs() {
  return (
    <>
      <div>
        <div className="mx-auto w-full max-w-7xl px-3 py-10">
          <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our History&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <br />
          <br />
          <p>
            Closed Carrot is a group of technology professionals in Amarillo, Texas, providing
            hands-on tech industry experience. We foster an inclusive community of passionate
            individuals committed to developing their skills through teamwork, mentorship, and
            professional development. We aim to create a supportive and engaging environment for
            members to explore their interests, pursue their passions, and develop the skills and
            knowledge needed to succeed in the fast-paced tech industry.
          </p>
          <br />
          <p>
            As a self-governed cooperative, we bring a fresh perspective to the tech industry by
            combining innovation with industry trends and best practices. With experts in software
            development, web design, digital marketing, and data analytics, we offer various
            services tailored to our client&apos;s needs. We value collaboration and work closely
            with our clients to co-create technology solutions that are effective and efficient.
          </p>
          <br />
          <p>
            Closed Carrot: Amarillo’s Tech Hub is deeply committed to promoting digital literacy and
            access to technology in the local community. We believe in technology as a tool for
            positive change and operate our business in an environmentally responsible manner.
            Members are committed to sustainability and minimizing its environmental impact by
            utilizing green practices wherever possible.
          </p>

          <br />
        </div>
      </div>

      <div className="bg-orange-100">
        <div className=" mx-auto w-full max-w-7xl px-3 py-10">
          <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h2>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((user, idx) => {
              return (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  {/* image */}
                  <img
                    className="w-full h-72 object-cover rounded-md"
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

                    {user.linked || user.git ? (
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
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
