import bgImage from "@/assets/images/bg-2x.png";
import workerImage from "@/assets/images/worker.png";
import blueCheckIcon from "@/assets/icons/icon-2x.png";
import { HOW_IT_WORKS_STEPS } from "@/constants/howItWorksSteps";

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-16 xl:px-24 select-none">

      {/* Minimal style block — only for the pixel-precise artwork overlay */}
      <style>{`
        @media (max-width: 1279px) {
          .works-artwork-col {
            height: auto !important;
            width: 100% !important;
            max-width: 340px !important;
            aspect-ratio: 1 / 1.1 !important;
            margin: 0 auto !important;
          }
          .works-mask-frame {
            width: 88% !important;
            height: 82% !important;
            border-radius: 24px !important;
            border-top-right-radius: 96px !important;
            position: absolute !important;
            bottom: 0 !important;
            right: 0 !important;
          }
          .works-worker-overlay {
            width: 100% !important;
            height: auto !important;
            position: absolute !important;
            bottom: 0 !important;
            left: -3% !important;
          }
        }
      `}</style>

      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center gap-10 xl:grid xl:grid-cols-12 xl:gap-8 xl:items-center">

        {/* Artwork */}
        <div className="xl:col-span-5 relative w-full flex flex-col justify-center items-center overflow-visible h-[400px] sm:h-[440px] xl:h-[480px] works-artwork-col">
          <div className="relative w-[490px] h-[470px] rounded-[24px] rounded-tr-[140px] overflow-hidden shadow-sm bg-slate-50 z-0 my-auto works-mask-frame">
            <img src={bgImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
            <div className="absolute top-[28%] right-[60px] xl:right-[70px] w-[80px] h-[80px] xl:w-[90px] xl:h-[90px] z-20 drop-shadow-md">
              <img src={blueCheckIcon} alt="Verified badge" className="w-full h-full object-contain" />
            </div>
          </div>
          <img
            src={workerImage}
            alt="HomePro professional worker"
            style={{ width: "515px", height: "423px" }}
            className="absolute bottom-[15px] -left-[55px] max-w-none object-contain z-10 pointer-events-none works-worker-overlay"
          />
        </div>

        {/* Content */}
        <div className="xl:col-span-7 flex flex-col text-center items-center lg:text-left lg:items-start xl:pl-6 w-full max-w-[660px] mx-auto xl:mx-0">

          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold text-[#0F172A] leading-tight tracking-tight mb-8 md:mb-10 xl:mb-12">
            How HomePro works?
          </h2>

          <div className="flex flex-col gap-7 md:gap-8 w-full">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div key={step.number} className="flex items-start gap-4 w-full text-left">

                {/* Step number */}
                <span className="text-[28px] lg:text-[32px] font-bold text-[#94A3B8] leading-none pt-0.5 shrink-0 w-7">
                  {step.number}
                </span>

                {/* Title + description — stacked on mobile, side-by-side from md */}
                <div className="flex flex-col md:grid md:grid-cols-12 md:gap-4 w-full pt-1">
                  <h3 className="text-[16px] lg:text-[18px] font-bold text-[#1E293B] leading-snug tracking-tight mb-1 md:mb-0 md:col-span-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-500/90 text-sm lg:text-[15px] leading-relaxed md:col-span-8">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
