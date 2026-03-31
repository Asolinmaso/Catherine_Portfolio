import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#00040D] flex flex-col items-center pt-24 overflow-hidden border-t border-[#1a2b4c] text-white">
      
      {/* Background Graphic placeholder */}
      <div className="absolute top-0 left-0 w-[1440px] h-full pointer-events-none opacity-30 select-none mix-blend-screen overflow-hidden">
        <Image 
          src="/globe_mesh.png"
          alt="Globe Network Vector"
          fill
          className="object-cover"
          sizes="1440px"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full px-6 xl:px-0 max-w-[1360px]">
        <h3 className="text-xl md:text-2xl font-normal text-white mb-4 tracker-wider">Have an Idea ?</h3>
        <h2 className="text-4xl md:text-[56px] font-bold text-white mb-16 text-center leading-tight drop-shadow-md">
          Let’s Make Something<br /> Amazing Together.
        </h2>

        {/* Input area */}
        <div className="w-full max-w-[656px] bg-[#D9D9D9] rounded-xl flex flex-col md:flex-row items-center justify-between p-2 md:pl-6 mb-32 gap-4 shadow-xl">
          <input 
            type="text" 
            placeholder="Type Your Message Here.." 
            className="w-full bg-transparent border-none outline-none text-[#666] font-medium text-lg md:text-xl placeholder:text-[#666] py-3 md:py-0"
          />
          <button className="w-full md:w-auto bg-deep-blue text-white font-medium text-lg py-4 px-8 rounded-lg shrink-0 hover:bg-dark-blue transition-colors shadow-md">
            Contact Me
          </button>
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-white/20 mb-8" />

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pb-8">
          <p className="text-[16px] md:text-[20px] font-normal text-[#D1D1D1] mb-8 md:mb-0 text-center md:text-left">
            © 2026 All rights reserved. | Designed & Developed By Manvian
          </p>

          <div className="flex gap-4 items-center">
            <Link href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-blue hover:scale-110 transition-transform shadow-md">
               <FaLinkedin size={24} />
            </Link>
            <Link href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-blue hover:scale-110 transition-transform shadow-md">
               <FaTwitter size={24} />
            </Link>
            <Link href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-blue hover:scale-110 transition-transform shadow-md font-bold text-2xl italic pb-1">
               in
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
