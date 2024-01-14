import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Experience from "./../Experiences/Experience";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Function to handle scroll events and determine the active section
  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Define the offsets for each section based on your layout
    const sectionOffsets = {
      about: 600, // Adjust this offset for the "About" section
      skills: 1000,
      experiences: 1500,
      work: 2500, // Adjust this offset for the "Skills" section
      inventions: 3500, // Adjust this offset for the "Inventions" section
      contact: 5000, // Adjust this offset for the "Contact" section
    };

    // Determine the active section based on scroll position
    for (const [section, offset] of Object.entries(sectionOffsets)) {
      if (scrollY >= offset) {
        setActiveSection(section);
      }
    }
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white  shadow-inner sticky top-0 ${
        isMenuOpen ? "open" : ""
      } z-40`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center  justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex  justify-between ">
                <p
                  className={`text-center cursor-pointer py-[17px] w-[120px] ${
                    activeSection === "about"
                      ? "text-pink-500 border-b-[6px] text-center py-[17px]  w-[120px]  border-indigo-500"
                      : ""
                  }`}
                >
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed to align with your layout
                    duration={300}
                  >
                    About
                  </Link>
                </p>

                <p
                  className={`text-center py-[17px] cursor-pointer w-[120px]${
                    activeSection === "skills"
                      ? "text-pink-500 border-b-[6px] text-center py-[17px]  w-[120px] border-indigo-500"
                      : ""
                  }`}
                  href=""
                >
                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed to align with your layout
                    duration={300}
                    className={`${
                      activeSection === "skills" ? "text-pink-500" : ""
                    }`} // Adjust the duration for the scrolling animation
                  >
                    Skills
                  </Link>
                </p>
                <p
                  className={`text-center cursor-pointer py-[17px]  w-[120px]${
                    activeSection === "experiences"
                      ? "text-pink-500 border-b-[6px] text-center py-[17px]  w-[120px] border-indigo-500"
                      : ""
                  }`}
                >
                  <Link
                    to="experiences"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed to align with your layout
                    duration={300}
                    className={`${
                      activeSection === "experiences" ? "text-pink-500" : ""
                    }`} // Adjust the duration for the scrolling animation
                  >
                    Experiences
                  </Link>
                </p>
                <p
                  className={`text-center cursor-pointer py-[17px]  w-[150px]${
                    activeSection === "work"
                      ? "text-pink-500 border-b-[6px] text-center py-[17px]  w-[150px] border-indigo-500"
                      : ""
                  }`}
                >
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed to align with your layout
                    duration={300}
                    className={`${
                      activeSection === "work" ? "text-pink-500" : ""
                    }`} // Adjust the duration for the scrolling animation
                  >
                    Work and Passion
                  </Link>
                </p>
                <p
                  className={`text-center cursor-pointer py-[17px]  w-[120px]${
                    activeSection === "inventions"
                      ? "text-pink-500 border-b-[6px] text-center py-[17px]  w-[120px] border-indigo-500"
                      : ""
                  }`}
                  href=""
                >
                  <Link
                    to="inventions"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed to align with your layout
                    duration={300}
                    className={`${
                      activeSection === "inventions" ? "text-pink-500" : ""
                    }`} // Adjust the duration for the scrolling animation
                  >
                    Inventions
                  </Link>
                </p>

                <p
                  className={`text-center py-[17px] cursor-pointer w-[120px]${
                    activeSection === "contact"
                      ? "text-pink-500 border-b-[6px] text-center py-[17px]  w-[120px] border-indigo-500"
                      : ""
                  }`}
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust the offset as needed to align with your layout
                    duration={300}
                    className={`${
                      activeSection === "contact" ? "text-pink-500" : ""
                    }`} // Adjust the duration for the scrolling animation
                  >
                    Contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white ${
                isMenuOpen ? "open" : ""
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              style={{
                transition: "transform 0.5s ease-in-out",
                transform: isMenuOpen ? "rotate(180deg)" : "",
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                style={{
                  transition: "stroke 0.5s ease-in-out",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                style={{
                  transition: "stroke 0.5s ease-in-out",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden navbar-menu`}
        id="mobile-menu"
        style={{
          transition: "transform 0.5s ease-in-out",
          transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed to align with your layout
              duration={300}
            >
              About
            </Link>
          </a>
          <a
            href="#"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed to align with your layout
              duration={300}
            >
              Skills
            </Link>
          </a>
          <a
            href="#"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed to align with your layout
              duration={300}
            >
              Experience
            </Link>
          </a>
          <a
            href="#"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed to align with your layout
              duration={300}
            >
              Work and Passion
            </Link>
          </a>
          <a
            href="#"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            <Link
              to="inventions"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed to align with your layout
              duration={300}
            >
              Inventions
            </Link>
          </a>
          <a
            href="#"
            className=" block px-3 py-2 rounded-md text-base font-medium"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed to align with your layout
              duration={300}
            >
              Contact
            </Link>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
