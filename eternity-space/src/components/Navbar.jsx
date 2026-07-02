export default function Navbar() {
    return (
        <header id="navbar" className="navbar">
        <nav className="flex flex-row justify-between h-16 items-center px-3">
          <div className="flex items items-center">
            <img className="size-10" src="assets/logo-angkatan.png" alt="" />
            <h1 className="text-[10px] md:text-[20px] font-cinzel text-ecru-white-200">
              <span className="text-tussock-400">Eternity</span> Generation
            </h1>
          </div>
          {/* <!-- bagian fitur - fitur navbar --> */}
          <div id="ul_nav" className="hidden md:block">
            <ul className="flex flex-row gap-20">
              <li id="li_nav" className="">
                <a className="li-nav" href="#hero">
                  Home
                </a>
              </li>
              <li id="li_nav" className="">
                <a className="li-nav" href="#Gallery">
                  Gallery
                </a>
              </li>
              <li id="li_nav" className="">
                <a className="li-nav" href="#footer">
                  Social Media
                </a>
              </li>
            </ul>
          </div>

          <button id="toggleMenu" className="block md:hidden">
            <svg
              className="text-tussock-400 size-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              id="menu"
              data-name="Flat Line"
              xmlns="http://www.w3.org/2000/svg"
              className="icon flat-line"
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
          <ul id="menuMobile" className="menu-mobile">
            <li
              id=""
              className="hover:bg-tussock-400 px-3 py-3 font-poppins text-tussock-400 hover:text-ecru-white-200 z-50"
            >
              <a href="#hero">Home</a>
            </li>
            <li
              id=""
              className="hover:bg-tussock-400 px-3 py-3 font-poppins text-tussock-400 hover:text-ecru-white-200 z-50"
            >
              <a href="#Gallery">Gallery</a>
            </li>
            <li
              id=""
              className="hover:bg-tussock-400 px-3 py-3 font-poppins text-tussock-400 hover:text-ecru-white-200 z-50"
            >
              <a href="#footer">Social Media</a>
            </li>
          </ul>
        </div>
      </header>
    )
}