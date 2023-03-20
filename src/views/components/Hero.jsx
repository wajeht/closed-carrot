import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="w-full bg-white-board bg-cover bg-center bg-[#FF8B46]">
      <div className="w-full flex flex-col gap-5 justify-center items-center bg-black/50 backdrop-brightness-75">
        <div className="flex justify-center items-center flex-col min-h-[300px] md:min-h-[500px]">
          <p className="text-white font-bold w-8/12  md:w-full md:text-4xl text-xl mb-5 mx-1 text-center fade-in-heading">
            <span>
              <span>Unlock your digital potential with</span>
              <span className="px-1"></span>
              <span className="underline decoration-4 decoration-orange-500">Closed Carrot</span>.
            </span>
            <br />
            Let us help you achieve your goals.
          </p>

          <Link
            to="/contact-us"
            title="Contact us"
            className="px-5 py-3 text bg-orange-500 hover:bg-orange-600 text-white rounded-md font-bold fade-in-heading animation-delay-1"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
