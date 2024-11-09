"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import WhiteLogo from "@/app/white-logo.svg";
import YellowLogo from "@/app/yellow.svg";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex flex-col lg:flex-row items-center justify-between h-24 lg:h-26 px-20 lg:px-40 transition-colors duration-300 sticky top-0 z-50 ${
        isScrolled || pathname !== "/" ? "bg-white shadow-lg" : "bg-yellow-400"
      }`}
    >
      <Link
        className="flex items-center justify-center mb-2 lg:mb-0 sm:float-left"
        href="/"
      >
        <Image
          src={isScrolled || pathname !== "/" ? YellowLogo : WhiteLogo}
          alt="RoadVize Logo"
          width={80}
          height={80}
          className="h-10 mb-2 w-auto"
        />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden ml-auto">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className="h-6 w-6 text-yellow-500" />
          ) : (
            <Menu className="h-6 w-6 text-yellow-500" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-20 right-0 bg-white shadow-lg w-full flex flex-col p-4 z-50">
          <Link
            href="/"
            className={`py-2 ${
              pathname === "/"
                ? "text-yellow-600"
                : "text-black hover:text-yellow-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`py-2 ${
              pathname === "/about"
                ? "text-yellow-600"
                : "text-black hover:text-yellow-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`py-2 ${
              pathname === "/services"
                ? "text-yellow-600"
                : "text-black hover:text-yellow-600"
            }`}
          >
            Services
          </Link>
          <Link
            href="/blog"
            className={`py-2 ${
              pathname === "/blog"
                ? "text-yellow-600"
                : "text-black hover:text-yellow-600"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`py-2 ${
              pathname === "/contact"
                ? "text-yellow-600"
                : "text-black hover:text-yellow-600"
            }`}
          >
            Contact
          </Link>
        </nav>
      )}

      {/* Navigation Menu */}
      <nav
        className={`flex lg:flex-row gap-4 lg:gap-6 items-center justify-center ${
          isMenuOpen ? "flex" : "hidden lg:flex"
        }`}
      >
        <Link
          href="/"
          className={`text-base px-2 py-1 rounded transition duration-300 ease-in-out ${
            pathname === "/"
              ? "text-black"
              : isScrolled || pathname !== "/"
              ? "text-black hover:text-yellow-600"
              : "text-black hover:text-white"
          }`}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={`text-base px-2 py-1 rounded transition duration-300 ease-in-out ${
            pathname === "/about"
              ? "text-yellow-600"
              : isScrolled || pathname !== "/"
              ? "text-black hover:text-yellow-600"
              : "text-black hover:text-white"
          }`}
        >
          About
        </Link>

        <Link
          href="/services"
          className={`text-base px-2 py-1 rounded transition duration-300 ease-in-out ${
            pathname === "/services"
              ? "text-yellow-600"
              : isScrolled || pathname !== "/"
              ? "text-black hover:text-yellow-600"
              : "text-black hover:text-white"
          }`}
        >
          Services
        </Link>

        <Link
          href="/blog"
          className={`text-base px-2 py-1 rounded transition duration-300 ease-in-out ${
            pathname === "/blog"
              ? "text-yellow-600"
              : isScrolled || pathname !== "/"
              ? "text-black hover:text-yellow-600"
              : "text-black hover:text-white"
          }`}
        >
          Blog
        </Link>

        <Link
          href="/contact"
          className={`text-base px-2 py-1 rounded transition duration-300 ease-in-out ${
            pathname === "/contact"
              ? "text-yellow-600"
              : isScrolled || pathname !== "/"
              ? "text-black hover:text-yellow-300"
              : "text-black hover:text-white"
          }`}
        >
          Contact
        </Link>
      </nav>

      <div className="flex gap-2 lg:mt-0 ">
        <Button
          className={`border-none shadow-none transition duration-200 ease-in-out mt-2 lg:mt-0 ${
            isScrolled || pathname !== "/"
              ? "bg-yellow-400 text-black  hover:bg-white"
              : "bg-white text-black hover:bg-yellow-400"
          }`}
        >
          Download Our App
        </Button>

        <Button className="text-white border-none shadow-none bg-black hover:bg-yellow-400 hover:text-black transition duration-200 ease-in-out mt-2 lg:mt-0">
          Join Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
