import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/blog", label: "المدونة" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo - [ارفع الشعار هنا] */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              {/* [أضف اسم الشركة بالعربية] */}
              <span className="font-bold text-lg md:text-xl text-foreground">اسم الشركة</span>
              <span className="text-xs text-muted-foreground hidden md:block">تنسيق حدائق الكويت</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a
                href="https://wa.me/965XXXXXXXX" // [أضف رقم الواتساب]
                target="_blank"
                rel="noopener noreferrer"
              >
                احصل على استشارة مجانية
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-4 border-t border-border bg-background">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2 transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-primary hover:bg-primary/90">
                <a
                  href="https://wa.me/965XXXXXXXX" // [أضف رقم الواتساب]
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  احصل على استشارة مجانية
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;