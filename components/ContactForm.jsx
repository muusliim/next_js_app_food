"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {HiArrowRight} from 'react-icons/hi'

const ContactForm = () => {
  return (
    <section className="max-container padding-container py-10 xl:py-30">
      <div className="text-center mb-20">
        <h3 className="h3">
          Cont<span className="text-secondary">act</span>
        </h3>
        <p>
          Our restaurant values clear communication with our customers, which is
          why we`ve included a convenient contact form on our website. Whether
          you have a question about our menu, would like to make a reservation,
          or simply want to share your feedback, our form makes it easy to get
          in touch with us. Simply fill out your name, email address, and
          message, and we`ll respond as soon as possible. We look forward to
          hearing from you!
        </p>
      </div>

      <form className="flex flex-1 flex-col gap-4 w-full mx-auto max-w-[33rem] mb-10">
        <div className="flex gap-3 w-full">
          <input
            type="text"
            placeholder="Name"
            className="regular-14 placeholder:text-gray-50 rounded-lg px-4 py-1 border border-tertiary/30 outline-secondary w-1/2"
          />
          <input
            type="email"
            placeholder="Email"
            className="regular-14 placeholder:text-gray-50 rounded-lg px-4 py-1 border border-tertiary/30 outline-secondary w-1/2"
          />
          <PhoneInput
            specialLabel={""}
            country={"th"}
            inputStyle={{ width: "100%", paddingRight: "2px" }}
            // className="regular-14 placeholder:text-gray-50 rounded-lg px-4 py-1 border border-tertiary/30 outline-secondary w-1/2"
          />
        </div>
        <textarea
          name=""
          id=""
          cols="10"
          rows="8"
          placeholder="Enter your message"
          className="regular-14 placeholder:text-gray-50 rounded-lg px-4 py-1 border border-tertiary/30 outline-secondary resize-none"
        ></textarea>
        <button
          type="submit"
          className="p-3 bg-secondary text-white rounded-md flexCenter gap-2 w-[11rem] text-[13px] font-bold uppercase"
        >Send message <span className="animate-pulse"> <HiArrowRight/> </span></button>
      </form>
    </section>
  );
};

export default ContactForm;
