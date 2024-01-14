//react
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/about.png";
//react dom
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

const Typewriter = ({
  typingSpeed,
  isInfinite,
  sentences,
  separator = "|",
  color = "#FFFFFF",
}) => {
  const [subText, setSubText] = useState(""),
    speed = typingSpeed ? typingSpeed : 100,
    delTimer1 = useRef(null),
    delTimer2 = useRef(null),
    typeTimer1 = useRef(null),
    typeTimer2 = useRef(null),
    startWriterTimer = useRef(null),
    initTimer = useRef(null);

  function delWriter(text, i, cb) {
    if (i >= 0) {
      setSubText(text.substring(0, i--));

      delTimer1.current = setTimeout(function () {
        delWriter(text, i, cb);
      }, speed);
    } else if (typeof cb == "function") {
      delTimer2.current = setTimeout(cb, speed);
    }
  }

  // function to generate the key hitting effect
  function typeWriter(text, i, cb) {
    if (i < text.length + 1) {
      setSubText(text.substring(0, i++));

      typeTimer1.current = setTimeout(function () {
        typeWriter(text, i++, cb);
      }, speed);
    } else if (i === text.length + 1) {
      const foundIndex = sentences.findIndex((el) => el === text),
        isLastSentence = foundIndex === sentences.length - 1;

      if (!isLastSentence || (isLastSentence && isInfinite)) {
        typeTimer2.current = setTimeout(function () {
          delWriter(text, i, cb);
        }, speed);
      }
    }
  }

  // the main writer function
  function StartWriter(i) {
    if (typeof sentences[i] === "undefined") {
      startWriterTimer.current = setTimeout(function () {
        StartWriter(0);
      }, speed);
    } else if (i < sentences[i].length + 1) {
      typeWriter(sentences[i], 0, function () {
        StartWriter(i + 1);
      });
    }
  }

  useEffect(() => {
    initTimer.current = setTimeout(function () {
      StartWriter(0);
    }, speed);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(delTimer1.current);
      clearTimeout(delTimer2.current);
      clearTimeout(typeTimer1.current);
      clearTimeout(typeTimer2.current);
      clearTimeout(startWriterTimer.current);
      clearTimeout(initTimer.current);
    };
  }, []);

  return (
    <span className="typewriter" style={{ "--color": color }}>
      {subText}
      <span className="separator">{separator}</span>
    </span>
  );
};

const About = () => (
  <div id="about" className=" bg-[#FFFFFF] text-black">
    <div className="banner flex items-center">
      <div className="quote px-8 py-5">
        <h1 className=" text-4xl font-bold text-center py-20">About</h1>
        <h1 className=" font-bold text-3xl ">Hi, my name is Adam!</h1>
        <h1 className=" text-xl font-bold">
          I am a
          <Typewriter
            sentences={[" software engineer.", " creative.", " web developer"]}
            typingSpeed={100} //default 100
            isInfinite={true} //default false
            separator="|" //default |
            color="#FFFFFF" //default #000000
          />
        </h1>
        <p className=" mt-5">
          Building brands has been a part of my DNA since the age of 16 when I
          started my own snowboard apparel company. Now with a closet full of
          sample t-shirts, I’ve grown into a designer who prioritizes empathy
          and entrepreneurship in every creative opportunity I face.
        </p>
        <p className=" mt-5">
          With over ten years of professional experience, I have mastered the
          ins and outs to become a seasoned designer equipped with the creative
          direction, strategic eye, expert design, and technical skills that top
          brands are searching for. Keep exploring my portfolio and see how!
        </p>
        <button className="bg-[#15353d] text-white text-lg rounded-md px-6 mt-5 mb-10 py-3">
          About Me
        </button>
      </div>
      <div className="bg-black">
        <img src={logo} alt="" />
      </div>
    </div>
  </div>
);

export default About;
