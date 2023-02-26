import Ipad from '../assets/images/marketing//woman-on-ipad.png';
import Mic from '../assets/images/marketing/podcast-man-and-woman.png';
import Computer from '../assets/images/marketing/group-around-computer.png';

export default function CoreValues() {
  return (
    <div className="bg-orange-50">
      <div className="mx-auto w-full max-w-7xl px-3 py-10">
        <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Core Values&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
        <br />
        <br />
        <div className="flex gap-5 ">
          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={Ipad} alt="woman on ipad" />
            <div>
              <h2 className="font-bold text-xl text-center mb-2">Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, corporis
                accusamus. Itaque voluptatum repellendus quisquam excepturi possimus ipsam ea
                commodi numquam, perspiciatis neque aliquid facere velit adipisci blanditiis quod
                eaque.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={Mic} alt="podcast man and woman" />
            <div>
              <h2 className="font-bold text-xl text-center mb-2">Our Plan</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, corporis
                accusamus. Itaque voluptatum repellendus quisquam excepturi possimus ipsam ea
                commodi numquam, perspiciatis neque aliquid facere velit adipisci blanditiis quod
                eaque.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={Computer} alt="ground around computer" />
            <div>
              <h2 className="font-bold text-xl text-center mb-2">Our Vision</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, corporis
                accusamus. Itaque voluptatum repellendus quisquam excepturi possimus ipsam ea
                commodi numquam, perspiciatis neque aliquid facere velit adipisci blanditiis quod
                eaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
