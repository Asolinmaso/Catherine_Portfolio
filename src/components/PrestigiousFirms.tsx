import Image from "next/image";
import Link from "next/link";

export default function PrestigiousFirms() {
  const logos = [
    { src: "/prestigious_firms/1st_top.png", left: "39.7%", top: "0%", id: "Ellipse 31" },
    { src: "/prestigious_firms/1st_left.png", left: "20.5%", top: "20.6%", id: "Ellipse 32" },
    { src: "/prestigious_firms/1st_right.png", left: "72.8%", top: "20.6%", id: "Ellipse 33" },
    { src: "/prestigious_firms/2nd_left.png", left: "16.3%", top: "56.4%", id: "Ellipse 29" },
    { src: "/prestigious_firms/3rd_right.png", left: "67.3%", top: "56.4%", id: "Ellipse 26" },
    { src: "/prestigious_firms/3rd_left.png", left: "0%", top: "67.3%", id: "Ellipse 27" },
    { src: "/prestigious_firms/3rd_right.png", left: "83.0%", top: "76.0%", id: "Ellipse 34" }, // Reusing 3rd_right for the 7th node
  ];

  return (
    <section id="partners" className="relative w-full bg-[#06254D] py-24 lg:py-40 overflow-hidden flex flex-col items-center min-h-[900px]">

      {/* Background Blurs (Ellipse 36, 37, 38) */}
      <div className="absolute left-[-93px] top-[-94px] w-[289px] h-[285px] bg-[#80A9FF] opacity-50 blur-[150px] lg:blur-[250px] rounded-full" />
      <div className="absolute right-0 top-[174px] w-[289px] h-[285px] bg-[#80A9FF] opacity-50 blur-[150px] lg:blur-[250px] rounded-full" />
      <div className="absolute left-[589px] bottom-[100px] w-[289px] h-[285px] bg-[#80A9FF] opacity-50 blur-[150px] lg:blur-[250px] rounded-full" />

      {/* Orbit Rings Container (Fixed width coordinate system) */}
      <div className="relative w-full max-w-[1360px] h-[600px] md:h-[800px] flex items-center justify-center mb-16 px-6 xl:px-0">

        {/* Concentric Rings (Ellipse 23, 24, 25, 35) */}
        <div className="absolute bottom-[0] left-1/2 -translate-x-1/2 w-[544px] h-[544px] border border-white/20 rounded-full" />
        <div className="absolute bottom-[-117px] left-1/2 -translate-x-1/2 w-[777px] h-[777px] border border-white/20 rounded-full" />
        <div className="absolute bottom-[-224px] left-1/2 -translate-x-1/2 w-[990px] h-[990px] border border-white/18 rounded-full" />
        <div className="absolute bottom-[-330px] left-1/2 -translate-x-1/2 w-[1203px] h-[1203px] border border-white/15 rounded-full" />

        {/* Central Manvian Pill (Frame 212) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[317px] w-[300px] h-[98px] bg-[#78AFFD] border border-white/44 rounded-[153px] flex items-center p-2 z-30 shadow-lg group hover:scale-105 transition-all">
          <div className="w-[87px] h-[87px] flex items-center justify-center overflow-hidden shrink-0 drop-shadow-[0_0_10px_rgba(35,86,238,0.4)]">
            <Image
              src="/prestigious_firms/center.png"
              alt="Manvian"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col ml-4">
            <span className="text-[28px] font-normal text-[#07264F] leading-tight mb-1">Manvian</span>
            <Link href="#" className="flex items-center gap-1 group-hover:underline">
              <span className="text-[12px] font-medium text-[#07264F] uppercase tracking-wider">Open Website</span>
              <span className="text-[14px] text-[#07264F] rotate-45 transform">↑</span>
            </Link>
          </div>
        </div>

        {/* Logo Nodes */}
        {logos.map((logo, i) => (
          <div
            key={i}
            className="absolute w-[80px] h-[80px] lg:w-[95.24px] lg:h-[95.24px] z-20 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_20px_rgba(120,175,253,0.6)]"
            style={{ left: logo.left, top: logo.top }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={logo.src}
                alt={`Partner ${i}`}
                fill
                className="object-contain"
                sizes="95px"
              />
            </div>
          </div>
        ))}

      </div>

      {/* Section Title */}
      <div className="text-center z-40 mt-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-white capitalize leading-[60px] tracking-wide">
          Our Prestigious Firms
        </h2>
      </div>

    </section>
  );
}