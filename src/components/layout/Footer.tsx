import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const IG_URL = "https://www.instagram.com/tnsyq231/";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding">
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
            {/* Instagram */}
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 text-white text-sm font-bold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" }}
            >
              <InstagramIcon />
              إنستغرام
            </a>
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
                  <a href="tel:+96566101619" className="text-primary-foreground/80 hover:text-primary transition-colors">
                    +965 66101619
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">الكويت</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">الأحد - الخميس: 8ص - 6م</span>
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