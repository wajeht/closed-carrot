import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="flex h-screen justify-center items-center flex-col max-h-[500px]">
      <div className="w-full h-screen bg-cover bg-center bg-white-board">
        <div className="w-full h-full flex  flex-col gap-5 justify-center items-center bg-black/50 backdrop-brightness-75">
          <span className="text-white font-bold text-4xl mx-1 md:w-1/2 text-center">
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
