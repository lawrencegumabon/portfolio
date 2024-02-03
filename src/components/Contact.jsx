import React from "react";
import contact from "../assets/images/contact.png";

const Contact = () => {
  return (
    <div
      name="contacts"
      className="w-full min-h-screen h-full flex justify-center items-center px-4"
    >
      <div className="flex flex-col justify-center max-w-7xl w-full">
        <p className="text-5xl font-bold  text-left">Contact.</p>
        <p>Let's Collaborate!</p>
        <div className="grid md:grid-cols-2 py-6 gap-4 items-center">
          <form
            action="https://getform.io/f/c62b3d53-df39-4723-ab16-7c70cd4e2242"
            method="POST"
            className="h-full"
          >
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 w-full rounded-md shadow-md outline-none"
              placeholder="Email*"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="p-2 mt-4 w-full shadow-md rounded-md outline-none"
              placeholder="Message*"
              required
            ></textarea>
            <button
              type="submit"
              className=" bg-primary-0 text-white w-full mt-4 p-4 rounded-md shadow-md font-bold tracking-widest hover:brightness-110 duration-300"
            >
              Submit Message
            </button>
          </form>
          <div className="bg-[#D4DDF2] rounded-r-full rounded-t-full h-full hidden md:flex justify-center shadow-xl">
            <img src={contact} alt="Contact me" className="w-96 p-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
