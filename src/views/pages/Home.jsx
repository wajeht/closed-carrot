import React from 'react';

import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto p-3 flex gap-3 py-10">
        <div className="grow">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas autem quod, debitis nemo
            mollitia cupiditate? Porro veniam omnis amet labore quis distinctio. Debitis fuga sunt
            earum blanditiis in rerum ipsa.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas autem quod, debitis nemo
            mollitia cupiditate? Porro veniam omnis amet labore quis distinctio. Debitis fuga sunt
            earum blanditiis in rerum ipsa.
          </p>
        </div>

        <div className="grow-0 w-70">
          <h2 className="font-bold text-5xl">Why?</h2>
          <br />
          <p className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-3 flex gap-3 py-10">
        <div className="grow-0 w-70">
          <h2 className="font-bold text-5xl">Why?</h2>
          <br />
          <p className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="grow">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas autem quod, debitis nemo
            mollitia cupiditate? Porro veniam omnis amet labore quis distinctio. Debitis fuga sunt
            earum blanditiis in rerum ipsa.
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas autem quod, debitis nemo
            mollitia cupiditate? Porro veniam omnis amet labore quis distinctio. Debitis fuga sunt
            earum blanditiis in rerum ipsa.
          </p>
        </div>
      </div>

      <Hero />
    </div>
  );
}
