import phoneIcon from "@/assets/icons/phone.svg";
import checkIcon from "@/assets/icons/check.svg";
import leftWorkerImage from "@/assets/Image 1.png";
import rightWorkerImage from "@/assets/Image 2.png";
import guaranteeIcon from "@/assets/icons/Guarantee.png";
import clockIcon from "@/assets/icons/Clock.png";
import mapIcon from "@/assets/icons/Map.png";
import calendarIcon from "@/assets/icons/Calendar.png";
import { CONTACT_PHONE_HREF } from "@/constants/theme";

const HERO_FEATURES = [
  { icon: guaranteeIcon, alt: "Satisfaction Guarantee", label: "Satisfaction\nGuarantee" },
  { icon: clockIcon,     alt: "24H Availability",      label: "24H\nAvailability" },
  { icon: mapIcon,       alt: "Local US Professional", label: "Local US\nProfessional" },
  { icon: calendarIcon,  alt: "Flexible Appointments", label: "Flexible\nAppointments" },
];

const CHECK_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2315B2F5'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E";

const PHONE_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23142257'%3E%3Cpath d='M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z'/%3E%3C/svg%3E";

export default function HeroSection() {
  return (
    <section className="bg-[#142257] text-white relative overflow-hidden flex flex-col min-h-[610px] md:min-h-screen md:pb-14 xl:mb-0 mb-[-2px]">

      {/* Left image — absolute, independent from center content */}
      <div
        className="hidden xl:block absolute left-0 xl:w-[22%] 2xl:w-[24%] z-10"
        style={{ top: "10px" }}
      >
        <img
          src={leftWorkerImage}
          alt="Home maintenance professional"
          className="w-full object-contain shadow-md"
        />
      </div>

      {/* Right image — absolute, independent from center content */}
      <div
        className="hidden xl:block absolute right-0 xl:w-[22%] 2xl:w-[24%] z-10"
        style={{ top: "10px" }}
      >
        <img
          src={rightWorkerImage}
          alt="Home plumbing professional"
          className="w-full object-contain shadow-md"
        />
      </div>

      {/* Center content */}
      <div className="flex-1 flex flex-col items-center justify-between text-center
                      px-5 pt-20 sm:pt-40 pb-0">

          {/* Headline + CTA */}
          <div className="flex flex-col items-center w-full max-w-xl pt-2 sm:pt-0 xl:my-auto">
            <p className="text-slate-300 text-[12px] sm:text-sm md:text-sm tracking-[0.12em] font-medium">
              Maintenances&nbsp;&nbsp;·&nbsp;&nbsp;Repairs&nbsp;&nbsp;·&nbsp;&nbsp;Improvements
            </p>

            <h1 className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[48px] xl:text-[50px] 2xl:text-[54px]
                           font-bold leading-[1.22] tracking-tight mt-5 text-white max-w-[340px] sm:max-w-none">
              Need improvement
              <br />
              or repair your home?
              <br />
              we can help!
            </h1>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-6 mt-6 text-[12px] sm:text-sm">
              {["Free Quotes", "100% Commitment-Free"].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <img
                    src={checkIcon}
                    className="w-4 h-4 object-contain shrink-0"
                    onError={(e) => { e.target.src = CHECK_FALLBACK; }}
                    alt=""
                    aria-hidden="true"
                  />
                  <span className="text-[#15B2F5] font-medium">{label}</span>
                </div>
              ))}
            </div>

            <a href={CONTACT_PHONE_HREF} className="group mt-8 bg-[#15B2F5] text-white font-bold px-4 sm:px-6 py-2.5 rounded-full
                               inline-flex items-center justify-center gap-2
                               hover:bg-[#139ed9] hover:-translate-y-0.5
                               transition-all duration-300 select-none
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
              <span className="tracking-wide text-[13px] sm:text-[15px]">Call Us Now</span>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0
                              transition-transform duration-300 group-hover:scale-105">
                <img
                  src={phoneIcon}
                  alt=""
                  aria-hidden="true"
                  className="w-3 h-3 object-contain transition-transform duration-300 group-hover:rotate-12"
                  onError={(e) => { e.target.src = PHONE_FALLBACK; }}
                />
              </div>
            </a>
          </div>

          {/* Feature strip */}
          <div className="w-full mt-0 xl:mt-24 pb-0">

            {/* Mobile / tablet 2×2 grid */}
            <div className="xl:hidden max-w-[330px] mx-auto pb-8">

              {/* Row 1 */}
              <div className="grid grid-cols-2 relative">
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/18 to-transparent pointer-events-none" />
                {HERO_FEATURES.slice(0, 2).map(({ icon, alt, label }) => (
                  <div key={alt} className="flex flex-col items-center text-center py-5 sm:py-6 px-2">
                    <div className="w-10 h-10 rounded-full bg-[#31448C] flex items-center justify-center mb-3">
                      <img src={icon} alt="" aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-white text-[11px] sm:text-[13px] font-medium leading-[1.4] whitespace-pre-line max-w-[110px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Horizontal divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

              {/* Row 2 */}
              <div className="grid grid-cols-2 relative">
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/18 to-transparent pointer-events-none" />
                {HERO_FEATURES.slice(2, 4).map(({ icon, alt, label }) => (
                  <div key={alt} className="flex flex-col items-center text-center py-5 sm:py-6 px-2">
                    <div className="w-10 h-10 rounded-full bg-[#31448C] flex items-center justify-center mb-3">
                      <img src={icon} alt="" aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-white text-[11px] sm:text-[13px] font-medium leading-[1.4] whitespace-pre-line max-w-[110px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Desktop horizontal row */}
            <div className="hidden xl:flex justify-center items-center flex-nowrap gap-6 mx-auto">
              {HERO_FEATURES.map(({ icon, alt, label }, index) => (
                <div key={alt} className="contents">
                  <div className="flex items-center justify-center gap-2 text-left">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2B438F]">
                      <img src={icon} alt="" aria-hidden="true" className="h-[16px] w-[16px] object-contain" />
                    </div>
                    <span className="whitespace-pre-line text-[13px] font-normal leading-[1.15] tracking-[-0.02em] text-white">
                      {label}
                    </span>
                  </div>
                  {index < HERO_FEATURES.length - 1 && (
                    <div className="h-11 w-px shrink-0 bg-gradient-to-b from-transparent via-white/14 to-transparent" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      {/* Bottom white mask — xl */}
      <div
        className="w-full absolute bottom-0 inset-x-0 h-8 bg-white pointer-events-none z-20 hidden xl:block 2xl:hidden"
        style={{ clipPath: "polygon(0% 0%, 22% 0%, 24% 100%, 76% 100%, 78% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />
      {/* Bottom white mask — mobile/tablet */}
      <div
        className="w-full absolute bottom-0 inset-x-0 h-8 bg-white pointer-events-none z-20 xl:hidden"
        style={{ clipPath: "polygon(0% 0%, 6% 0%, 16% 100%, 84% 100%, 94% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />
      {/* Bottom white mask — 2xl */}
      <div
        className="w-full absolute bottom-0 inset-x-0 h-8 bg-white pointer-events-none z-20 hidden 2xl:block"
        style={{ clipPath: "polygon(0% 0%, 24% 0%, 26% 100%, 74% 100%, 76% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />

    </section>
  );
}
