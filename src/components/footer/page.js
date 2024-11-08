import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 z-[1000] relative">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {/* Address Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <div className="mb-6 text-center">
            <Link href="/">
              <Image className="rounded-full" src="/images/ecotrade.jpg" alt="EcoTrade logo" width={50} height={25} />
            </Link>
            <p className="mt-4 text-gray-400">
              EcoTrade - dedicated to sustainable practices, enabling you to trade with the future in mind.
            </p>
          </div>

        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2">
            {["Join Us", "Maintenance", "Language Packs", "LearnPress", "Release Status"].map((link, index) => (
              <li key={index} className="flex items-center">
                <Image src="/icon/3.png" alt="icon" width={15} height={15} />
                <Link href="#" className="ml-2 text-gray-400 hover:text-white">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 px-4">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start">
              <Image src="/icon/loc.png" alt="location icon" width={15} height={15} />
              <span className="ml-2">
                London 145<br />United Kingdom
              </span>
            </li>
            <li className="flex items-start">
              <Image src="/icon/email.png" alt="email icon" width={15} height={15} />
              <span className="ml-2">adewumiisrael66@gmail.com</span>
            </li>
            <li className="flex items-start">
              <Image src="/icon/call.png" alt="phone icon" width={15} height={15} />
              <span className="ml-2">+12586954775</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest news, eco-friendly tips, and exclusive offers. Join our community today!
          </p>

          <input
            className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Your Email"
            type="email"
            name="email"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
        
      </div>
    </div>

    <div className="bg-gray-800 py-4 mt-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500">
          © 2019 All Rights Reserved. Design By{" EcoTrade"}

        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
