import roofingWorkersImg from "@/assets/about-workers.png";
import CheckItem from "@/components/common/CheckItem";
import { PROFESSIONAL_FEATURES } from "@/data/professionalFeatures";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "@/config/theme";

export default function ProfessionalServices() {
  return (
    <section id="about" className="bg-white py-14 px-5 sm:px-8 md:px-12 lg:py-20 lg:px-16 xl:px-24 select-none relative z-[1]">

      <div className="max-w-[1280px] mx-auto flex flex-col-reverse gap-10 md:gap-12 md:grid md:grid-cols-[5fr_7fr] lg:gap-16 items-center">

        {/* Text content */}
        <div className="flex flex-col md:pl-4 lg:pl-8">
          <h2 className="text-[26px] sm:text-[30px] md:text-[32px] lg:text-[38px] font-extrabold leading-tight tracking-tight text-[#1C2036]">
            Professional for your home services
          </h2>

          <p className="mt-4 md:mt-5 text-slate-500 text-[13px] sm:text-sm leading-[1.75]">
            You need help for home care? We are home care professionals<br />
            focused in the US region. We provide several services that <br />support home services
          </p>

          {/* Features — 1 col on xs, 2 cols from sm */}
          <div className="mt-6 md:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 max-w-full lg:max-w-[460px]">
            {PROFESSIONAL_FEATURES.map((label) => (
              <CheckItem key={label}>{label}</CheckItem>
            ))}
          </div>

          <div className="mt-7 md:mt-9 bg-secondary py-3.5 px-5 rounded-[14px] w-full md:w-fit">
            <p className="text-white/90 text-sm leading-relaxed">
              We already 24 hours fast services to help you.
            </p>
            <p className="text-white/90 text-sm leading-relaxed mt-0.5">
              You can contact us at{" "}
              <a href={CONTACT_PHONE_HREF} className="text-white font-bold underline">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>

        {/* House-shaped image */}
        <div className="flex justify-center items-center w-full">
          <div
            className="relative w-full aspect-square max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-none lg:w-[510px] lg:h-[510px] overflow-hidden bg-[#bfe8ff]"
            style={{ clipPath: "url(#housePoly)" }}
          >
            <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-[rgba(188,231,255,0.45)] to-transparent" />
            <img
              src={roofingWorkersImg}
              alt="Professional roofing workers"
              className="w-[115%] h-[112%] object-cover select-none"
              style={{ objectPosition: "87% 30%" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
