import { SERVICES } from "@/data/services";
import { CONTACT_PHONE_HREF } from "@/constants/theme";

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white py-16 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-16 xl:px-20 select-none">
      <div className="w-full max-w-6xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-bold tracking-tight text-[#1C2036] leading-tight">
            Our Services
          </h2>
          <p className="mt-3 text-slate-500 text-sm leading-relaxed">
            You have problems with leaking pipes, broken tiles, lost keys or <br />want to tidy up the trees around you, of course you need our help!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 items-start">

          {SERVICES.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center sm:items-start sm:text-left w-full">
              <div className="w-[56px] h-[56px] bg-primary rounded-[14px] flex items-center justify-center mb-4 shadow-sm shrink-0">
                <img
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-6 h-6 object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-[16px] md:text-[17px] font-bold text-[#1C2036] mb-2 tracking-tight leading-snug">
                {service.title}
              </h3>
              <p className="text-[#1C2036] opacity-60 text-[13px] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-secondary rounded-[24px] p-7 flex flex-col items-center justify-center text-center w-full min-h-[220px]">
            <h3 className="text-white text-[19px] font-bold tracking-tight mb-2">
              More service?
            </h3>
            <p className="text-white/90 text-[13px] leading-snug mb-5 max-w-[190px]">
              You can tell us what you need and we can help!
            </p>
            <a
              href={CONTACT_PHONE_HREF}
              className="bg-white text-secondary font-bold text-sm py-3 w-full max-w-[200px] text-center rounded-full hover:bg-slate-50 transition-colors shadow-sm inline-block"
            >
              Call Us Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
