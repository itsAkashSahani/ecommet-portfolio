import ContactForm from "./ContactForm";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full py-10" id="contact">
      <section className="flex flex-col items-center">
        <h2 className="heading">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
      </section>

      <ContactForm />

      {/* Removing this section for now */}
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
        <p className="flex items-center gap-2 text-center">
          Copyright © 2025 Akash Sahani. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center gap-2">
            <FiMail />
            <a href="mailto:ecommet.solutions@gmail.com" className="hover:underline">
              ecommet.solutions@gmail.com
            </a>
          </div>

          <div className="hidden md:block mx-2">|</div>

          <div className="flex items-center gap-2">
            <FiPhone />
            <a href="tel:+919137690039" className="hover:underline">
              +91 91376 90039
            </a>
          </div>
        </div>

        {/* <div className="flex items-center md:gap-3 gap-6 md:py-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
