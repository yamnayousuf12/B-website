"use client";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-gray">
       <div className="relative mt-10 ">
  {/* Background image */}
  <div
    className="absolute md:inset-20 inset-0 mt-auto md:mt-10 bg-cover bg-center z-0 h-48 "
    style={{ backgroundImage: "url('/footer.png')" }}
  ></div>
      <div className="max-w-6xl md:max-w-[95%] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div>
            {/* <h1 className="text-2xl font-bold">BITSFRAME</h1> */}
            <div className="flex items-center space-x-3 md:space-x-2 ">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                          <Image src="/logo.svg" alt="Logo" width={30} height={60} />
                          
                        </Link>
                      </div>
           
          </div>
          <div className="space-y-1 md:text-sm text-xs md:ml-96  ">
            <h3 className="font-semibold md:text-lg text-sm text-gray1">Contact</h3>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hey@bitsframe.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Send email"
    title="Send email"
    className=" p-1 backdrop-blur-md shadow-md transition-all duration-300 flex items-center justify-center text-gray hover:underline"
  >

  hey@bitsframe.com
</a>

<a
  href="tel:+923092074390"
  className="text-gray hover:underline"
>
  +92 309 2074390
</a>

          </div>
          <div className="space-y-1 md:text-sm text-xs ">
            <h3 className="font-semibold md:text-lg text-sm text-gray1">Socials</h3>
            
            <p ><a
  href="https://www.instagram.com/bitsframe/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray hover:underline"
>
  Instagram
</a></p>
            <p><a
  href="https://www.linkedin.com/in/yourprofile"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray hover:underline"
>
  LinkedIn
</a></p>
          </div>
          <div className="space-y-1 mr-9 md:text-sm text-xs">
            <h3 className="font-semibold md:text-lg text-sm text-gray1">Quick links</h3>
          <Link href="/About-us" className="block">About us</Link>
            
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
       
       

  {/* Footer Content */}
  <div className="border-t border-white/15 md:mt-24 mt-24 px-6"></div>
  <div className="relative z-10 md:mt-6 mt-6 px-6 flex flex-col md:flex-row justify-center text-[12px] text-[#fcfbfd] backdrop-blur-sm  ">
    <p >© 2025 Bitsframe. All Rights Reserved.</p>
   
  </div>
</div>

      </div>
    </footer>
  );
}
