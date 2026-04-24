import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 left-0 z-[100] h-[80px] lg:h-[110px] bg-light-bg/90 backdrop-blur-md transition-all border-b border-gray-100">
      <div className="max-w-[1360px] w-full mx-auto px-6 xl:px-0 flex items-center justify-between h-full">
        <div className="flex gap-8 md:gap-12 items-center">
          <Link href="/" className="text-lg md:text-xl font-normal text-black hover:text-deep-blue transition">
            HOME
          </Link>
          <Link href="#about" className="text-lg md:text-xl font-normal text-black hover:text-deep-blue transition">
            ABOUT
          </Link>
          <Link href="#partners" className="text-lg md:text-xl font-normal text-black hover:text-deep-blue transition">
            PARTNERS
          </Link>
          <Link href="#testimonials" className="text-lg md:text-xl font-normal text-black hover:text-deep-blue transition hidden sm:block">
            TESTIMONIALS
          </Link>
          <Link href="#contact" className="text-lg md:text-xl font-normal text-black hover:text-deep-blue transition">
            CONTACT
          </Link>
        </div>

        <button className="hidden md:flex bg-deep-blue text-white text-[18px] font-normal py-3.5 px-8 rounded-[12px] hover:bg-dark-blue transition-colors items-center justify-center">
          Book Appointment
        </button>
      </div>

    </nav>
  );
}
