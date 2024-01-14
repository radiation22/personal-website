import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./work.css";

const Work = () => {
  const [activeLink, setActiveLink] = useState("item1");

  // Function to handle item intersection
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Set the active link based on the item in view
        setActiveLink(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // Viewport
      rootMargin: "0px",
      threshold: 0.5, // Item is considered in view when 50% of it is visible
    });

    // Observe the items
    document.querySelectorAll(".work").forEach((item) => {
      observer.observe(item);
    });

    // Don't forget to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="work" className="py-32 bg-[#F0F1F1]">
      <div>
        <div className="flex items-center">
          <div className="flex overflow-auto text-center flex-col w-[20%]">
            <h1 className="text-2xl font-bold">Work</h1>
            <a className="" href="">
              <ScrollLink
                to="item1"
                spy={true}
                smooth={true}
                offset={-250}
                duration={300}
                activeClass={activeLink === "item1" ? "text-red-500" : ""}
              >
                Item1
              </ScrollLink>
            </a>
            <a className="" href="">
              <ScrollLink
                to="item2"
                spy={true}
                smooth={true}
                offset={-200}
                duration={300}
                activeClass={activeLink === "item2" ? "text-red-500" : ""}
              >
                Item2
              </ScrollLink>
            </a>
            <a className="" href="">
              <ScrollLink
                to="item3"
                spy={true}
                smooth={true}
                offset={-220}
                duration={300}
                activeClass={activeLink === "item3" ? "text-red-500" : ""}
              >
                Item3
              </ScrollLink>
            </a>
            <a className="" href="">
              <ScrollLink
                to="item4"
                spy={true}
                smooth={true}
                offset={-300}
                duration={300}
                activeClass={activeLink === "item4" ? "text-red-500" : ""}
              >
                Item4
              </ScrollLink>
            </a>
          </div>
          <div className="w-[80%] overflow-auto h-[600px]">
            <div
              id="item1"
              className={`text-white w-full work flex items-center justify-center ${
                activeLink === "item1" ? "text-red" : ""
              }`}
            >
              <div>
                <h1>Item 1</h1>
                <button className="bg-white px-6 py-3 text-black">
                  View Project
                </button>
              </div>
            </div>
            <div
              id="item2"
              className={`text-white mt-5 work flex items-center justify-center ${
                activeLink === "item2" ? "text-red" : ""
              }`}
            >
              <div>
                <h1>Item 2</h1>
                <button className="bg-white px-6 py-3 text-black">
                  View Project
                </button>
              </div>
            </div>
            <div
              id="item3"
              className={`text-white mt-5 work flex items-center justify-center ${
                activeLink === "item3" ? "text-red" : ""
              }`}
            >
              <div>
                <h1>Item 3</h1>
                <button className="bg-white px-6 py-3 text-black">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
