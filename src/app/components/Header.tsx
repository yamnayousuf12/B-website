// components/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    
    <header className="flex justify-between items-center px-6 py-4 bg-black text-white  mx-8 border-b border-white  mb-6 ">
     
        <div className="flex items-center space-x-20 ml-10 ">
          <Image src="/LOGIN.png" alt="Logo" width={150} height={200} />
          </div>

      <nav className="hidden md:flex gap-6 text-sm ">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/case-studies">Case Studies</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>

      <div className="flex items-center gap-4">
        
        <button
      className="border border-white p-1 rounded-full bg-white/10 hover:bg-white backdrop-blur-md shadow-md transition-all duration-300"
    >
      <Mail className=" hover:text-black text-white w-4 h-4" />
    </button>
        <Link href="/contact-us">
          <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-Blue">
            Contact Us →
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
