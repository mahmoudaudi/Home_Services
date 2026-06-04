import { BENEFITS } from "@/constants/benefits";

export default function BenefitsSection() {
  return (
    /* Gradual padding ramp: 40px → 56px → 80px → 80px across breakpoints */
    <section className="bg-white py-10 px-4 sm:py-14 sm:px-6 md:py-20 md:px-10 lg:px-14 xl:px-[68px] select-none">

      <div className="max-w-[1500px] w-full mx-auto bg-primary text-white py-10 px-5 sm:py-14 sm:px-8 md:py-20 md:px-16 lg:py-24 lg:px-28 rounded-[24px] clip-chamfer">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 md:grid md:grid-cols-12 md:gap-8 md:items-start md:text-left lg:gap-12 border-b border-white/10 pb-10 sm:pb-12 mb-10 sm:mb-12">
          <div className="md:col-span-7">
            <h2 className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[44px] font-bold leading-tight tracking-tight text-white max-w-xl">
              Fast, Friendly, and Satisfaction Guarantee
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-6 lg:pt-10">
            <p className="text-slate-300/80 text-sm md:text-[15px] leading-relaxed max-w-xl">
              No matter how big or small your work is, whether for the interior or
              exterior of your home, we are ready to serve and help you solve your
              home problems.
            </p>
          </div>
        </div>

        {/* Benefits — 1 col on xs/sm, 2 cols from md */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-14 md:gap-y-10 lg:gap-x-16 lg:gap-y-12">
          {BENEFITS.map((item) => (
            <div key={item.title} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <img src={item.icon} alt="" aria-hidden="true" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[17px] sm:text-[18px] lg:text-[20px] font-bold text-white tracking-tight mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
