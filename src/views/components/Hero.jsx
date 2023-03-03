import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="w-full bg-white-board bg-cover bg-center bg-[#FF8B46]">
      <div className="w-full flex flex-col gap-5 justify-center items-center bg-black/50 backdrop-brightness-75">
        <div className="flex justify-center items-center flex-col min-h-[300px] md:min-h-[500px]">
          <span className="text-white font-bold md:text-4xl text-xl mb-2 mx-1 text-center">
            <span>
              <span>Unlock your digital potential with</span>
              <span className="px-1"></span>
              <span className="underline decoration-4 decoration-orange-500">Closed Carrot</span>.
            </span>
            <br />
            Let us help you achieve your goals.
          </span>

          <Link
            to="/contact-us"
            title="Get started today!"
            className="px-5 py-3 text bg-orange-500 hover:bg-orange-600 text-white rounded-md"
          >
            Get started today!
          </Link>
        </div>
      </div>
    </div>
  );
}
