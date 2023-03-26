export default function ContactSocialIcons() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-3">
        <div className="flex sm:flex-row flex-col justify-center gap-10 lg:gap-56">
          {/* address */}
          <div className="flex flex-col gap-3 items-center">
            <span className="text-6xl">📍</span>
            <p className="font-bold">ADDRESS</p>
            <p>701 SE 10th, Amarillo, TX 79101</p>
          </div>

          {/* address */}
          <div className="flex flex-col gap-3 items-center">
            <span className="text-6xl">☎️</span>
            <p className="font-bold">PHONE</p>
            <p>+1 (806)-881-6810</p>
          </div>

          {/* address */}
          <div className="flex flex-col gap-3 items-center">
            <span className="text-6xl">💌</span>
            <p className="font-bold">EMAIL</p>
            <p>closedcarrot@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
