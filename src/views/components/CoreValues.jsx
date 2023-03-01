import ipad from '../assets/images/marketing/woman-on-ipad.png';
import mic from '../assets/images/marketing/podcast-man-and-woman.png';
import computer from '../assets/images/marketing/group-around-computer.png';

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
            <img src={ipad} alt="woman on ipad" />
            <div>
              <h2 className="font-bold text-xl text-center mb-2">Our Mission</h2>
              <p>
                The Closed Carrot's mission is to provide students in Amarillo, Texas with hands-on
                experience in the tech industry through collaborative and innovative projects. They
                strive to foster an inclusive community of technology enthusiasts committed to
                developing their skills through teamwork, mentorship, and professional development
                opportunities. Their goal is to create a supportive and engaging environment where
                students can explore their interests, pursue their passions, and develop the skills
                and knowledge needed to succeed in the rapidly evolving tech industry.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={mic} alt="podcast man and woman" />
            <div>
              <h2 className="font-bold text-xl text-center mb-2">Our Plan</h2>
              <p>
                The organization's intention is to empower students in Amarillo, Texas with the
                necessary skills, knowledge, and opportunities to thrive in the tech industry. They
                aim to inspire students to pursue their interests and passions in technology through
                a supportive and collaborative environment. The organization values innovation,
                creativity, and continuous learning, and strives to create a culture of growth,
                competence, and stability through their projects, events, and initiatives. Their
                goal is to contribute to the growth and success of the tech industry in Amarillo and
                beyond.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={computer} alt="ground around computer" />
            <div>
              <h2 className="font-bold text-xl text-center mb-2">Our Vision</h2>
              <p>
                The Amarillo Tech Co-op's vision is to be a driving force in the development of a
                thriving and innovative tech ecosystem in Amarillo, Texas. They envision a future
                where students have access to resources, opportunities, and support needed to pursue
                their dreams and build successful careers in the tech industry. The organization
                aspires to create a community that values lifelong learning, creativity, and
                collaboration, and values speed, surprise, and violence of action. Their ultimate
                goal is to inspire and empower the next generation of tech leaders who will shape
                the future of Amarillo and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
