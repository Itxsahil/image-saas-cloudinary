"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-switch";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "SaaSify"; // Default to "SaaSify" if the env variable is not set

  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent backdrop-blur-lg dark:border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white transition-all duration-300 hover:text-rose-600 dark:hover:text-rose-400"
        >
          {appName} 🚀
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-300">
          <NavItem href="/">Home</NavItem>
          {/* <NavItem href="/features">Features</NavItem> */}
          <NavItem href="/pricing">Pricing</NavItem>
          <NavItem href="/about">About Us</NavItem>
          <NavItem href="/contact">Contact</NavItem>
          <NavItem href="/format-converter">Format Converter</NavItem>
          <NavItem href="/generative-fill">Generative Fill</NavItem>
          <NavItem href="/social-resizer"> Social Resizer</NavItem>
        </nav>

        {/* Theme Toggle Button */}
        <ModeToggle />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-800 dark:text-gray-300 transition-all duration-300 hover:text-rose-600 dark:hover:text-rose-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-white/80 dark:bg-black">
          <NavItem href="/" onClick={() => setIsOpen(false)}>Home</NavItem>
          {/* <NavItem href="/features" onClick={() => setIsOpen(false)}>Features</NavItem> */}
          <NavItem href="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavItem>
          <NavItem href="/about" onClick={() => setIsOpen(false)}>About Us</NavItem>
          <NavItem href="/contact" onClick={() => setIsOpen(false)}>Contact</NavItem>
          <NavItem href="/format-converter" onClick={() => setIsOpen(false)}>Format Changer</NavItem>
          <NavItem href="/generative-fill" onClick={() => setIsOpen(false)}>Generative Fill</NavItem>
        </nav>
      )}
    </header>
  );
}

/* Reusable Navigation Link Component */
const NavItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    className="relative inline-block text-gray-800 dark:text-gray-300 transition-all duration-300 hover:text-rose-600 dark:hover:text-rose-400"
    onClick={onClick}
  >
    {children}
  </Link>
);
