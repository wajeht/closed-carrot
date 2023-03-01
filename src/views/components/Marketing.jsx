import cup from '../assets/Images/marketing/orange-coffee-cup.png';

export default function Marketing() {
  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-10">
      <div className="grid grid-cols-3 gap-6">
        {/* image */}
        <div>
          <img src={cup} alt="" />
        </div>

        {/* words */}
        <div className="col-span-2">
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit vitae
            facere minima quo hic. Tempore quod expedita vero itaque recusandae? Harum corrupti
            omnis rem tempora voluptatum vero expedita nam.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit vitae
            facere minima quo hic. Tempore quod expedita vero itaque recusandae? Harum corrupti
            omnis rem tempora voluptatum vero expedita nam.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit vitae
            facere minima quo hic. Tempore quod expedita vero itaque recusandae? Harum corrupti
            omnis rem tempora voluptatum vero expedita nam.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit vitae
            facere minima quo hic. Tempore quod expedita vero itaque recusandae? Harum corrupti
            omnis rem tempora voluptatum vero expedita nam.
          </p>
        </div>
      </div>
    </div>
  );
}
