import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProfessionalServices from "@/components/sections/ProfessionalServices";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import BlogSection from "@/components/sections/BlogSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";

/**
 * Global SVG clip-path definitions.
 * Kept here — outside every clipped element — so browsers always find
 * the IDs when resolving `clip-path: url(#id)` in CSS or inline styles.
 * A zero-size SVG inside the element it clips is unreliable across browsers.
 */
function SvgDefs() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* House-shaped polygon — used by ProfessionalServices */}
        <clipPath id="housePoly" clipPathUnits="objectBoundingBox">
          <path d="M 0.456,0.024 Q 0.50,0.00 0.544,0.024 L 0.96,0.25 Q 1.00,0.28 1.00,0.33 L 1.00,0.93 Q 1.00,1.00 0.93,1.00 L 0.07,1.00 Q 0.00,1.00 0.00,0.93 L 0.00,0.33 Q 0.00,0.28 0.04,0.25 Z" />
        </clipPath>

        {/* Side-chamfer shape — used by BenefitsSection on desktop */}
        <clipPath id="chamferMask" clipPathUnits="objectBoundingBox">
          <path d="M 0,0
                   L 1,0
                   L 1,0.14
                   L 0.982,0.18
                   L 0.982,0.82
                   L 1,0.86
                   L 1,1
                   L 0,1
                   L 0,0.86
                   L 0.018,0.82
                   L 0.018,0.18
                   L 0,0.14 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function App() {
  return (
    <>
      <SvgDefs />
      <Navbar />
      <main>
        <HeroSection />
        <div className="w-[92%] mx-auto h-px bg-gray-200" />
        <ProfessionalServices />
        <ServicesGrid />
        <BenefitsSection />
        <HowItWorks />
        <Testimonials />
        <BlogSection />
        <FaqSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
