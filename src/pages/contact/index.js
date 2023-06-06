import Title from "@/components/Title";
import { montserrat } from "@/styles/utils/fonts.js";
import { useState } from "react";
import ModalForm from "@/components/ModalForm";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center" style={montserrat.style}>
      <Title title="Contact" />
      <ModalForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {/* onClose={() => setIsOpen(false)}  */}
      <div className="flex flex-col  w-4/5 lg:w-1/2 bg-nav01 bg-opacity-80 px-4 py-8 rounded">
        <div className="lg:mx-14 mt-4  mb-14 text-twhite text-xl text-center tracking-wider	">
          <p className="pb-4 text-2xl font-semibold">Let's work together!</p>
          <p className="font-light">
            I'm eager to learn more about your project or idea and discuss how I
            can contribute. Reach out to me, and we'll dive into the details,
            ensuring a seamless collaboration that brings your vision to life.
          </p>
        </div>
        <form className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row">
            <input
              className="m-2 lg:w-1/2 italic rounded focus:border-none"
              type="text"
              name="name"
              id="name"
              placeholder="Name*"
              // required
            />

            <input
              className="m-2 lg:w-1/2 italic rounded focus:border-none"
              type="text"
              name="surname"
              id="surname"
              placeholder="Surname*"
              // required
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <input
              className="m-2 lg:w-1/2 italic rounded focus:border-none"
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              // required
            />

            <input
              className="m-2 lg:w-1/2 italic rounded focus:border-none"
              type="text"
              name="telephone"
              id="telephone"
              placeholder="Telephone*"
              // required
            />
          </div>
          <div className="flex flex-col lg:flex-row">
            <input
              className="m-2 lg:w-1/2 italic rounded focus:border-none"
              type="text"
              name="location"
              id="location"
              placeholder="Location"
            />

            <input
              className="m-2 lg:w-1/2 italic rounded focus:border-none"
              type="date"
              name="eventdate"
              id="eventdate"
              placeholder="Event date"
            />
          </div>

          <select
            name="service"
            id="service"
            className="m-2 italic rounded focus:border-none"
            defaultValue="Choose a service"
          >
            <option value="bridal make up">Make-Up Wedding</option>
            <option value="brida makup and hair">Make-Up & Hair Wedding</option>
            <option value="bridal heir">Hair Wedding</option>
            <option value="others">Shooting, Event...</option>
          </select>

          <textarea
            className="m-2 h-36 italic rounded focus:border-none"
            type="text"
            name="message"
            id="message"
            placeholder="Write your message."
            // required
          />
          <div className="flex justify-center">
            <button
              className="w-1/3"
              type="button"
              onClick={() => setIsOpen(true)}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
