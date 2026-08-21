import Image from "next/image";

export default function FounderQuote() {
  return (
    <section className="w-full bg-dark-blue py-20 lg:py-0 overflow-hidden relative min-h-[600px] flex items-center">
      {/* Background abstract rings */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] border border-white rounded-full" />
        <div className="absolute top-[10%] right-[-20%] w-[800px] h-[800px] border border-white rounded-full" />
      </div>

      <div className="max-w-[1360px] w-full mx-auto px-6 xl:px-0 flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Founder Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="relative w-[300px] sm:w-[450px] lg:w-[500px] aspect-square lg:aspect-[0.8] overflow-hidden rounded-2xl shadow-2xl group">
            <Image 
              src="/founder_img.png"
              alt="Hepsibah Catherine"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 300px, (max-width: 1200px) 450px, 500px"
              priority
            />
          </div>
        </div>

        {/* Quote Content */}
        <div className="w-full lg:w-1/2 flex flex-col text-white">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-normal leading-tight lg:leading-[60px] mb-12 italic">
            &ldquo;Great companies are not built by <span className="font-bold">ideas</span> alone, but by people who believe in turning those ideas into <span className="font-bold">reality</span>.&rdquo;
          </h2>
          
          <div className="flex flex-col gap-1">
            <p className="text-xl md:text-2xl font-normal italic">&mdash;Hepsibah Catherine</p>
            <p className="text-base md:text-lg font-medium opacity-80 uppercase tracking-widest">Founder & CEO</p>
          </div>
        </div>

      </div>
    </section>
  );
}
