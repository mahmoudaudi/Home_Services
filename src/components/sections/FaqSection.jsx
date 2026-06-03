import { useState } from "react";
import { FAQ_ITEMS } from "@/data/faqItems";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-16 px-5 sm:px-8 md:py-20 md:px-12 lg:py-24 lg:px-16 xl:px-24 select-none w-full relative z-[2] mb-[-4px]">
      <div className="max-w-[1240px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">

        {/* Sticky heading */}
        <div className="lg:col-span-5 text-center lg:text-left">
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[48px] font-bold text-[#0F172A] leading-tight tracking-tight mb-4 md:mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm md:text-[15px]">
            Still need help?{" "}
            <a
              href="#contact"
              className="text-[#00A3E0] hover:text-[#0089BE] font-bold underline underline-offset-2 transition-colors"
            >
              Get Help Now
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-7 w-full flex flex-col gap-3">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`w-full transition-all duration-300 rounded-2xl ${
                  isOpen
                    ? "bg-[#F1F5F9] px-4 sm:px-6 py-5 sm:py-6"
                    : "bg-white px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-100"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/40 rounded-sm group"
                >
                  <span className="text-[15px] sm:text-base md:text-[17px] font-bold text-[#1E293B] tracking-tight group-hover:text-[#00A3E0] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <span className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#1D4ED8]" : "text-[#1E293B]"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-[17px] h-[17px] sm:w-[18px] sm:h-[18px]" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-slate-500 text-[13px] sm:text-[13.5px] md:text-[14.5px] leading-relaxed max-w-[640px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
