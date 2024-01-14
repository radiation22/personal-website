import React from "react";
import "./profile.css";
import {
  FaDownload,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import profile from "../../assets/avatar.jpeg";
const Profile = () => {
  return (
    <div className=" profile bg-[#F0F1F1] text-center pt-8 pb-16 sticky top-0">
      <div>
        <div className="avatar">
          <div className="w-28 mx-auto  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              className="w-28  h-28 rounded-full"
              src={profile}
              alt="picture"
            />
          </div>
        </div>

        <h2 className="text-3xl  mt-2 font-bold">Thohidul Islam</h2>
        <p>
          <button className="btn btn-sm mt-2 ">Full Stack Developer</button>
        </p>
        <div className="flex gap-2 mt-3 justify-center">
          <div className="shadow-lg rounded p-3 bg-zinc-800 hover:bg-pink-600">
            <a
              href="https://www.linkedin.com/in/thohidul-islam/"
              target="_blank"
            >
              <FaLinkedinIn className="text-white text-xl"></FaLinkedinIn>
            </a>
          </div>
          <div className="shadow-lg rounded p-3 bg-zinc-800 hover:bg-pink-600">
            <a href="https://github.com/Towhid7890" target="_blank">
              <FaGithub className="text-white text-xl"></FaGithub>
            </a>
          </div>
          <div className="shadow-lg rounded p-3 bg-zinc-800 hover:bg-pink-600">
            <a
              href="https://www.facebook.com/thohidulIslamcse/"
              target="_blank"
            >
              <FaFacebookF className="text-white text-xl"></FaFacebookF>
            </a>
          </div>
        </div>
        <div className=" text-start  bg-gray-900 mt-4  shadow-2xl rounded-xl p-4  bio-data  mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="shadow-lg rounded p-3 h-12 bg-black">
              <FaPhoneAlt className="text-rose-500 text-xl"></FaPhoneAlt>
            </div>
            <div className="text-white">
              <p>Phone</p>
              <p className="font-bold">+880 1620987544</p>
            </div>
          </div>
          <hr className="" />
          <div className="flex gap-3 items-center mb-3 mt-2">
            <div className="shadow-lg rounded p-3 h-12 bg-black">
              <FaEnvelope className="text-rose-500 text-xl"></FaEnvelope>
            </div>
            <div className="text-white">
              <p>Email</p>
              <p className="font-bold">thohidcse7890@gmail.com</p>
            </div>
          </div>
          <hr />
          <div className="flex gap-3 items-center mt-2 mb-3">
            <div className="shadow-lg rounded p-3 h-12 bg-black">
              <FaMapMarkerAlt className="text-rose-500 text-xl"></FaMapMarkerAlt>
            </div>
            <div className="text-white">
              <p>Location</p>
              <p className="font-bold">Chittagong, Bangladesh</p>
            </div>
          </div>
          <hr />
          <div className="flex gap-3 items-center mt-2">
            <div className="shadow-lg rounded p-3 h-12 bg-black">
              <FaFacebookF className="text-rose-500 text-xl"></FaFacebookF>
            </div>
            <div className="text-white">
              <p>Birth Date</p>
              <p className="font-bold">20 January,1998</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
