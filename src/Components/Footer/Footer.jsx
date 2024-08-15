/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white  px-4 md:px-8 lg:px-16">
      <div className="container mx-auto ">
        {/* "VISIT US" Text */}
        <div className="text-center mb-16">
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">VISIT US</h3>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex flex-col sm:flex-row justify-evenly gap-8 sm:gap-24 mb-10">
          <div className="text-center">
            <a href="https://twitter.com/kodeVortex" target="_blank" rel="noopener noreferrer">
              <img src="X[1].jpg" alt="Twitter X" className="w-36 h-36 mx-auto border-none bg-transparent" />
            </a>
            <p className="mt-4 text-lg">@kodeVortex</p>
          </div>
          <div className="text-center">
            <a href="https://www.instagram.com/kodevortex" target="_blank" rel="noopener noreferrer">
              <img src="Insta[1].jpg" alt="Instagram" className="w-36 h-36 mx-auto border-none bg-transparent" />
            </a>
            <p className="mt-4 text-lg">@kodeVortex</p>
          </div>
          <div className="text-center">
            <a href="https://www.youtube.com/channel/UCXXXXXX" target="_blank" rel="noopener noreferrer">
              <img src="youtube[1].jpg" alt="YouTube" className="w-36 h-36 mx-auto border-none bg-transparent" />
            </a>
            <p className="mt-4 text-lg">@kodeVortex</p>
          </div>
          <div className="text-center">
            <a href="https://www.linkedin.com/company/kodevortex" target="_blank" rel="noopener noreferrer">
              <img src="Link[1].jpg" alt="LinkedIn" className="w-36 h-36 mx-auto border-none bg-transparent" />
            </a>
            <p className="mt-4 text-lg">@kodeVortex</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-around items-stretch space-y-6 md:space-y-0 gap-2">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img src="Logo2_2.png" alt="KodeVortex" className="w-40 md:w-60 lg:w-80 mx-auto md:mx-0" />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-around items-stretch space-y-6 md:space-y-0 space-x-0 md:space-x-12 lg:space-x-16 w-full">
            <div className="flex flex-col space-y-2 text-center md:text-left h-full">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">KVTech</h3>
              <a href="/" className="text-base md:text-sm lg:text-base hover:underline">Home</a>
              <a href="/about" className="text-base md:text-sm lg:text-base hover:underline">About</a>
              <a href="/trainings" className="text-base md:text-sm lg:text-base hover:underline">Trainings</a>
              <a href="/services" className="text-base md:text-sm lg:text-base hover:underline">Services</a>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-left h-full">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Services</h3>
              <a href="/software" className="text-base md:text-sm lg:text-base hover:underline">Software</a>
              <a href="/corporate" className="text-base md:text-sm lg:text-base hover:underline">Corporate</a>
              <a href="/college" className="text-base md:text-sm lg:text-base hover:underline">College</a>
            </div>
            <div className="flex flex-col space-y-2 text-center md:text-left h-full">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Contact</h3>
              <a href="mailto:info@kodevortex.com" className="text-base md:text-sm lg:text-base hover:underline">Email</a>
              <a href="https://www.linkedin.com/company/kodevortex" className="text-base md:text-sm lg:text-base hover:underline">LinkedIn</a>
              <a href="https://www.instagram.com/kodevortex" className="text-base md:text-sm lg:text-base hover:underline">Instagram</a>
              <a href="https://twitter.com/kodeVortex" className="text-base md:text-sm lg:text-base hover:underline">Twitter (X)</a>
            </div>
            <div className="flex flex-col space-y-4 text-center md:text-left h-full">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl">Join Us</h3>
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="py-2.5 px-6 pr-32 bg-stone-800 text-white  rounded-3xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 w-full"
                />
                <button
                  className="absolute right-0 top-0 bottom-0 bg-gray-600 py-2.5 px-8 rounded-full text-white font-bold hover:bg-gray-700 transition duration-200"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Content */}
        <div className="flex justify-center items-center mt-10 space-x-4">
          {/* KVTech Logo */}
          <img src="Logo2_2.png" alt="KV Tech" className="w-35 h-20" />

          {/* Copyright and SSL Information */}
          <p className="text-xs md:text-sm flex items-center">
            © 2024 KodeVortex&nbsp;
            <img src="SSL.jpg " alt="Secured with SSL" className="inline w-4 h-4 ml-2" /> Secured with SSL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
