import personImg from "@/assets/person.png";
import homeImg from "@/assets/Home.png";
import logoHouseIcon from "@/assets/LogoHouse.png";
import { CONTACT_PHONE_HREF } from "@/constants/theme";

export default function CtaBanner() {
  return (
    /* .cta-banner-notch adds the ::before white geometric bar (index.css) */
    <section className="cta-banner-notch bg-[#0A194E] min-h-[460px] sm:min-h-[480px] w-full relative overflow-hidden flex items-center select-none pt-20 sm:pt-[72px] md:pt-16 pb-0 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10">

        {/* Left: text */}
        <div className="md:col-span-6 text-white text-center md:text-left flex flex-col items-center md:items-start">

          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-bold leading-tight tracking-tight mb-5 md:mb-6 max-w-[540px]">
            Ready to improve or repair your home? Let's Talk!
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-5 gap-y-2 mb-7 md:mb-8 text-[#38BDF8] text-[13px] sm:text-[14px] font-medium">
            {["Free Quotes", "100% Commitment-Free"].map((label) => (
              <div key={label} className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <a
            href={CONTACT_PHONE_HREF}
            className="bg-[#00A3E0] hover:bg-[#0089BE] transition-colors duration-200 px-6 py-3 rounded-full inline-flex items-center gap-3 text-white font-bold text-sm sm:text-[15px] tracking-tight shadow-md shadow-black/10 active:scale-[0.98]"
          >
            <span>Call Us Now</span>
            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#00A3E0] shadow-sm shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]" aria-hidden="true">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c1.353 2.8 3.51 4.957 6.3 6.3l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </div>
          </a>
        </div>

        {/* Right: composite image */}
        <div className="md:col-span-6 relative w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] flex justify-center md:justify-end items-end overflow-visible mt-4 md:mt-0">
          <div className="relative h-full w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] flex items-end justify-center md:justify-end">

            <img
              src={personImg}
              alt="Worker with mobile device"
              className="h-[95%] w-auto object-contain relative z-10 select-none pointer-events-none"
            />

            {/* Double-exposure house overlay */}
            <div className="absolute right-[-100px] sm:right-[-120px] md:right-[-100px] lg:right-[-140px] bottom-0 top-0 pt-8 w-full md:w-[115%] lg:w-[119%] h-[50%] md:h-full z-20 mix-blend-screen pointer-events-none overflow-hidden">
              <img
                src={homeImg}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain object-right brightness-[0.85] contrast-[175%] saturate-[110%] scale-[1.05] origin-bottom-right"
              />
            </div>

            {/* Phone mockup */}
            <div className="absolute left-[24%] sm:left-[38%] md:left-[24%] lg:left-[8%] top-[60%] -translate-y-1/2 w-[48px] h-[88px] sm:w-[56px] sm:h-[104px] bg-black p-[2.5px] rounded-[12px] z-[25] flex overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-white rounded-[10px]" />
            </div>

            {/* App badge */}
            <div className="absolute left-[5%] sm:left-[18%] md:left-[4%] lg:left-[-2%] top-[60%] -translate-y-1/2 w-[52px] h-[52px] sm:w-[68px] sm:h-[68px] md:w-[72px] md:h-[72px] z-30 bg-[#00A3E0] rounded-[16px] sm:rounded-[18px] flex items-center justify-center shadow-xl shadow-[#00A3E0]/40 border border-white/20 p-2 sm:p-[10px]">
              <img src={logoHouseIcon} alt="HomePro app icon" className="w-full h-full object-contain" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
