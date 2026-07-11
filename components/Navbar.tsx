"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const navLinks = [
    {
      name: "Accueil",
      href: "/",
    },
    {
      name: "À propos",
      href: "/a-propos",
    },
    {
      name: "Nos missions",
      href: "/missions",
    },
    {
      name: "Projets",
      href: "/projets",
    },
    {
      name: "Actualités",
      href: "/actualites",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-white md:px-6">
        {/* Left Desktop */}

        <div className="hidden items-center gap-10 lg:flex">
          <div className="flex items-center gap-5">
            <Link href="#" className="transition hover:text-yellow-400">
              <FaFacebookF />
            </Link>

            <Link href="#" className="transition hover:text-yellow-400">
              <FaInstagram />
            </Link>
          </div>

          <nav className="flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Logo */}

        <Link href="/" className="relative z-[60]">
          <Image
            src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783444892/logo_m0zm6v.png"
            alt="Fondation Mobari Maria"
            width={90}
            height={90}
            priority
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        {/* Right Desktop */}

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/don"
            className="rounded-md bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
          >
            Faire un don
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="relative z-[70] rounded-md p-2 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={32} className="text-black" /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Full Screen Menu */}

      <div
        className={`fixed inset-0 z-[55] flex min-h-screen flex-col bg-white transition-all duration-500 lg:hidden ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        {/* Header Mobile */}

        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="https://res.cloudinary.com/dukqurtfw/image/upload/v1783444892/logo_m0zm6v.png"
              alt="Fondation Mobari Maria"
              width={80}
              height={80}
              className="h-14 w-auto object-contain"
            />
          </Link>

          <button onClick={closeMenu} className="rounded-md p-2">
            <X size={32} className="text-black" />
          </button>
        </div>

        {/* Links */}

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-xl font-semibold text-gray-900 transition hover:text-yellow-500"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/don"
            onClick={closeMenu}
            className="mt-4 rounded-md bg-yellow-400 px-10 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            Faire un don
          </Link>

          {/* Social */}

          <div className="mt-6 flex gap-7 text-gray-700">
            <Link href="https://www.facebook.com/profile.php?id=100082627152538" className="transition hover:text-yellow-500">
              <FaFacebookF size={22} />
            </Link>

            <Link href="#" className="transition hover:text-yellow-500">
              <FaInstagram size={22} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
