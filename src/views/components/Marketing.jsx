import cup from '../assets/images/marketing/orange-coffee-cup.png';
import { Link } from 'react-router-dom';
export default function Marketing() {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-10 ">
      {/* title */}
      <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What about you?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h2>
      <br />
      <br />

      {/* paragraph */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6">
        {/* image */}
        <div>
          <img src={cup} alt="" />
        </div>

        {/* words */}

        <div className="col-span-2 flex justify-center items-center flex-col">
          <p className="mb-3">
            Are you looking to develop your tech skills and gain hands-on experience in a supportive
            and collaborative community? Considered joining Closed Carrot as a contributing member!
          </p>
          <p className="mb-3">
            Are you an entrepreneur or small business owner seeking innovative tech solutions to
            drive your growth and success? Closed Carrot is a cooperative full of talented members
            ready to create your vision!
          </p>
          <p className="mb-3">
            We are a dynamic and forward-thinking tech ecosystem that values learning, growth, and
            social responsibility. Our members are passionate about using technology to impact the
            community positively.
          </p>
          <br />
          <Link
            to="/contact-us"
            title="ContactUs"
            className="px-5 py-3  bg-orange-500 hover:bg-orange-600 text-white rounded-md justify-center items-end"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
