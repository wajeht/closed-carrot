export default function ContactHero() {
  return (
    <>
      <div className="w-full bg-desk bg-cover bg-center bg-[#FF8B46]">
        <div className="w-full flex flex-col gap-5 justify-center items-center bg-black/50 backdrop-brightness-75">
          <div className="flex justify-center items-center flex-col min-h-[300px] md:min-h-[500px]">
            <h2 className="text-white font-bold md:text-4xl text-xl mb-2 text-center fade-in-heading">
              We&apos;d love to hear from you
            </h2>
            <p className="text-white sm:w-full w-1/2 font-light text-center fade-in-heading animation-delay-1">
              Complete our contact form below to book a consultation with our project management
              team!
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
