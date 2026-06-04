import { useState } from "react";
import logoIcon from "@/assets/icons/group-33.svg";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-primary z-50">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-16 xl:px-24 py-3 md:py-3">

          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="" aria-hidden="true" className="h-6 md:h-5 object-contain" />
            <span className="text-white font-bold text-[16px] md:text-[18px] tracking-tight">HomePro</span>
          </div>

          <nav className="hidden lg:flex gap-8 xl:gap-10 text-[15px] xl:text-[16px] font-bold text-white">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="hover:text-secondary transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 text-[12px] xl:text-[13px] font-bold uppercase tracking-widest text-white">
            <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" aria-hidden="true" />
            <span>24 Hour Services</span>
          </div>

          {/* Hamburger — 44 × 44 px tap target */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-11 h-11 -mr-2"
            aria-label="Open navigation menu"
          >
            <span className="w-6 h-[2px] bg-white mx-auto block rounded-full" />
            <span className="w-6 h-[2px] bg-white mx-auto block rounded-full" />
            <span className="w-6 h-[2px] bg-white mx-auto block rounded-full" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] bg-primary z-[70] transition-transform duration-300 flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="" aria-hidden="true" className="h-6 object-contain" />
            <span className="text-white font-bold text-[16px] tracking-tight">HomePro</span>
          </div>
          {/* Close — 44 × 44 tap target */}
          <button
            onClick={() => setMenuOpen(false)}
            className="w-11 h-11 flex items-center justify-center text-white text-3xl leading-none -mr-2"
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-white font-semibold text-lg">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-secondary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="border-t border-white/10 py-6">
          <div className="flex items-center justify-center gap-2 text-white font-bold uppercase tracking-wider text-sm">
            <span className="w-2.5 h-2.5 bg-rose-500 rounded-full" aria-hidden="true" />
            <span>24 Hour Services</span>
          </div>
        </div>
      </aside>
    </>
  );
}
