import Logo from "./Logo"

export default function Footer() {
    return (
        <section
        id="footer"
        className="flex flex-col items-center justify-center h-max bg-linear-to-b from-shuttle-gray-800 from-80% to-shuttle-gray-900"
      >
        <div className="flex flex-col p-10 items-center">
          <Logo styleLogo={`size-72`} />
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
    )
}