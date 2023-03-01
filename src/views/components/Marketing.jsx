import cup from '../assets/images/marketing/orange-coffee-cup.png';

export default function Marketing() {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-10">
      {/* title */}
      <h2 className="text-2xl font-bold text-center underline decoration-3 decoration-orange-500 underline-offset-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What about you?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h2>
      <br />
      <br />

      {/* paragraph */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
        {/* image */}
        <div>
          <img src={cup} alt="" />
        </div>

        {/* words */}

        <div className="col-span-2">
          <p className="mb-3">
            Are you a student in Amarillo looking to develop your tech skills and gain hands-on
            experience in a supportive and collaborative community? Have you considered joining the
            Closed Carrot?
          </p>
          <p className="mb-3">
            Are you an entrepreneur or small business owner in Amarillo seeking innovative tech
            solutions to drive your growth and success? Have you explored partnering with the
            talented and passionate members of Closed Carrot?
          </p>
          <p className="mb-3">
            Do you want to be part of a dynamic and forward-thinking tech ecosystem that values
            learning, growth, and social responsibility? Thinking about joining and contributing to
            a mission and vision?
          </p>
          <p className="mb-3">
            Are you passionate about using technology to make a positive impact in your community
            and beyond? Have you considered joining the Closed Carrot and collaborating with
            like-minded individuals to build innovative and impactful projects?
          </p>
        </div>
      </div>
    </div>
  );
}
