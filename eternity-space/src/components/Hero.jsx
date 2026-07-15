import Logo from "./Logo";
import Reveal from "./Reveal";
import Bg1 from "/src/assets/bg-1.jpg";
import Bg2 from "/src/assets/bg-2.jpg";
import Bg3 from "/src/assets/bg-3.jpg";
import Bg4 from "/src/assets/bg-4.jpg";
import Bg5 from "/src/assets/bg-5.JPG";
import Bg6 from "/src/assets/bg-6.JPG";
import Bg7 from "/src/assets/bg-7.jpg";
import Bg8 from "/src/assets/bg-8.jpg";

const bgUrl = [
  { id: "bg_1", url: Bg1 },
  { id: "bg_2", url: Bg2 },
  { id: "bg_3", url: Bg3 },
  { id: "bg_4", url: Bg4 },
  { id: "bg_5", url: Bg5 },
  { id: "bg_6", url: Bg6 },
  { id: "bg_7", url: Bg7 },
  { id: "bg_8", url: Bg8 },
];

// Pure generation outside the render function to comply with React 19 rules
const RANDOM_BG_INDICES = Array.from({ length: 12 }, () =>
  Math.floor(Math.random() * bgUrl.length)
);

function BgImage({ idx }) {
  const bg = bgUrl[idx];
  if (!bg) return null;
  return (
    <div
      className="bg-cover bg-center aspect-square"
      style={{ backgroundImage: `url('${bg.url}')` }}
    ></div>
  );
}

function HeroText() {
  return (
    <>
      <p className="text-xl sm:text-2xl md:text-3xl text-tussock-300 font-cinzel border border-white/10 rounded-full px-3 bg-shuttle-gray-500/50 backdrop-blur-lg">
        Class of 2025
      </p>
      <Logo styleLogo="size-48 sm:size-56 md:size-64" />
      <h1 className="font-cinzel font-bold text-2xl md:text-5xl bg-linear-to-r from-tussock-300 via-tussock-200 to-tussock-300 bg-clip-text text-transparent text-shadow-1xs text-shadow-tussock-200 drop-shadow-black">
        ETERNITY GENERATION
      </h1>
      <h2 className="font-cinzel font-extralight text-xl md:text-4xl text-ecru-white-200">
        Authentic Gray
      </h2>
      <p className="font-lora text-ecru-white-200 text-xl md:text-2xl">
        Together, Forever, Wherever
      </p>
    </>
  );
}

export function GrayFullFilter({ disableGray }) {
  return (
    <div
      className={`absolute z-5 inset-0 bg-black/40 backdrop-blur-sm ${
        disableGray ? "" : "backdrop-grayscale"
      }`}
    ></div>
  );
}

export default function Hero() {
  return (
    <div
      id="hero"
      className="relative flex grow justify-center items-center min-h-screen overflow-hidden pt-16 md:pt-0"
    >
      <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* bg-grids */}
        {RANDOM_BG_INDICES.map((idx, num) => (
          <BgImage key={`${idx}-${num}`} idx={idx} />
        ))}
      </div>
      <GrayFullFilter disableGray={true} />
      <Reveal className="relative z-10 flex flex-col gap-3 items-center">
        <HeroText />
      </Reveal>
    </div>
  );
}

