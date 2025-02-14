"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import WhiteLogo from "@/app/white-logo.svg";
import YellowLogo from "@/app/yellow.svg";
import { Button } from "../ui/button";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`flex items-center justify-between h-16 px-4 md:px-10 transition-colors duration-300 sticky top-0 z-50 w-full ${
        isScrolled || pathname !== "/" ? "bg-white shadow-lg" : "bg-yellow-400"
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image
          src={isScrolled || pathname !== "/" ? YellowLogo : WhiteLogo}
          alt="RoadVize Logo"
          width={50}
          height={50}
          className="h-10 w-auto"
        />
      </Link>
      <Button className="text-white bg-black hover:bg-yellow-400 hover:text-black transition duration-200 ease-in-out">
        Join Now
      </Button>
    </header>
  );
};

export default Header;
