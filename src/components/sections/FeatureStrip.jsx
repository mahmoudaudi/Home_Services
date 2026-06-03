import guaranteeIcon from "@/assets/icons/Guarantee.png";
import clockIcon from "@/assets/icons/Clock.png";
import mapIcon from "@/assets/icons/Map.png";
import calendarIcon from "@/assets/icons/Calendar.png";

const FEATURES = [
  { icon: guaranteeIcon, label: "Satisfaction\nGuarantee" },
  { icon: clockIcon,     label: "24H\nAvailability" },
  { icon: mapIcon,       label: "Local US\nProfessional" },
  { icon: calendarIcon,  label: "Flexible\nAppointments" },
];

export default function FeatureStrip() {
  return (
    <section className="bg-[#142257]" aria-label="Key features">
      {/* Mobile / tablet — 2×2 grid */}
      <div className="grid grid-cols-2 sm:hidden relative">
        <Dividers grid />
        {FEATURES.map(({ icon, label }) => (
          <FeatureCell key={label} icon={icon} label={label} />
        ))}
      </div>

      {/* sm – lg — 4-column grid */}
      <div className="hidden sm:grid sm:grid-cols-4 lg:hidden relative">
        <Dividers row />
        {FEATURES.map(({ icon, label }) => (
          <FeatureCell key={label} icon={icon} label={label} compact />
        ))}
      </div>

      {/* lg+ — horizontal flex row */}
      <div className="hidden lg:flex justify-center items-stretch max-w-5xl mx-auto px-8 py-5">
        {FEATURES.map(({ icon, label }, i) => (
          <div key={label} className="contents">
            <div className="flex flex-row items-center gap-3 px-6 xl:px-10 grow justify-center">
              <div className="w-9 h-9 rounded-full bg-[#1b2d6e] flex items-center justify-center shrink-0">
                <img src={icon} alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
              </div>
              <span className="text-white font-semibold text-[13px] xl:text-[14px] leading-tight whitespace-pre-line">
                {label}
              </span>
            </div>
            {i < FEATURES.length - 1 && (
              <div className="w-px self-stretch bg-white/15 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureCell({ icon, label, compact = false }) {
  return (
    <div className={`flex flex-col items-center text-center ${compact ? "py-4 px-3" : "py-6 px-4"}`}>
      <div className={`rounded-full bg-[#1b2d6e] flex items-center justify-center mb-2 ${compact ? "w-9 h-9" : "w-10 h-10"}`}>
        <img src={icon} alt="" aria-hidden="true" className={compact ? "w-4 h-4" : "w-5 h-5"} />
      </div>
      <span className="text-white text-[13px] sm:text-[14px] font-medium leading-snug whitespace-pre-line">
        {label}
      </span>
    </div>
  );
}

function Dividers({ grid, row }) {
  if (grid) {
    return (
      <>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/15 pointer-events-none -translate-y-1/2" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/15 pointer-events-none -translate-x-1/2" />
      </>
    );
  }
  if (row) {
    return (
      <>
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="absolute top-1/4 bottom-1/4 w-px bg-white/15 pointer-events-none"
            style={{ left: `${n * 25}%` }}
          />
        ))}
      </>
    );
  }
  return null;
}
