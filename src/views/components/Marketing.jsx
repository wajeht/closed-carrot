import cup from '../assets/images/marketing/orange-coffee-cup.png';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../utils/scroll';

export default function Marketing() {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-10 ">
      {/* title */}
      <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Join the Tech Hub&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            Belong to a network of like-minded professionals eager to create and learn. Members of
            the Closed Carrot Tech Hub have the opportunity to expand their skills and take on
            paying roles. Placement on projects is based on skillsets and desired time commitment.
          </p>
          <p className="mb-3">
            We're developers, designers, and creatives just like you. Join our community and feel at
            home. Complete our contact form to inquire about membership!
          </p>

          <br />
          {/* <Link
            to="/contact-us"
            title="ContactUs"
            className="px-5 py-3  bg-orange-500 hover:bg-orange-600 text-white rounded-md justify-center items-end font-bold"
            onClick={ScrollToTop}
          >
            Contact Us
          </Link> */}
        </div>
      </div>
    </div>
  );
}
