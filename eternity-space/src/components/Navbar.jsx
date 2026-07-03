import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const navList = [
    {
      id: 1,
      nav_button: "Home",
      nav_href: "hero"
    },
    {
      id: 2,
      nav_button: "Gallery",
      nav_href: "Gallery"
    },
    {
      id: 3,
      nav_button: "Social Media",
      nav_href: "footer"
    }
  ]
  // boolean untuk mengatur buka tutup menu
  const [isMenuOpen, setMenuOpen] = useState(false);
  // useref = cari penggunaannya apa
  // untuk menangkap referensi dari suatu komponen
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // handle click diluar menu, agar menu tertutup
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    // handle ketika window membesar maka menu mobile akan langsung tertutup
    const handleResizeWindow = (e) => {
      if (e.matches) {
        setMenuOpen(false);
      }
    };

    const mdQuery = window.matchMedia("(min-width: 768px)");
    // event listener
    document.addEventListener("mousedown", handleClickOutside);
    mdQuery.addEventListener("change", handleResizeWindow);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      mdQuery.removeEventListener("change", handleResizeWindow);
    };
  }, []);

  return (
    <header id="navbar" className="navbar">
      <nav className="flex flex-row justify-between h-16 items-center px-3">
        <div className="flex items items-center">
          <img className="size-10" src="/src/assets/logo-angkatan.png" alt="" />
          <h1 className="text-[10px] md:text-[20px] font-cinzel text-ecru-white-200">
            <span className="text-tussock-400">Eternity</span> Generation
          </h1>
        </div>
        {/* <!-- bagian fitur - fitur navbar --> */}
        <div id="ul_nav" className="hidden md:block">
          <ul className="flex flex-row gap-20">
            {navList.map((menu) => {
              return (

                <li key={menu.id} id="li_nav" className="">
                <a className="li-nav" href={`#${menu.nav_href}`}>
                  {menu.nav_button}
                </a>
              </li>
              );
            })}
          </ul>
        </div>

        <button
          id="toggleMenu"
          className="block md:hidden"
          ref={buttonRef}
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <svg
            className="text-tussock-400 size-10 icon flat-line"
            fill="currentColor"
            viewBox="0 0 24 24"
            id="menu"
            data-name="Flat Line"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="primary"
              d="M3,12H21M9,18H21M3,6H15"
              className="style-toggle"
            ></path>
          </svg>
        </button>
      </nav>
      <div>
        <ul
          id="menuMobile"
          ref={menuRef}
          className={`menu-mobile md:hidden ${isMenuOpen ? "menu-transition" : ""}`}
        >
          <li
            id=""
            className="hover:bg-tussock-400 px-3 py-3 font-poppins text-tussock-400 hover:text-ecru-white-200 z-50"
          >
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li
            id=""
            className="hover:bg-tussock-400 px-3 py-3 font-poppins text-tussock-400 hover:text-ecru-white-200 z-50"
          >
            <a href="#Gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
          </li>
          <li
            id=""
            className="hover:bg-tussock-400 px-3 py-3 font-poppins text-tussock-400 hover:text-ecru-white-200 z-50"
          >
            <a href="#footer" onClick={() => setMenuOpen(false)}>
              Social Media
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
