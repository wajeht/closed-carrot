import React from 'react';
import data from '../data/users';

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
            Closed Carrot: Amarillo Tech Hub, a tech cooperative startup founded by a group of
            passionate and ambitious students in Amarillo, Texas. Our mission is to provide
            innovative and affordable technology solutions that enable businesses and individuals to
            thrive in a rapidly evolving digital landscape. We pride ourselves on our commitment to
            quality, creativity, and sustainability, and we are dedicated to delivering exceptional
            customer service and support to all our clients.
          </p>
          <br />
          <p>
            As a student-led cooperative, we bring a fresh and dynamic perspective to the tech
            industry, combining our passion for innovation with the latest industry trends and best
            practices. Our team of experts has diverse backgrounds in software development, web
            design, digital marketing, and data analytics, enabling us to offer a wide range of
            services tailored to the unique needs of our clients. We believe in the power of
            collaboration and strive to work closely with our clients to co-create technology
            solutions that are both effective and efficient.
          </p>
          <br />
          <p>
            At Closed Carrot: Amarillo Tech Hub, we are deeply committed to our local community and
            are passionate about promoting digital literacy and access to technology. We believe in
            using technology as a tool for positive change, and we are dedicated to operating our
            business in an environmentally responsible manner. We are committed to sustainability
            and utilize green practices wherever possible to minimize our impact on the environment.
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
          <div className="grid grid-cols-3 gap-5">
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
