import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import Footer from './Footer.jsx';
import Hero from './Hero.jsx';
// TODO: Refactor Hero Section, Footer.
export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.isIntersecting);
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  const elements = document.querySelectorAll(".reveal");
  
  elements.forEach((el) => {
    observer.observe(el);
  });

  return () => {
    elements.forEach((el) => observer.unobserve(el));
    observer.disconnect();
  };

  }, [])
  return (
    <div className="scroll-smooth">
      <Navbar />
      {/* <!-- SECTION HERO --> */}
      <Hero />

      {/* <!-- Gallery Section --> */}
      <section
        id="Gallery"
        className="gallery-bg relative h-max bg-linear-to-t from-shuttle-gray-700 from-80% via-shuttle-gray-600 via-90% to-shuttle-gray-500 to-95%"
      >
        <h1 className="reveal font-gallery">Gallery</h1>
        <p className="reveal font-popins font-medium pl-10 text-2xl text-ecru-white-200">
          Living Up Our Memories
        </p>
        <div className="reveal grid-gallery">
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-1.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Depa and Ndruwa</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-2.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Prof. Wignya</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-3.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">
              El Jakpo dan Rohman (uapik lek mangap)
            </h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-4.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Detik Detik👀</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-5.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Our G. O. A. T.🐐</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-6.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Scout Abies</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-7.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Makan Bang!</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-8.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Pose Guys📸</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-9.jpg')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">COUPLE FAV</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-10.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Kapan Main Bola lagi?🥲</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-11.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">OSDA REK</h1>
          </div>
          <div className="gallery-card group bg-[url('assets/gallery-assets/gal-12.webp')] bg-cover bg-center aspect-square">
            <div className="gallery-shadow"></div>
            <h1 className="gallery-text">Pembina - Pembina Kece</h1>
          </div>

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
        </div>
      </section>

      {/* <!-- section footer --> */}
      <Footer />
    </div>
  );
}
