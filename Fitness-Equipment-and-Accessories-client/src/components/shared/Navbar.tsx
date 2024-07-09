import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "./Container";
import { navbarList } from "@/constant";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      <Container>
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1>Logo</h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:block">
            <ul className="lg:flex lg:gap-4">
              {navbarList?.map((nav, i) => (
                <li key={i}>
                  <Link to={nav.link} className="lg:ml-4">
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } lg:hidden transition-all duration-500 border z-50 border-gray-200 shadow-lg backdrop-blur-sm transform h-screen fixed w-[350px] bg-white text-black top-0 left-0`}
          >
            <button
              className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="flex  flex-col p-5 gap-5 text-[18px]">
              {navbarList?.map((nav, i) => (
                <li key={i}>
                  <Link to={nav.link} className="lg:ml-4">
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <button className="hidden lg:block lg:ml-4">Login</button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-2xl cursor-pointer lg:hidden ml-4"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
