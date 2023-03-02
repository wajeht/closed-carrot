import React from 'react';
import data from '../data/users';
import linkedin from '../assets/images/icons/linkedin.svg';
import github from '../assets/images/icons/github.svg';

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
            The Closed Carrot is a student-led organization in Amarillo, Texas that aims to provide
            hands-on experience in the tech industry through innovative projects. They foster an
            inclusive community of passionate individuals committed to developing their skills
            through teamwork, mentorship, and professional development. Their goal is to create a
            supportive and engaging environment for students to explore their interests, pursue
            their passions, and develop the skills and knowledge needed to succeed in the fast-paced
            tech industry.
          </p>
          <br />
          <p>
            This student-led cooperative brings a fresh perspective to the tech industry by
            combining innovation with industry trends and best practices. With experts in software
            development, web design, digital marketing, and data analytics, they offer a range of
            services tailored to their clients' needs. They value collaboration and work closely
            with their clients to co-create technology solutions that are effective and efficient.
          </p>
          <br />
          <p>
            Closed Carrot: Amarillo Tech Hub is deeply committed to promoting digital literacy and
            access to technology in the local community. They believe in technology as a tool for
            positive change and operate their business in an environmentally responsible manner. The
            organization is committed to sustainability and minimizes its impact on the environment
            by utilizing green practices wherever possible.
          </p>
          <br />
          <p>
            Thank you for choosing Closed Carrot: Amarillo Tech Hub as your trusted partner in
            achieving your digital goals. We are excited to work with you and help you navigate the
            complex world of technology to realize your business&apos;s full potential.
          </p>
          <br />
        </div>
      </div>

      <div className=" bg-orange-100">
        <div className=" mx-auto w-full max-w-7xl px-3 py-10">
          <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Teams&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                        {user.linked && (
                          <img
                            src={linkedin}
                            href={user.linked}
                            alt="LinkedIn"
                            className=" w-12 h-auto"
                          />
                        )}
                        {user.git && (
                          <img src={github} href={user.git} alt="GitHub" className="w-12 h-auto" />
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
