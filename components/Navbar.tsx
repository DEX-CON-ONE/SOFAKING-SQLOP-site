"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass =
    "text-white hover:text-secondary transition-colors font-medium drop-shadow-md";

  const Links = (
    <>
      <Link href="/" className={linkClass} onClick={() => setOpen(false)}>
        Home
      </Link>
      <Link href="/services" className={linkClass} onClick={() => setOpen(false)}>
        Services
      </Link>
      <Link href="/blog" className={linkClass} onClick={() => setOpen(false)}>
        Blog
      </Link>
      <Link href="/about" className={linkClass} onClick={() => setOpen(false)}>
        About
      </Link>
      <Link href="/contact" className={linkClass} onClick={() => setOpen(false)}>
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-white/10 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center relative logo-sheen">
            <Image
              src="/assets/brand/Brand_Logo-stacked.png"
              alt="SQLOPTIMISE Logo"
              width={120}
              height={60}
  className="h-12 w-auto transform scale-[1.18] md:scale-[1.25] relative z-10 logo-edge-glow"
            />
          </Link>

          <nav className="hidden md:flex space-x-8">{Links}</nav>
          <a
            href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/"
            className="btn-primary hidden md:inline-block"
          >
            Schedule a Call
          </a>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 pb-4">
            {Links}
            <a
              href="https://outlook.office.com/book/SQLOPTIMISE@NETORGFT9176567.onmicrosoft.com/"
              className="btn-primary w-full text-center"
              onClick={() => setOpen(false)}
            >
              Schedule a Call
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

