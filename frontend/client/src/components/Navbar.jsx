// import React from 'react'
// import {Link} from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav className="bg-blue-600 p-4 text-white flex justify-between">
//       <h1 className="text-xl font-bold">Campus Connect</h1>
//       <div>
//         <Link to="/" className="mr-4">Home</Link>
//         <Link to="/events" className="mr-4">Events</Link>
//         <Link to="/marketplace" className="mr-4">Marketplace</Link>
//         <Link to="/notes" className="mr-4">Notes</Link>
//         <Link to="/profile">Profile</Link>
//       </div>
//     </nav>
      
//   )
// }

// export default Navbar;


import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Campus Connect</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/events" className="hover:text-gray-200 transition">Events</Link>
          <Link to="/marketplace" className="hover:text-gray-200 transition">Marketplace</Link>
          <Link to="/notes" className="hover:text-gray-200 transition">Notes</Link>
          <Link to="/profile" className="hover:text-gray-200 transition">Profile</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black-100 p-4 flex flex-col space-y-4">
          <Link to="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/events" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/marketplace" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Marketplace</Link>
          <Link to="/notes" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Notes</Link>
          <Link to="/profile" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Profile</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

