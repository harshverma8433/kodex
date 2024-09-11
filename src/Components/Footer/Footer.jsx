/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:py-16 md:px-8 lg:py-24 lg:px-16">
      <div className="container mx-auto">
        {/* "VISIT US" Text */}
        <div className="text-center mb-6">
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">VISIT US</h3>
        </div>

        {/* Social Media Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* X */}
          <div className="text-center">
            <a
              href="https://twitter.com/kodeVortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="X[1].jpg"
                alt="X (Twitter)"
                className="w-12 h-12 mx-auto border-none bg-transparent hover:opacity-75 transition-opacity duration-200"
              />
            </a>
            <p className="mt-4 text-lg">@kodeVortex</p>
          </div>

          {/* Instagram */}
          <div className="text-center">
            <a
              href="https://www.instagram.com/kodevortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="Insta[1].jpg"
                alt="Instagram"
                className="w-12 h-12 mx-auto border-none bg-transparent hover:opacity-75 transition-opacity duration-200"
              />
            </a>
            <p className="mt-4 text-lg">@kodeVortex</p>
          </div>

          {/* YouTube */}
          <div className="text-center">
            <a
              href="https://www.youtube.com/channel/UCXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="youtube[1].jpg"
                alt="YouTube"
                className="w-12 h-12 mx-auto border-none bg-transparent hover:opacity-75 transition-opacity duration-200"
              />
            </a>
            <p className="mt-4 text-lg">@KodeVortex</p>
          </div>

          {/* LinkedIn */}
          <div className="text-center">
            <a
              href="https://www.linkedin.com/company/kodevortex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="Link[1].jpg"
                alt="LinkedIn"
                className="w-12 h-12 mx-auto border-none bg-transparent hover:opacity-75 transition-opacity duration-200"
              />
            </a>
            <p className="mt-4 text-lg">@KodeVortex</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 gap-6">
          {/* Logo Section */}
          <div className="text-center md:text-left mb-6 md:mb-0 flex-shrink-0">
            <img
              src="Logo2_2.png"
              alt="KodeVortex"
              className="w-32 md:w-40 lg:w-48 xl:w-56 mx-auto md:mx-0"
            />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">KVTech</h3>
              <a href="/" className="text-base hover:underline">
                Home
              </a>
              <a href="/about" className="text-base hover:underline">
                About
              </a>
              <a href="/trainings" className="text-base hover:underline">
                Trainings
              </a>
              <a href="/services" className="text-base hover:underline">
                Services
              </a>
            </div>

            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Services</h3>
              <a href="/software" className="text-base hover:underline">
                Software
              </a>
              <a href="/corporate" className="text-base hover:underline">
                Corporate
              </a>
              <a href="/college" className="text-base hover:underline">
                College
              </a>
            </div>

            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Contact</h3>
              <a href="mailto:info@kodevortex.com" className="text-base hover:underline">
                Email
              </a>
              <a
                href="https://www.linkedin.com/company/kodevortex"
                className="text-base hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/kodevortex"
                className="text-base hover:underline"
              >
                Instagram
              </a>
              <a href="https://twitter.com/kodeVortex" className="text-base hover:underline">
                Twitter (X)
              </a>
            </div>

            <div className="flex flex-col space-y-4 text-center md:text-left">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Join Us</h3>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="py-3 md:py-4 px-4 md:px-6 pr-32 text-white bg-black border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 w-full"
                />
                <button className="absolute right-0 top-0 bg-gray-600 py-3 md:py-4 px-4 md:px-6 rounded-r-full text-white font-bold hover:bg-gray-700 transition duration-200">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Content */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-x-4">
          {/* KVTech Logo */}
          <img
            src="Logo2_2.png"
            alt="KV Tech"
            className="w-28 md:w-36 h-16 md:h-20 mb-4 md:mb-0"
          />

          {/* Copyright and SSL Information */}
          <p className="text-xs md:text-sm text-center md:text-left">
            © 2024 KodeVortex&nbsp;
            <img
              src="SSL.jpg"
              alt="Secured with SSL"
              className="inline w-4 h-4 ml-2"
            />
            Secured with SSL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
