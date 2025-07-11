"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white/80">
       <div className="relative mt-1 ">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-10"
    style={{ backgroundImage: "url('/footer.png')" }}
  ></div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            {/* <h1 className="text-2xl font-bold">BITSFRAME</h1> */}
            <div className="flex items-center space-x-20  ">
                      <Image src="/LOGIN.png" alt="Logo" width={150} height={200} />
                      </div>
           
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Contact</h3>
            <p>hey@bitsframe.com</p>
            <p>+92 309 2074390</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Socials</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold">Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
        </div>
       
       

  {/* Footer Content */}
  <div className="relative z-10 border-t border-gray pt-6 px-6 flex flex-col md:flex-row justify-between text-sm text-white/80 backdrop-blur-sm">
    <p>© 2024 Bitsframe. All Rights Reserved.</p>
    <div className="flex gap-4 mt-2 md:mt-0">
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
