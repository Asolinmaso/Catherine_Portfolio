import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-light-bg py-24 flex justify-center px-6 xl:px-0">
      <div className="max-w-[1360px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
        
        {/* Left Info */}
        <div className="flex flex-col max-w-[488px]">
          <h2 className="text-4xl md:text-[48px] font-semibold text-deep-blue mb-6">
            Let’s Connect
          </h2>
          <p className="text-xl md:text-[24px] font-normal text-black mb-16 leading-relaxed">
            Interested in collaboration, partnerships, or business opportunities? Feel free to reach out and start the conversation.
          </p>

          <div className="flex flex-col gap-10">
            {/* Email */}
            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform cursor-pointer">
              <div className="w-14 h-14 bg-deep-blue rounded-full flex items-center justify-center text-white shrink-0 shadow-md group-hover:bg-dark-blue">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black mb-1">Email Address</h3>
                <p className="text-xl font-normal text-[#595757]">connect@manvian.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform cursor-pointer">
              <div className="w-14 h-14 border-[3px] border-deep-blue rounded-full flex items-center justify-center text-deep-blue shrink-0 shadow-sm group-hover:bg-deep-blue group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black mb-1">Location</h3>
                <p className="text-xl font-normal text-[#595757] leading-relaxed">
                  No.4, 1st floor, Alamathi main road, New vellanur, Avadi, chennai - 600062.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform cursor-pointer">
              <div className="w-14 h-14 border-[3px] border-deep-blue rounded-full flex items-center justify-center text-deep-blue shrink-0 shadow-sm group-hover:bg-deep-blue group-hover:text-white transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black mb-1">Phone</h3>
                <p className="text-xl font-normal text-[#595757]">+91 8778359643</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-[712px] bg-[#0D3F80]/5 border-2 border-deep-blue rounded-[33px] p-8 md:p-14 shadow-[5px_7px_15px_rgba(0,0,0,0.05)] mx-auto lg:ml-auto focus-within:shadow-[5px_7px_25px_rgba(0,0,0,0.1)] transition-shadow">
          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                type="text" 
                placeholder="Your Name*" 
                className="w-full bg-white/50 border border-deep-blue rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-deep-blue/50 transition placeholder:text-[#666666] text-black"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email*" 
                className="w-full bg-white/50 border border-[#777]/30 rounded-xl px-6 py-4 outline-none focus:border-deep-blue transition placeholder:text-[#666666] text-black"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                type="tel" 
                placeholder="Your Phone*" 
                className="w-full bg-white/50 border border-[#777]/30 rounded-xl px-6 py-4 outline-none focus:border-deep-blue transition placeholder:text-[#666666] text-black"
                required
              />
              <input 
                type="text" 
                placeholder="Location*" 
                className="w-full bg-white/50 border border-[#777]/30 rounded-xl px-6 py-4 outline-none focus:border-deep-blue transition placeholder:text-[#666666] text-black"
                required
              />
            </div>
            <input 
              type="text" 
              placeholder="Company/Organization*" 
              className="w-full bg-white/50 border border-[#777]/30 rounded-xl px-6 py-4 outline-none focus:border-deep-blue transition placeholder:text-[#666666] text-black"
              required
            />
            <textarea 
              placeholder="Purpose for connecting*" 
              rows={4}
              className="w-full bg-white/50 border border-[#777]/30 rounded-xl px-6 py-4 outline-none focus:border-deep-blue transition placeholder:text-[#666666] text-black resize-none"
              required
            />
            
            <div className="flex justify-center mt-4">
              <button 
                type="submit"
                className="bg-deep-blue text-white font-medium text-2xl py-4 px-12 rounded-full hover:bg-dark-blue hover:shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                Get In Touch
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
