import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/WhatsApp_Image_2025-12-10_at_10.41.52_AM-removebg-preview.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* اللوجو */}
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[160px] h-[80px] object-contain"
          />
        </NavLink>

        {/* Search input للشاشات الكبيرة */}
        <div className="hidden lg:block w-1/3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* اللينكات للشاشات الكبيرة */}
        <div className="hidden lg:flex gap-4">
          <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
            Home Page
          </NavLink>
          <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
            About Us
          </NavLink>
          <NavLink className="text-xl font-semibold text-white border rounded-3xl px-4 py-2 hover:bg-green-500 transition">
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger button للأجهزة الصغيرة */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* القائمة المنسدلة للأجهزة الصغيرة */}
      {menuOpen && (
        <div className="lg:hidden bg-black/80 text-white px-6 py-4 flex flex-col gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <NavLink onClick={() => setMenuOpen(false)}>Home Page</NavLink>
          <NavLink onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        </div>
      )}
    </nav>
  );
}
