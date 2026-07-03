import Navbar from "./Navbar.jsx";

export default function App() {
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

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
  return (
    <div className="scroll-smooth">
      <Navbar />
      {/* <!-- SECTION HERO --> */}
      <main
        id="hero"
        className="relative flex grow justify-center items-center min-h-screen overflow-hidden pt-16 md:pt-0"
      >
        <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* <!-- bg-grids --> */}
          <div className="bg-[url('assets/bg-1.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-2.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-3.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-4.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-5.JPG')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-6.JPG')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-7.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-8.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-2.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-7.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-5.jpg')] bg-cover bg-center aspect-square"></div>
          <div className="bg-[url('assets/bg-6.jpg')] bg-cover bg-center aspect-square"></div>
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
            src="assets/logo-angkatan.png"
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
      </main>

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
      <section
        id="footer"
        className="flex flex-col items-center justify-center h-max bg-linear-to-b from-shuttle-gray-800 from-80% to-shuttle-gray-900"
      >
        <div className="flex flex-col p-10 items-center">
          <img className="size-72 " src="assets/logo-angkatan.png" alt="" />
          <h1 className="footer-h1">ETERNITY GENERATION</h1>
          <h1 className="footer-h1">
            Enhancing National Integrity, Radiating Youthfulity
          </h1>
          <p className="text-1xl text-tussock-300 opacity-50 font-lora font-light">
            Est. MMXXV
          </p>
        </div>
        <div className="flex flex-col p-10">
          <h1 className="footer-h1">Get To Know Us!!!</h1>
          <div className="flex flex-row gap-15">
            <a
              className="svg-rounded"
              href="https://www.instagram.com/eternitygeneration_"
            >
              <svg
                className="svg-set"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z"
                  stroke="currentColor"
                />
              </svg>
            </a>
            <a className="svg-rounded" href="https://youtube.com/@mediasepuluh">
              <svg
                className="svg-set jam jam-youtube"
                fill="currentColor"
                viewBox="-2 -5 24 24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin"
              >
                <path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.219.219 0 0 1-.314-.196V4.35c0-.161.173-.266.318-.193l5.458 2.735a.216.216 0 0 1-.005.389z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
