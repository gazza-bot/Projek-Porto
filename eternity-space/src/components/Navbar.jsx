import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

const navList = [
  {
    id: 1,
    nav_button: "Home",
    nav_href: "hero",
  },
  {
    id: 2,
    nav_button: "Gallery",
    nav_href: "gallery",
  },
  {
    id: 3,
    nav_button: "Social Media",
    nav_href: "footer",
  },
];

export default function Navbar() {
  // State for mobile menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  // Refs for tracking clicks outside the mobile menu
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Handle click outside menu to close it
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

    // Close mobile menu automatically when screen size becomes tablet/desktop
    const handleResizeWindow = (e) => {
      if (e.matches) {
        setMenuOpen(false);
      }
    };

    const mdQuery = window.matchMedia("(min-width: 768px)");
    
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
        <div className="flex items-center">
          <Logo styleLogo="size-12" />
          <h2 className="text-[10px] md:text-[20px] font-cinzel text-ecru-white-200">
            <span className="text-tussock-400">Eternity</span> Generation
          </h2>
        </div>
        
        {/* Navigation links for desktop */}
        <div id="ul_nav" className="hidden md:block">
          <ul className="flex flex-row gap-20">
            {navList.map((menu) => (
              <li key={menu.id}>
                <a className="li-nav" href={`#${menu.nav_href}`}>
                  {menu.nav_button}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu toggle button */}
        <button
          id="toggleMenu"
          className="block md:hidden focus:outline-none"
          ref={buttonRef}
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
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
      
      {/* Mobile dropdown menu */}
      <div>
        <ul
          id="menuMobile"
          ref={menuRef}
          className={`menu-mobile md:hidden ${isMenuOpen ? "menu-transition" : ""}`}
        >
          {navList.map((menu) => (
            <li
              key={menu.id}
              className="hover:bg-tussock-400 px-3 py-3 font-poppins text-tussock-400 hover:text-ecru-white-200 z-50"
            >
              <a href={`#${menu.nav_href}`} onClick={() => setMenuOpen(false)}>
                {menu.nav_button}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

