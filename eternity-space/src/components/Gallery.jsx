import Reveal from "./Reveal";
import Gal1 from "/src/assets/gallery-assets/gal-1.webp";
import Gal2 from "/src/assets/gallery-assets/gal-2.webp";
import Gal3 from "/src/assets/gallery-assets/gal-3.webp";
import Gal4 from "/src/assets/gallery-assets/gal-4.webp";
import Gal5 from "/src/assets/gallery-assets/gal-5.webp";
import Gal6 from "/src/assets/gallery-assets/gal-6.webp";
import Gal7 from "/src/assets/gallery-assets/gal-7.webp";
import Gal8 from "/src/assets/gallery-assets/gal-8.webp";
import Gal9 from "/src/assets/gallery-assets/gal-9.jpg";
import Gal10 from "/src/assets/gallery-assets/gal-10.webp";
import Gal11 from "/src/assets/gallery-assets/gal-11.webp";
import Gal12 from "/src/assets/gallery-assets/gal-12.webp";

const cardInfo = [
  {
    url: Gal1,
    desc: "Depa and Ndruwa",
  },
  {
    url: Gal2,
    desc: "Prof. Wignya",
  },
  {
    url: Gal3,
    desc: "El Jakpo dan Rohman",
  },
  {
    url: Gal4,
    desc: "Detik Detik👀",
  },
  {
    url: Gal5,
    desc: "Our G. O. A. T.🐐",
  },
  {
    url: Gal6,
    desc: "Scout Abis",
  },
  {
    url: Gal7,
    desc: "Makan Bang",
  },
  {
    url: Gal8,
    desc: "Pose Guys📸",
  },
  {
    url: Gal9,
    desc: "Couple Fav",
  },
  {
    url: Gal10,
    desc: "Kapan Main Bola Lagi?",
  },
  {
    url: Gal11,
    desc: "Osda Rek",
  },
  {
    url: Gal12,
    desc: "Pembina - Pembina Kece",
  },
];

function GalleryHeader() {
  return (
    <>
      <Reveal>
        <h2 className="font-gallery">Gallery</h2>
      </Reveal>
      <Reveal>
        <p className="font-poppins font-medium pl-10 text-2xl text-ecru-white-200">
          Living Up Our Memories
        </p>
      </Reveal>
    </>
  );
}

function GalleryCard({ cardInfo }) {
  return (
    <div
      style={{ backgroundImage: `url(${cardInfo.url})` }}
      className="gallery-card group bg-cover bg-center aspect-square"
    >
      <div className="gallery-shadow"></div>
      <p className="gallery-text">{cardInfo.desc}</p>
    </div>
  );
}

function FormImage() {
  return (
    <div className="col-span-1 sm:col-span-2 md:col-span-3 bg-tussock-200/10 border-2 border-dashed border-tussock-400 rounded-2xl flex flex-col gap-5 items-center justify-center">
      <h2 className="pt-5 text-center text-xl md:text-2xl font-poppins font-medium bg-linear-to-b from-tussock-500 via-tussock-400 to-tussock-300 bg-clip-text text-transparent">
        BAGI TEMEN TEMEN YANG PENGEN UP FOTO-FOTO KENANGAN
      </h2>
      <p className="text-xl md:text-2xl font-poppins font-thin text-ecru-white-200 text-center">
        Boleh Hubungin Admin Disini yaa😆
      </p>
      <a
        className="border rounded-2xl border-white/40 px-5 mb-5 text-2xl font-lora font-light text-ecru-white-200 transition duration-200 hover:scale-105 shadow-xl"
        href="https://wa.me/6285648588081"
      >
        Admin
      </a>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="gallery-bg relative h-max bg-linear-to-t from-shuttle-gray-700 from-80% via-shuttle-gray-600 via-90% to-shuttle-gray-500 to-95%"
    >
      <GalleryHeader />
      <Reveal className="grid-gallery">
        {cardInfo.map((card) => (
          <GalleryCard cardInfo={card} key={card.url} />
        ))}
        <FormImage />
      </Reveal>
    </section>
  );
}

