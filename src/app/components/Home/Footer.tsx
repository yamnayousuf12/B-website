"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray">
       <div className="relative mt-1 ">
  {/* Background image */}
  <div
    className="absolute md:inset-20 inset-0 mt-96 md:mt-2 bg-cover bg-center z-0 h-44 opacity-80"
    style={{ backgroundImage: "url('/footer.png')" }}
  ></div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div>
            {/* <h1 className="text-2xl font-bold">BITSFRAME</h1> */}
            <div className="flex items-center space-x-16 md:space-x-20 ">
                      <Image src="/LOGIN.png" alt="Logo" width={150} height={200} />
                      </div>
           
          </div>
          <div className="space-y-1 md:text-lg text-sm md:ml-72">
            <h3 className="font-semibold md:text-xl text-lg text-gray1">Contact</h3>
            <p className="text-gray">hey@bitsframe.com</p>
            <p className="text-gray">+92 309 2074390</p>
          </div>
          <div className="space-y-1 md:text-lg text-sm ">
            <h3 className="font-semibold md:text-xl text-lg text-gray1">Socials</h3>
            <p className="text-gray">Facebook</p>
            <p className="text-gray">Instagram</p>
            <p className="text-gray">LinkedIn</p>
          </div>
          <div className="space-y-1 md:text-lg text-sm">
            <h3 className="font-semibold md:text-xl text-lg text-gray1">Company</h3>
            <p className="text-gray">About Us</p>
            <p className="text-gray">Careers</p>
            <p className="text-gray">Blog</p>
            <p className="text-gray">Contact Us</p>
          </div>
        </div>
       
       

  {/* Footer Content */}
  <div className="relative z-10 border-t border-white pt-6 px-6 flex flex-col md:flex-row justify-between text-xs text-gray1 backdrop-blur-sm">
    <p>© 2024 Bitsframe. All Rights Reserved.</p>
    <div className="flex gap-4 mt-2 md:mt-0 text-xs md:sm">
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
