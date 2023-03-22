import {
  FaGlobeAmericas,
  FaCameraRetro,
  FaRegNewspaper,
  FaServer,
  FaCode,
  FaFileAlt,
  FaTeamspeak,
  FaQuestion,
  FaRegCommentAlt,
  FaMobileAlt,
} from 'react-icons/fa';

import { IoIosMegaphone, IoMdCheckmarkCircle } from 'react-icons/io';
import { ImNewspaper } from 'react-icons/im';

export default function Services() {
  return (
    <div className="bg-orange-50">
      <div className="mx-auto w-full max-w-7xl px-3 py-10">
        <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h2>
        <br />
        <br />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {/* WEB DEV */}

          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <FaCode className="text-5xl text-orange-600 mx-auto m-5 group-hover:text-white" />
              <span className="text-center">
                <h4 className="font-bold">Website Development</h4>
                <p>Custom websites developed and maintained to fit your business operation.</p>
              </span>
            </div>
          </div>

          {/* DIGITAL MARKETING */}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <FaFileAlt className="text-5xl text-orange-600 group-hover:text-white mx-auto m-5" />
              <span className="text-center">
                <h4 className="font-bold">Project Management</h4>
                <p>
                  Timely organization of teams & assigned tasks for short and long-term projects
                </p>
              </span>
            </div>
          </div>

          {/* Digital Content Creation*/}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <ImNewspaper className="text-5xl text-orange-600  group-hover:text-white mx-auto m-5" />
              <span className="text-center">
                <h4 className="font-bold">Digital Content Creation</h4>
                <p>
                  Bringing ideas to life by creating cool graphics, videos, and engaging blog posts.
                </p>
              </span>
            </div>
          </div>

          {/* Website Hosting and Server Management */}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <IoIosMegaphone className="text-5xl text-orange-600  group-hover:text-white mx-auto m-5" />
              <span className="text-center">
                <h4 className="font-bold">Marketing</h4>
                <p>Content creation & ad placement to accurately target your audience</p>
              </span>
            </div>
          </div>

          {/* IT Support */}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <IoMdCheckmarkCircle className="text-5xl text-orange-600  group-hover:text-white mx-auto m-5 " />
              <span className="text-center">
                <h4 className="font-bold"> Branding</h4>
                <p>Fresh logos and identities for new and existing brands</p>
              </span>
            </div>
          </div>

          {/* Tutoring Services */}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <FaMobileAlt className="text-5xl text-orange-600  group-hover:text-white mx-auto m-5 " />

              <span className="text-center">
                <h4 className="font-bold">App Development</h4>
                <p>Apps designed to improve your services & user experience</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
