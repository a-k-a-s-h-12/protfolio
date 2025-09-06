import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion"
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4ye89u8", "template_zbc28dd", form.current, {
        publicKey: "iIQpUGNKKbCnbSXSH",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    form.current.reset();
  };

  return (
    <div className="pb-24">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-center text-4xl pb-24 pt-24"
        >
          Contact Me
        </motion.h1>
      </div>
      <div className=" flex justify-center ">
        <form ref={form} onSubmit={sendEmail} className="px-4 sm:px-24">
          <div className="flex flex-col gap-6 sm:gap-14 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="mb-2 sm:mb-0 sm:mr-16 text-sm">Name</label>
              <input
                className="bg-transparent text-sm border border-neutral-700 outline-none rounded-md p-2 sm:pl-20"
                type="text"
                name="user_name"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label className="mb-2 sm:mb-0 sm:mr-16 text-sm pr-1">
                Email
              </label>
              <input
                className="bg-transparent text-sm border border-neutral-700 outline-none rounded-md p-2 sm:pl-20"
                type="email"
                name="user_email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm pb-2 sm:pb-8">Message</label>
              <textarea
                className="bg-transparent text-sm border border-neutral-700 outline-none rounded-md p-2"
                name="message"
              />
            </div>
          </div>
          <div className="flex justify-center pb-8">
            <input
              className="mt-8 text-sm bg-neutral-800 px-2 py-1 rounded-md text-purple-500 hover:scale-110"
              type="submit"
              value="Send"
            />
          </div>
          <p className="text-center pb-8 text-neutral-600">or</p>
          <div className="flex flex-col">
            <span className="flex mb-4 sm:mb-8 justify-between">
              <p className="text-sm text-neutral-400">
                Phone No <span className="pl-2">-</span>
              </p>
              <span className="text-sm text-purple-800">+91-9384455520</span>
            </span>
            <span className="flex mb-4 sm:mb-8 justify-between">
              <p className="text-sm text-neutral-400">
                Email Id <span className="pl-[25px]">-</span>
              </p>
              <span className="text-sm text-purple-800">
                akashkumaresan7373@gmail.com
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
