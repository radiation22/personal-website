import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to a server or perform other actions.
    console.log(formData);
  };

  return (
    <section id="contact" className="bg-[#1F2830] text-white py-12">
      <h1 className="text-center text-xl lg:text-5xl font-bold">
        Let's Connect
      </h1>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="pt-20 ps-5">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <p>
              Have a question or want to work together? Feel free to send me a
              message using the form below.
            </p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quod doloribus necessitatibus libero temporibus asperiores
              similique voluptatum obcaecati aliquam. Perferendis?
            </p>
          </div>
          <div className="px-5">
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="name" className="block text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-white bg-gray-700 outline outline-offset-1 outline-1 rounded focus:outline-none focus:ring focus:border-white"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-white bg-gray-700 outline outline-offset-1 outline-1 rounded focus:outline-none focus:ring focus:border-white"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full py-2 px-3 text-white bg-gray-700 outline outline-offset-1 outline-1 rounded focus:outline-none focus:ring focus:border-white"
                  rows="4"
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
