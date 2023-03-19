import {
  FaGlobeAmericas,
  FaCameraRetro,
  FaRegNewspaper,
  FaServer,
  FaTeamspeak,
  FaQuestion,
} from 'react-icons/fa';

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
              <FaGlobeAmericas className="text-5xl text-orange-600 mx-auto m-5 group-hover:text-white" />
              <span className="text-center">
                <h4 className="font-bold">Website Development</h4>
                <p>Building websites and web applications that look great and work flawlessly.</p>
              </span>
            </div>
          </div>

          {/* DIGITAL MARKETING */}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <FaCameraRetro className="text-5xl text-orange-600 group-hover:text-white mx-auto m-5" />
              <span className="text-center">
                <h4 className="font-bold">Digital Marketing</h4>
                <p>
                  Getting the word out about awesome products and services through social media,
                  emails, and search engines.
                </p>
              </span>
            </div>
          </div>

          {/* Digital Content Creation*/}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <FaRegNewspaper className="text-5xl text-orange-600  group-hover:text-white mx-auto m-5" />
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
              <FaServer className="text-5xl text-orange-600  group-hover:text-white mx-auto m-5" />
              <span className="text-center">
                <h4 className="font-bold">Website Hosting and Server Management</h4>
                <p>
                  Making sure your website stays up and running smoothly, like a well-oiled machine.
                </p>
              </span>
            </div>
          </div>

          {/* IT Support */}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <FaTeamspeak className="text-5xl text-orange-600  group-hover:text-white mx-auto m-5 " />
              <span className="text-center">
                <h4 className="font-bold"> IT Support</h4>
                <p>
                  Helping you overcome tech troubles and keeping your computer systems running
                  smoothly.
                </p>
              </span>
            </div>
          </div>

          {/* Tutoring Services */}
          <div className="group">
            <div className="bg-white rounded-md p-5 shadow-md flex flex-col gap-4  group-hover:text-white group-hover:bg-orange-500">
              <FaQuestion className="text-5xl text-orange-600  group-hover:text-white mx-auto m-5 " />

              <span className="text-center">
                <h4 className="font-bold"> Tutoring Services</h4>
                <p>
                  Sharing knowledge and helping students reach their academic goals, one step at a
                  time.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
