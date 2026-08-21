"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this team has been a game-changer for our business. Their attention to detail and commitment to delivering quality exceeded our expectations.",
    name: "Richard Mathews",
    title: "Syntrix",
    image: "/testimonial_avatar.png"
  },
  {
    quote: "The strategic consulting provided by Catherine was exactly what our startup needed to navigate the early-stage scaling challenges. Highly recommended!",
    name: "Sarah Jenkins",
    title: "EcoVibe CEO",
    image: "/testimonial_avatar.png"
  },
  {
    quote: "Incredible eye for detail and a deep understanding of market dynamics. The results we've seen since implementing the new strategy are phenomenal.",
    name: "David Chen",
    title: "Global Tech Partners",
    image: "/testimonial_avatar.png"
  },
  {
    quote: "Professionalism, creativity, and results. We've worked with many consultants, but none have brought the level of passion and expertise that Catherine does.",
    name: "Anita Rodriguez",
    title: "Creative Minds Group",
    image: "/testimonial_avatar.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="w-full bg-light-bg py-24 flex flex-col items-center">
      <div className="max-w-[1360px] w-full mx-auto flex flex-col items-center px-6 xl:px-0">
        
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-[48px] font-semibold text-deep-blue leading-tight text-center">
            Hear From Our People
          </h2>
          <p className="text-xl md:text-[24px] font-normal text-black text-center max-w-[850px] leading-snug">
            Trusted by clients across industries Delivering results that truly matter
          </p>
        </div>

        {/* Frame 262 Wrapper */}
        <div className="relative w-full max-w-[1101px] h-[450px] md:h-[392px] flex items-center justify-center mx-auto">
          
          {/* Navigation Left (Frame 33) */}
          <button 
            aria-label="Previous Testimonial" 
            onClick={prev}
            className="absolute left-0 top-[156px] w-[80px] h-[80px] bg-[#0D3F80] rounded-[60px] flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform z-30 cursor-pointer border-none"
          >
            <ChevronLeft size={32} strokeWidth={2} />
          </button>
          
          {/* Testimonial Cards Container (Frame 261) */}
          <div className="relative w-full max-w-[803px] h-full flex items-center justify-center">
            
            {/* Background Card (Frame 223 - Bottom Layer) */}
            <div className="absolute top-[42px] left-1/2 -translate-x-1/2 w-full max-w-[803px] h-[308px] bg-[#F1F3FA] rounded-[24px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] -z-10" />
            
            {/* Main Front Card (Frame 222) */}
            <div className="relative w-full max-w-[741px] h-[392px] bg-[#F1F3FA] rounded-[24px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] z-10 flex flex-col items-start p-8 md:p-[60px_60px_40px_60px] overflow-hidden border border-white/50">
              
              {/* Quote Text */}
              <p className="text-[20px] font-normal text-[#2E2E2E] leading-[30px] flex items-center h-[180px] w-full max-w-[621px] mb-6 md:mb-0">
                &quot;{current.quote}&quot;
              </p>
              
              {/* Author Info (Frame 218) */}
              <div className="flex items-center gap-3 w-[248px] h-[64px] mt-auto md:absolute md:top-[264px] md:left-[60px]">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 relative shrink-0">
                  <Image 
                    src={current.image} 
                    alt={current.name} 
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <span className="text-[20px] font-normal text-[#2E2E2E] leading-[136.89%]">{current.name}</span>
                  <span className="text-[20px] font-normal text-[#2E2E2E] leading-[136.89%]">{current.title}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Right (Frame 34) */}
          <button 
            aria-label="Next Testimonial" 
            onClick={next}
            className="absolute right-0 top-[156px] w-[80px] h-[80px] bg-[#0D3F80] rounded-[60px] flex items-center justify-center text-white shadow-xl hover:scale-105 transition-transform z-30 cursor-pointer border-none"
          >
            <ChevronRight size={32} strokeWidth={2} />
          </button>

        </div>

      </div>
    </section>
  );
}
