import { Target, Eye, Diamond } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Mission",
      icon: Target,
      text: "To drive innovation and deliver meaningful growth for customers and stakeholders. We focus on creating impactful solutions that add long-term value.",
    },
    {
      title: "Vision",
      icon: Eye,
      text: "To build a future-ready organization that leads with purpose and inspires change. We aim to set new standards of excellence in everything we do.",
    },
    {
      title: "Values",
      icon: Diamond,
      text: "We believe in integrity, innovation, and excellence in every action. Collaboration and a customer-first approach guide our decisions.",
    },
  ];

  return (
    <section id="about" className="w-full bg-light-bg flex flex-col items-center py-20 px-6 xl:px-0">
      <div className="max-w-[1360px] w-full mx-auto flex flex-col items-center">

        {/* Header content */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-[48px] font-semibold text-deep-blue mb-8">
            About Me
          </h2>
          <p className="text-lg md:text-[24px] font-normal text-text-gray leading-relaxed text-center">
            As a CEO, I believe leadership is about vision, innovation, and people. My journey has been driven by the passion to build meaningful solutions that create real impact. I focus on leading with clarity, empowering talented teams, and continuously exploring new opportunities for growth. Through strategic thinking and strong execution, I strive to guide my company toward excellence while creating lasting value for our clients and community.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-[37px] w-full max-w-[397px] h-auto md:h-[491px] flex flex-col items-center justify-start py-10 px-8 shadow-[3px_8px_20px_rgba(0,0,0,0.15)] border border-[#BBBBBB]/30 hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Icon Container */}
                <div className="w-[100px] h-[100px] bg-deep-blue rounded-full border border-deep-blue flex items-center justify-center mb-6">
                  <Icon size={40} className="text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-[32px] font-medium text-black mb-3">
                  {card.title}
                </h3>

                {/* Divider Line */}
                <div className="w-[125px] h-[3px] bg-deep-blue mb-6 rounded-full" />

                {/* Description Text */}
                <p className="text-base md:text-[20px] font-normal text-[#4D4D4D] text-center leading-[30px]">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
