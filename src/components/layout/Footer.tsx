import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import { SOCIAL, CONTACT } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="عوازل" className="w-14 h-14 object-contain flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">عوازل</span>
                <span className="text-xs text-primary-foreground/60 leading-tight -mt-0.5">للخدمات الهندسية</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              شركة متخصصة في العزل المائي والحراري في الكويت. نقدم حلولاً هندسية احترافية لعزل الأسطح والحمامات والمسابح والفوم والعزل الفرنسي والسكريد والصبة. فريق متخصص وخبرة هندسية في الكويت بمواد معتمدة.
            </p>
            {/* Social buttons stacked */}
            <div className="flex flex-col gap-2">
              {/* Instagram */}
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center gap-1.5 text-white text-sm font-bold px-4 rounded-full transition-opacity hover:opacity-90 leading-none h-8"
                style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
              >
                <InstagramIcon className="w-4 h-4 flex-shrink-0" />
                إنستغرام
              </a>

              {/* Snapchat */}
              <a
                href={SOCIAL.snapchat}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Snapchat"
                className="inline-flex items-center justify-center gap-1.5 text-black text-sm font-bold px-4 rounded-full transition-opacity hover:opacity-90 leading-none h-8"
                style={{ background: "#FFFC00" }}
              >
                سناب شات
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  المدونة
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#roof" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  عزل الأسطح
                </Link>
              </li>
              <li>
                <Link to="/services#bathroom" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  عزل الحمامات
                </Link>
              </li>
              <li>
                <Link to="/services#pool" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  عزل المسابح
                </Link>
              </li>
              <li>
                <Link to="/services#foam" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  عزل الفوم (الرش الأمريكي)
                </Link>
              </li>
              <li>
                <Link to="/services#french" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  العزل الفرنسي
                </Link>
              </li>
              <li>
                <Link to="/services#screed" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  السكريد والصبة
                </Link>
              </li>
              <li>
                <Link to="/services#duct" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  عزل دكتات التكييف
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <a href={CONTACT.phoneHref} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {CONTACT.phoneNumber}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">{CONTACT.area}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">{CONTACT.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} عوازل. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;