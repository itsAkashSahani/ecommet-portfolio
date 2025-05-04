import { socialMedia } from "@/data";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full py-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading">
          Let&apos;s Build Something Great Together
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
      </div>

      <ContactForm />

      <p className="md:text-base py-5 text-sm md:font-normal font-light text-center">
        Copyright © 2025 Ecommet. All rights reserved.
      </p>

      {/* Removing this section for now */}
      {/* <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          Copyright © 2025 Akash Sahani. All rights reserved.
        </p>

        <div className="flex items-center md:gap-3 gap-6 md:py-5">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
