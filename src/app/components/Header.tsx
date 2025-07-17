"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname(); // ✅ used to detect route changes

  // Automatically close dropdown and mobile menu when route changes
  useEffect(() => {
    setDropdownOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-black text-white px-6 py-4 border-b border-white mb-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/LOGIN.png" alt="Logo" width={120} height={60} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <Link href="/">Home</Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-300"
            >
              Services <ChevronDown size={14} />
            </button>
            <div
              className={`absolute left-0 mt-2 bg-white text-black rounded shadow-lg py-2 w-48 z-50 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <Link href="/services/cybersecurity" className="block px-4 py-2 hover:bg-gray">Cybersecurity</Link>
              <Link href="/services/ai-chatbots" className="block px-4 py-2 hover:bg-gray">AI Chatbots</Link>
              <Link href="/services/custom-web-development" className="block px-4 py-2 hover:bg-gray">Custom Web Development</Link>
              <Link href="/services/innovative-app-solution" className="block px-4 py-2 hover:bg-gray">Innovative App Solution</Link>
              <Link href="/services/cloud-architect" className="block px-4 py-2 hover:bg-gray">Cloud Architect</Link>
              <Link href="/services/cloud-architecture" className="block px-4 py-2 hover:bg-gray">Cloud Architecture</Link>
              <Link href="/services/staff-augmentation" className="block px-4 py-2 hover:bg-gray">Staff Augmentation</Link>
              <Link href="/services/ui-ux" className="block px-4 py-2 hover:bg-gray">UI/UX</Link>
            </div>
          </div>

          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-white p-1 rounded-full bg-white/10 hover:bg-white backdrop-blur-md shadow-md transition-all duration-300">
            <Mail className="text-white hover:text-black w-4 h-4" />
          </button>
          <Link href="/contact-us">
            <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500">
              Contact Us →
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block">Home</Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 w-full"
            >
              Services <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 space-y-1 text-sm">
                <Link href="/services/cybersecurity" className="block px-4 py-2 hover:bg-gray">Cybersecurity</Link>
                <Link href="/services/ai-chatbots" className="block px-4 py-2 hover:bg-gray">AI Chatbots</Link>
                <Link href="/services/custom-web-development" className="block px-4 py-2 hover:bg-gray">Custom Web Development</Link>
                <Link href="/services/innovative-app-solution" className="block px-4 py-2 hover:bg-gray">Innovative App Solution</Link>
                <Link href="/Services/cloud-architect" className="block px-4 py-2 hover:bg-gray">Cloud Architect</Link>
                <Link href="/services/cloud-architecture" className="block px-4 py-2 hover:bg-gray">Cloud Architecture</Link>
                <Link href="/services/staff-augmentation" className="block px-4 py-2 hover:bg-gray">Staff Augmentation</Link>
                <Link href="/services/ui-ux" className="block px-4 py-2 hover:bg-gray">UI/UX</Link>
              </div>
            )}
          </div>

          <Link href="/case-studies" className="block">Case Studies</Link>
          <Link href="/blogs" className="block">Blogs</Link>
          <Link href="/About-us" className="block">About Us</Link>
          <Link href="/contact-us" className="block">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
