import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";

function ContactView() {
  return (
    <div className="h-screen w-full bg-secondary">
      <div className="flex justify-between h-full w-full">
        <form className="pt-24 w-full">
          <h1 className="text-center text-text text-2xl font-bold text-size-1">
            Contact US
          </h1>
          <div className="flex flex-col gap-8 mt-24 w-full items-center">
            <div className="relative lg:w-1/2 w-10/12">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Nama"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative lg:w-1/2 w-10/12">
              <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                placeholder="example@email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative lg:w-1/2 w-10/12">
              <MdOutlineMessage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="message"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="lg:w-1/2 w-10/12 h-12 rounded-md bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
              Kirim
            </button>
          </div>
        </form>
        <div className="w-full hidden md:block">
          <Image
            src="/contact.jpg"
            alt="Animated GIF"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactView;
