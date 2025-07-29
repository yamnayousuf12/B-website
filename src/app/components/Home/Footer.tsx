"use client";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-gray">
       <div className="relative mt-10 ">
  {/* Background image */}
  <div
    className="absolute md:inset-20 inset-0 mt-auto md:mt-10 bg-cover bg-center z-0 h-44 opacity-80"
    style={{ backgroundImage: "url('/footer.png')" }}
  ></div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div>
            {/* <h1 className="text-2xl font-bold">BITSFRAME</h1> */}
            <div className="flex items-center space-x-3 md:space-x-2 ">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                          <Image src="/logo.svg" alt="Logo" width={30} height={60} />
                          <h1 className="text-white font-bold md:text-2xl text-lg">BITSFRAME</h1>
                        </Link>
                      </div>
           
          </div>
          <div className="space-y-1 md:text-sm text-xs md:ml-96  ">
            <h3 className="font-semibold md:text-lg text-sm text-gray1">Contact</h3>
            <p className="text-gray">hey@bitsframe.com</p>
            <p className="text-gray">+92 309 2074390</p>
          </div>
          <div className="space-y-1 md:text-sm text-xs ">
            <h3 className="font-semibold md:text-lg text-sm text-gray1">Socials</h3>
            <p className="text-gray">Facebook</p>
            <p className="text-gray">Instagram</p>
            <p className="text-gray">LinkedIn</p>
          </div>
          <div className="space-y-1 mr-9 md:text-sm text-xs">
            <h3 className="font-semibold md:text-lg text-sm text-gray1">Company</h3>
            <p className="text-gray">About Us</p>
            <p className="text-gray">Careers</p>
            <p className="text-gray">Blog</p>
            <p className="text-gray">Contact Us</p>
          </div>
        </div>
       
       

  {/* Footer Content */}
  <div className="border-t border-white/15 md:mt-8 mt-20 px-6"></div>
  <div className="relative z-10 md:mt-6 mt-6 px-6 flex flex-col md:flex-row justify-between text-[12px] text-gray1 backdrop-blur-sm ">
    <p>© 2024 Bitsframe. All Rights Reserved.</p>
    <div className="flex gap-4 mt-2 md:mt-0 md:text-sm text-[10px] md:sm">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookies Settings</a>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}
