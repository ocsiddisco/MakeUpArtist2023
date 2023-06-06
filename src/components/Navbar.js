import { useState } from "react";
import Link from "next/link";
import { openSans } from "@/styles/utils/fonts.js";
import { navigation } from "@/pages/api/data.js";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className="h-[15vh] flex justify-center  z-50 uppercase font-normal"
      style={openSans.style}
    >
      <nav className="w-5/6">
        {/* MOBILE-MENU */}
        <section className="flex justify-end h-14 pt-7 lg:hidden">
          {/* HAMBURGER-ICON */}
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {/* CROSS-ICON */}
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            {/* NAVIGATION-MOBILE-OPEN */}
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-twhite">
              {navigation.map((nav, i) => {
                return (
                  <li className="border-b border-gray-400  uppercase" key={i}>
                    <a href={nav.href}>{nav.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* DESKTOP MENU */}
        <div className="flex flex-row w-full h-full justify-items-center items-center mt-4 bg-nav01	bg-opacity-25	text-twhite hidden lg:flex ">
          {navigation.map((nav, i) => {
            return (
              <div
                className="flex grow h-full transition duration-500 ease-in-out hover:bg-nav02 hover:text-tbrown"
                key={i}
              >
                <Link
                  className="flex grow h-full opacity-100	justify-center  items-center"
                  href={nav.href}
                >
                  {nav.name}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 15;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgba(38, 27, 27, 0.9);
      }
    `}</style>
    </div>
  );
};

export default Navbar;
