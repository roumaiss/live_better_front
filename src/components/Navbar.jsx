"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/user";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      background: "#f0f4f8",
      customClass: {
        popup: "blue-theme",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setUser(null));
        localStorage.removeItem("token");
        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          background: "#f0f4f8",
        });
      }
    });
  };

  const links = [
    { href: "/about", label: "About us" },
    { href: "/alimentation-program", label: "Nutrition Plans" },
    { href: "/gyms", label: "Find a Gym" },
    { href: "/contact", label: "Get in Touch" },
  ];

  if (isLoggedIn) {
    links.push({ href: "/planning", label: "Planning" });
  }

  return (
    <header className="bg-transparent">
      <nav className="max-w-screen-xl mx-auto lg:p-5 bg-transparent">
        <div className="flex justify-between items-center bg-transparent">
          {/* Logo */}
          <Link href="/" className="text-blue-700 text-5xl">
            <img
              src="/ourLogo.png"
              alt=""
              className="object-cover object-center w-50 h-20"
            />
          </Link>

          {/* Hamburger Menu for Small Screens */}
          <div className="dropdown dropdown-left dropdown-bottom lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="blue"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content text-blue-700 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow `}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
               {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-blue-700 hidden lg:flex text-white px-7 py-2 rounded-lg text-lg font-bold hover:bg-blue-500 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-blue-700 hidden lg:flex text-white px-7 py-2 rounded-lg text-lg font-bold hover:bg-blue-500 transition duration-300"
            >
              Login
            </Link>
          )}
            </ul>
          </div>

          {/* Navigation Links for Larger Screens */}
          <ul
            className={`flex flex-col lg:flex-row gap-8 text-xl mx-auto ${
              isMenuOpen ? "block" : "hidden lg:flex"
            }`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative group transition duration-300 tracking-wide font-bold ${
                    isActive(link.href) ? "text-blue-500" : "text-blue-700"
                  } hover:text-blue-700`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] ${
                      isActive(link.href) ? "w-full" : "w-0"
                    } bg-blue-500 group-hover:w-full transition-all duration-300`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Login/Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-blue-700 hidden lg:flex text-white px-7 py-2 rounded-lg text-lg font-bold hover:bg-blue-500 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-blue-700 hidden lg:flex text-white px-7 py-2 rounded-lg text-lg font-bold hover:bg-blue-500 transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}