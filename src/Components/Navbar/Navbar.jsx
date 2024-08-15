// import React from 'react';
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <div className='flex items-center justify-between space-x-4 py-3'>
      <div className='flex space-x-4'>
      <div className='flex space-x-2'>
        <h1 className='text-gray-800 font-semibold text-3xl font-sans'>KODE</h1>
        <h1 className='text-cyan-950 font-semibold text-3xl font-sans'>VORTEX</h1>
      </div>

      <div className='relative flex-1'>
        <form action="/action_page.php" className='flex items-center'>
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl" />
          <input className='bg-zinc-800 w-96 text-white text-xl rounded-lg pl-10 py-2 ' type="text" placeholder="What do you want to learn today?" name="search" />
        </form>
      </div>
      </div>

     <div className='flex items-center space-x-3'>
     <ul className="flex space-x-4 list-none text-lg font-sans">
        <li className="text-white">Trainings</li>
        <li className="text-white">Services</li>
        <li className="text-white">Log In</li>
      </ul>

      <button className="bg-cyan-900 hover:bg-cyan-950 text-xl text-white font-bold py-1 px-4 rounded-full">
        Sign Up
      </button>
     </div>
    </div>
  );
}

export default Navbar;
 