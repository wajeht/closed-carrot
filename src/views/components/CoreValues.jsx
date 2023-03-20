// import ipad from '../assets/images/marketing/woman-on-ipad.png';
// import mic from '../assets/images/marketing/podcast-man-and-woman.png';
// import computer from '../assets/images/marketing/group-around-computer.png';
import hands from '../assets/images/marketing/multiple-hands-at-computer.jpg';
import group from '../assets/images/marketing/talking-group.jpg';
import woman from '../assets/images/marketing/woman-pretending-to-code.jpg';

export default function CoreValues() {
  return (
    <div className="bg-orange-50">
      <div className="mx-auto w-full max-w-7xl px-3 py-10">
        <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={group} alt="woman on ipad" />
            <div className="mt-3">
              <h2 className="font-bold text-xl text-center mb-2">Our Story</h2>
              <p>
                We are a group of technology professionals wanting to further our skills after
                finishing a full-stack web development course. Rather than parting ways after the
                cohort, we decided to stay connected and collaborate on projects. This network of
                talent founded the tech hub in 2023.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={hands} alt="podcast man and woman" />
            <div className="mt-3">
              <h2 className="font-bold text-xl text-center mb-2">Our Mission</h2>
              <p>
                We deliver exceptional service, cutting-edge technology, and design products that
                create a seamless user experience. We empower technology professionals to succeed in
                a constantly evolving industry while providing a space for creativity, fairness, and
                community.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={woman} alt="ground around computer" />
            <div className="mt-3">
              <h2 className="font-bold text-xl text-center mb-2">Our Vision</h2>
              <p>
                Create a trusted network of motivated, talented individuals ready to expand our
                knowledge and expertise. Build quality products through learning, collaboration, and
                applied science. Inspire the next generation of tech leaders. Start high-tech
                businesses for the area’s economic development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
