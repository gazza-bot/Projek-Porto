const bgUrl = [
  {
    id: "bg_1",
    url: "/src/assets/bg-1.jpg",
  },
  {
    id: "bg_2",
    url: "/src/assets/bg-2.jpg",
  },
  {
    id: "bg_3",
    url: "/src/assets/bg-3.jpg",
  },
  {
    id: "bg_4",
    url: "/src/assets/bg-4.jpg",
  },
  {
    id: "bg_5",
    url: "/src/assets/bg-5.JPG",
  },
  {
    id: "bg_6",
    url: "/src/assets/bg-6.JPG",
  },
  {
    id: "bg_7",
    url: "/src/assets/bg-7.jpg",
  },
  {
    id: "bg_8",
    url: "/src/assets/bg-8.jpg",
  },
];
export default function Hero() {
  const idxUrl = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 8),
  );

  return (
    <div
      id="hero"
      className="relative flex grow justify-center items-center min-h-screen overflow-hidden pt-16 md:pt-0"
    >
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <!-- bg-grids --> */}
        {idxUrl.map((idx, num) => {
          return <BgImage key={num} idx={idx} />;
        })}
      </div>
      {/* <!-- ini filter--> */}
      <div className="absolute z-5 inset-0 bg-black/40 backdrop-blur-sm backdrop-grayscale"></div>
      {/* <!-- content --> */}
      <div className="relative z-10 flex flex-col gap-3 items-center reveal">
        <p className="text-xl md:text-2xl sm:text-3xl text-tussock-300 font-cinzel border border-white/10 rounded-full px-3 bg-shuttle-gray-500/50 backdrop-blur-lg">
          Class of 2025
        </p>
        <img
          className="size-48 sm:size-56 md:size-64"
          src="/src/assets/logo-angkatan.png"
          alt=""
        />
        <h1 className="font-cinzel font-bold text-2xl md:text-5xl bg-linear-to-r from-tussock-300 via-tussock-200 to-tussock-300 bg-clip-text text-transparent text-shadow-1xs text-shadow-tussock-200 drop-shadow-black">
          ETERNITY GENERATION
        </h1>
        <h1 className="font-cinzel font-extralight text-1xl md:text-4xl text-ecru-white-200">
          Authentic Gray
        </h1>
        <p className="font-lora text-ecru-white-200 text-xl md:text-2xl">
          Together, Forever, Wherever
        </p>
      </div>
    </div>
  );
}

function BgImage({ idx }) {
  return (
    <div
      className="bg-cover bg-center aspect-square"
      style={{ backgroundImage: `url('${bgUrl[idx].url}')` }}
    ></div>
  );
}
