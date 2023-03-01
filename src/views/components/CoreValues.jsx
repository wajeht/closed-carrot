import ipad from '../assets/Images/marketing/woman-on-ipad.png';
import mic from '../assets/Images/marketing/podcast-man-and-woman.png';
import computer from '../assets/Images/marketing/group-around-computer.png';

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
                Our mission at the Closed Carrot is to provide students in Amarillo, Texas with the
                opportunity to gain hands-on experience in the tech industry through collaborative
                and innovative projects. As a student-led organization, we strive to foster an
                inclusive community of individuals who are passionate about technology and who are
                committed to developing their skills through teamwork, mentorship, and professional
                development opportunities. Our goal is to create a supportive and engaging
                environment where students can explore their interests, pursue their passions, and
                develop the skills and knowledge they need to succeed in the rapidly evolving tech
                industry.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={mic} alt="podcast man and woman" />
            <div>
              <h2 className="font-bold text-xl text-center mb-2">Our Plan</h2>
              <p>
                Our intention at the is to empower students in Amarillo, Texas with the skills,
                knowledge, and opportunities they need to thrive in the tech industry. By providing
                a supportive and collaborative environment, we aim to inspire students to pursue
                their interests and passions in technology, to learn from each other and from
                experienced mentors, and to build a community that values innovation, creativity,
                and continuous learning. Through our projects, events, and initiatives, we strive to
                create a culture of growth, competence, and stability, and to contribute to the
                growth and success of the tech industry in Amarillo and beyond.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md p-5 shadow-md">
            <img src={computer} alt="ground around computer" />
            <div>
              <h2 className="font-bold text-xl text-center mb-2">Our Vision</h2>
              <p>
                Our vision at the Amarillo Tech Co-op is to be a driving force in the development of
                a thriving and innovative tech ecosystem in Amarillo, Texas. We envision a future
                where students have access to the resources, opportunities, and support they need to
                pursue their dreams and build successful careers in the tech industry. We aspire to
                create a community that fosters lifelong learning, creativity, and collaboration,
                and that values speed, surprise, and violence of action. Our ultimate goal is to
                inspire and empower the next generation of tech leaders who will shape the future of
                Amarillo and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
