import contactImg from "@/assets/contact-image.png";
import bannerImg from "@/assets/banner-image.png";
import { CONTACT_PHONE_HREF } from "@/config/theme";

export default function CtaBanner() {
  return (
    /* .cta-banner-notch adds the ::before white geometric bar (index.css) */
    <section id="contact" className="cta-banner-notch bg-[#0A194E] min-h-[460px] sm:min-h-[480px] w-full relative z-[1] overflow-hidden flex items-center select-none pt-20 sm:pt-[72px] md:pt-16 pb-0 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">

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

        {/* Right: mobile — simple image only */}
        <div className="md:hidden flex justify-center items-end mt-4 -mx-5 sm:-mx-8">
          <img
            src={contactImg}
            alt="HomePro professional"
            className="w-full object-contain select-none pointer-events-none"
          />
        </div>

        {/* Right: desktop — single banner image */}
        <div className="hidden md:flex md:col-span-6 justify-end items-end -mb-4 -mr-12 lg:-mr-16 xl:-mr-20">
          <img
            src={bannerImg}
            alt="HomePro professional"
            className="w-full max-w-[600px] lg:max-w-[680px] object-contain select-none pointer-events-none"
          />
        </div>

      </div>
    </section>
  );
}
