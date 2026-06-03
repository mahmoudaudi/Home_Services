import { useState } from "react";
import trustpilotLogo from "@/assets/Logo.png";
import profileImage from "@/assets/imageProfile.png";
import { TESTIMONIALS } from "@/data/testimonials";

function StarRating({ rating, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5 mt-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-[19px] h-[19px] ${index < rating ? "text-[#FFB500]" : "text-[#E2E8F0]"}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

function NavButton({ direction, onClick, className = "" }) {
  const isNext = direction === "next";
  const icon = isNext
    ? "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    : "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18";
  const translateClass = isNext ? "group-hover:translate-x-0.5" : "group-hover:-translate-x-0.5";
  const colorClass = isNext
    ? "bg-[#00A3E0] hover:bg-[#0089BE] text-white shadow-sm"
    : "bg-[#E2E8F0] hover:bg-[#CBD5E1] text-slate-500";

  return (
    <button
      onClick={onClick}
      className={`rounded-full flex items-center justify-center group active:scale-95 transition-colors ${colorClass} ${className}`}
      aria-label={isNext ? "Next review" : "Previous review"}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={`${translateClass} transition-transform`} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => setActiveIndex((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const handleNext = () => setActiveIndex((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));
  const active = TESTIMONIALS[activeIndex];

  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:py-20 lg:px-20 select-none w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[1050px] w-full mx-auto flex flex-col items-center text-center">

        <h2 className="text-[32px] lg:text-[46px] font-bold text-[#1E293B] leading-[40px] lg:leading-[52px] tracking-tight max-w-[700px] mb-6 lg:mb-8">
          Here our original reviews from trusted platform
        </h2>

        <div className="h-[38px] flex items-center justify-center mb-6">
          <img src={trustpilotLogo} alt="Trustpilot" className="h-full object-contain" />
        </div>

        {/* Visible on desktop only */}
        <div className="hidden lg:block w-full max-w-[780px] h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent mb-8" />

        {/* Desktop carousel row — nav buttons hidden on mobile */}
        <div className="relative w-full flex items-center justify-between gap-4 md:gap-8 min-h-[140px] mb-6">
          <NavButton direction="prev" onClick={handlePrev} className="hidden lg:flex shrink-0 w-11 h-11 [&>svg]:w-4 [&>svg]:h-4" />
          <div className="max-w-[680px] mx-auto px-2" aria-live="polite" aria-atomic="true">
            <p className="text-slate-500/90 text-[14.5px] md:text-[15.5px] leading-[24px] md:leading-[26px] font-normal text-center">
              {active.text}
            </p>
          </div>
          <NavButton direction="next" onClick={handleNext} className="hidden lg:flex shrink-0 w-11 h-11 [&>svg]:w-4 [&>svg]:h-4" />
        </div>

        <div className="flex items-center gap-3.5 text-left justify-center mb-8 lg:mb-10">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-slate-100 shadow-sm shrink-0">
            <img src={profileImage} alt={active.author} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-0.5">
            <h4 className="text-base font-bold text-[#0F172A] leading-tight tracking-tight">
              {active.author}
            </h4>
            <StarRating rating={active.rating} />
          </div>
        </div>

        {/* Mobile controls — hidden on desktop */}
        <div className="flex lg:hidden items-center justify-center gap-6 w-full">
          <NavButton direction="prev" onClick={handlePrev} className="w-[50px] h-[50px] [&>svg]:w-5 [&>svg]:h-5" />
          <div className="flex items-center gap-2 justify-center">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${idx === activeIndex ? "w-7 bg-[#00A3E0]" : "w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"}`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
          <NavButton direction="next" onClick={handleNext} className="w-[50px] h-[50px] [&>svg]:w-5 [&>svg]:h-5" />
        </div>

      </div>
    </section>
  );
}
