import phoneIcon from "@/assets/icons/phone.svg";
import checkIcon from "@/assets/icons/check.svg";
import leftWorkerImage from "@/assets/Image 1.png";
import rightWorkerImage from "@/assets/Image 2.png";
import guaranteeIcon from "@/assets/icons/Guarantee.png";
import clockIcon from "@/assets/icons/Clock.png";
import mapIcon from "@/assets/icons/Map.png";
import calendarIcon from "@/assets/icons/Calendar.png";

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

/* ─── IMAGE POSITION ───────────────────────────────────────────────────────
   Adjust TOP_OFFSET to move both side images up or down independently.
   The center content is never affected — images are absolutely positioned.
   ──────────────────────────────────────────────────────────────────────── */
const IMAGE_TOP = "76px";   // ← change this value only

export default function HeroSection() {
  return (
    <section className="bg-[#142257] text-white relative overflow-hidden flex flex-col min-h-screen">

      {/* Left image — absolute, fully independent from center content */}
      <div
        className="hidden xl:block absolute left-0 bottom-8 xl:w-[20%] 2xl:w-[22%] z-10"
        style={{ top: IMAGE_TOP }}
      >
        <img
          src={leftWorkerImage}
          alt="Home maintenance professional"
          className="w-full h-full object-cover object-center rounded-r-2xl shadow-md"
        />
      </div>

      {/* Right image — absolute, fully independent from center content */}
      <div
        className="hidden xl:block absolute right-0 bottom-8 xl:w-[20%] 2xl:w-[22%] z-10"
        style={{ top: IMAGE_TOP }}
      >
        <img
          src={rightWorkerImage}
          alt="Home plumbing professional"
          className="w-full h-full object-cover object-center rounded-l-2xl shadow-md"
        />
      </div>

      {/* Center content — in normal flow, never affected by image position */}
      <div className="flex-1 flex flex-col justify-between items-center text-center
                      px-5 pt-24 sm:pt-28 pb-6">

        {/* Headline + CTA */}
        <div className="my-auto flex flex-col items-center w-full max-w-xl">
          <p className="text-slate-400 text-[11px] sm:text-xs md:text-sm tracking-widest font-normal uppercase opacity-80">
            Maintenances&nbsp;&nbsp;·&nbsp;&nbsp;Repairs&nbsp;&nbsp;·&nbsp;&nbsp;Improvements
          </p>

          <h1 className="text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] xl:text-[50px] 2xl:text-[54px]
                         font-bold leading-tight tracking-tight mt-5 text-white">
            Need improvement or repair your home? We can help!
          </h1>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-sm">
            {["Free Quotes", "100% Commitment-Free"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <img
                  src={checkIcon}
                  className="w-4 h-4 object-contain shrink-0"
                  onError={(e) => { e.target.src = CHECK_FALLBACK; }}
                  alt=""
                  aria-hidden="true"
                />
                <span className="text-slate-300 font-medium">{label}</span>
              </div>
            ))}
          </div>

          <button className="group mt-8 bg-[#15B2F5] text-white font-bold px-7 sm:px-8 py-3 rounded-full
                             inline-flex items-center justify-center gap-2
                             hover:bg-[#139ed9] hover:-translate-y-0.5
                             transition-all duration-300 cursor-pointer select-none">
            <span className="tracking-wide text-base sm:text-lg">Call Us Now</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0
                            transition-transform duration-300 group-hover:scale-105">
              <img
                src={phoneIcon}
                alt=""
                aria-hidden="true"
                className="w-4 h-4 object-contain transition-transform duration-300 group-hover:rotate-12"
                onError={(e) => { e.target.src = PHONE_FALLBACK; }}
              />
            </div>
          </button>
        </div>

        {/* Feature strip */}
        <div className="w-full mt-10 xl:mt-6 pb-2">

          {/* Mobile / tablet 2×2 grid */}
          <div className="grid grid-cols-2 xl:hidden relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none -translate-y-1/2" />
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none -translate-x-1/2" />
            {HERO_FEATURES.map(({ icon, alt, label }) => (
              <div key={alt} className="flex flex-col items-center text-center py-5 sm:py-6 px-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1b2d6e] flex items-center justify-center mb-2 sm:mb-3">
                  <img src={icon} alt="" aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-white text-[13px] sm:text-[15px] font-medium leading-6 whitespace-pre-line">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop horizontal row */}
          <div className="hidden xl:flex justify-center items-center flex-nowrap">
            {HERO_FEATURES.map(({ icon, alt, label }, index) => (
              <div key={alt} className="contents">
                <div className="flex flex-row items-center gap-3 px-3 2xl:px-4 grow justify-center text-left">
                  <div className="w-8 h-8 rounded-full bg-[#1b2d6e] flex items-center justify-center shrink-0">
                    <img src={icon} alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="leading-tight text-white font-semibold text-[13px] 2xl:text-[15px] whitespace-pre-line">
                    {label}
                  </span>
                </div>
                {index < HERO_FEATURES.length - 1 && (
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/15 to-transparent shrink-0" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom white mask */}
      <div
        className="w-full absolute bottom-0 inset-x-0 h-8 bg-white pointer-events-none z-20 hidden xl:block 2xl:hidden"
        style={{ clipPath: "polygon(0% 0%, 20% 0%, 22% 100%, 78% 100%, 80% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />
      <div
        className="w-full absolute bottom-0 inset-x-0 h-8 bg-white pointer-events-none z-20 hidden 2xl:block"
        style={{ clipPath: "polygon(0% 0%, 22% 0%, 24% 100%, 76% 100%, 78% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        aria-hidden="true"
      />

    </section>
  );
}
