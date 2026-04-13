import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { SOCIAL, WHATSAPP_URL } from "@/config/site";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/blog", label: "المدونة" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-custom px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="شعار كويتي جاردنز"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "relative text-base font-semibold transition-colors hover:text-primary whitespace-nowrap",
                  location.pathname === link.href
                    ? "text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop actions ── */}
          <div className="hidden md:flex items-center gap-2">
            {/* Instagram gradient pill */}
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-1.5 text-white px-4 py-2 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
              }}
            >
              <InstagramIcon className="w-4 h-4" />
              إنستغرام
            </a>

            {/* Snapchat pill */}
            <a
              href={SOCIAL.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snapchat"
              className="flex items-center gap-1.5 bg-[#FFFC00] text-black px-4 py-2 rounded-full text-sm font-bold transition-opacity hover:opacity-90"
            >
              سناب شات
            </a>
          </div>

          {/* ── Mobile hamburger — animated 3-line → X ── */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "block h-0.5 w-6 bg-foreground rounded-full origin-center transition-all duration-300",
                  isMenuOpen && "translate-y-[9px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-foreground rounded-full transition-all duration-300",
                  isMenuOpen && "opacity-0 scale-x-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-foreground rounded-full origin-center transition-all duration-300",
                  isMenuOpen && "-translate-y-[9px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile nav — smooth slide down ── */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="border-t border-border bg-white">
          <div className="container-custom px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-base font-semibold py-3 px-4 rounded-xl transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Instagram */}
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-2 text-white py-3 px-4 rounded-xl font-bold transition-opacity hover:opacity-90 w-full flex-shrink-0"
              style={{
                background:
                  "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
              }}
            >
              <InstagramIcon />
              تابعنا على إنستغرام
            </a>

            {/* Snapchat */}
            <a
              href={SOCIAL.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FFFC00] text-black py-3 px-4 rounded-xl font-bold transition-opacity hover:opacity-90 w-full flex-shrink-0"
            >
              تابعنا على سناب شات
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-bold hover:bg-[#1ebe5d] transition-colors w-full flex-shrink-0"
            >
              <WhatsAppIcon />
              تواصل عبر واتساب
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;