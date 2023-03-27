export default function ContactSocialIcons() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl p-3">
        <div className="flex sm:flex-row flex-col justify-center gap-10 lg:gap-56">
          {/* address */}
          <a
            href="https://www.google.com/maps/place/701+SE+10th+Ave,+Amarillo,+TX+79101/@35.2027633,-101.8321628,17z/data=!3m1!4b1!4m6!3m5!1s0x87014f1d7d3170e7:0x3bb2381de6450418!8m2!3d35.2027633!4d-101.8299741!16s%2Fg%2F11c1kmw8wz"
            className="flex flex-col gap-3 items-center"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-6xl">📍</span>
            <p className="font-bold">ADDRESS</p>
            <p>701 SE 10th, Amarillo, TX 79101</p>
          </a>

          {/* phone */}
          <a
            href="tel:8068816810"
            className="flex flex-col gap-3 items-center"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-6xl">☎️</span>
            <p className="font-bold">PHONE</p>
            <p>+1 (806)-881-6810</p>
          </a>

          {/* email */}
          <a href={'mailto:closedcarrot@gmail.com'} className="flex flex-col gap-3 items-center">
            <span className="text-6xl">💌</span>
            <p className="font-bold">EMAIL</p>
            <p>closedcarrot@gmail.com</p>
          </a>
        </div>
      </div>
    </>
  );
}
