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
              <img src="/logo.png" alt="كويتي جاردنز" className="w-12 h-12 object-contain" />
              <span className="font-bold text-xl">كويتي جاردنز</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              خبراء تنسيق الحدائق في الكويت. نقدم خدمات تصميم وتنفيذ وصيانة الحدائق بأعلى جودة وأفضل الأسعار.
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
                <Link to="/services#garden-design" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  تصميم الحدائق
                </Link>
              </li>
              <li>
                <Link to="/services#artificial-grass" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  الثيل الصناعي
                </Link>
              </li>
              <li>
                <Link to="/services#irrigation" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  شبكات الري
                </Link>
              </li>
              <li>
                <Link to="/services#pergolas" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  البرجولات والجلسات
                </Link>
              </li>
              <li>
                <Link to="/services#lighting" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  إضاءة الحدائق
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  الصيانة الدورية
                </Link>
              </li>
              <li>
                <Link to="/services#planting" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  زرع الأشجار والنخيل
                </Link>
              </li>
              <li>
                <Link to="/services#palm-care" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  تلقيح وتكريب النخيل
                </Link>
              </li>
              <li>
                <Link to="/services#tree-removal" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  خلع وإزالة الأشجار
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - [أضف بيانات التواصل] */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href={CONTACT.phoneHref} className="text-primary-foreground/80 hover:text-primary transition-colors">
                    {CONTACT.phoneNumber}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">{CONTACT.area}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">{CONTACT.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} كويتي جاردنز. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;