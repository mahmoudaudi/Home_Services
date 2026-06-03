import { SERVICES } from "@/data/services";
import { CONTACT_PHONE_HREF } from "@/constants/theme";

export default function ServicesGrid() {
  return (
    /* Removed min-h-screen — section height should be driven by content */
    <section className="bg-white py-16 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-16 xl:px-20 select-none">
      <div className="w-full max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[44px] font-bold tracking-tight text-[#1C2036] leading-tight">
            Our Services
          </h2>
          <p className="mt-3 text-slate-500 text-sm md:text-[15px] leading-relaxed">
            You have problems with leaking pipes, broken tiles, lost keys or
            want to tidy up the trees around you? We can help!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 xl:gap-x-10 items-start">

          {SERVICES.map((service) => (
            <div key={service.title} className="flex flex-col items-start text-left w-full">
              <div className="w-[52px] h-[52px] bg-[#142257] rounded-[14px] flex items-center justify-center mb-4 shadow-sm shrink-0">
                <img
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-6 h-6 object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-[17px] md:text-[18px] font-bold text-[#1C2036] mb-1.5 tracking-tight leading-snug">
                {service.title}
              </h3>
              <p className="text-slate-400 text-[13px] md:text-[13.5px] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-[#15B2F5] rounded-[24px] p-8 sm:p-6 flex flex-col items-center justify-center text-center w-full min-h-[200px]">
            <h3 className="text-white text-[20px] font-bold tracking-tight mb-2">
              More service?
            </h3>
            <p className="text-white/90 text-[13px] leading-snug mb-5 max-w-[200px]">
              You can tell us what you need and we can help!
            </p>
            <a
              href={CONTACT_PHONE_HREF}
              className="bg-white text-[#15B2F5] font-bold text-sm py-3 w-full max-w-[200px] text-center rounded-full hover:bg-slate-50 transition-colors shadow-sm inline-block"
            >
              Call Us Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
