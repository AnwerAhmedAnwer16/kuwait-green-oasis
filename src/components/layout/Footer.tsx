import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              {/* [أضف اسم الشركة بالعربية] */}
              <span className="font-bold text-xl">اسم الشركة</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              خبراء تنسيق الحدائق في الكويت. نقدم خدمات تصميم وتنفيذ وصيانة الحدائق بأعلى جودة وأفضل الأسعار.
            </p>
            {/* Social Media - [أضف روابط التواصل الاجتماعي] */}
            <div className="flex gap-3">
              <a
                href="#" // [أضف رابط فيسبوك]
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#" // [أضف رابط انستقرام]
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#" // [أضف رابط تويتر]
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
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
              <li>
                <Link to="/services#portfolio" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  معرض الأعمال
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
                  العشب الصناعي
                </Link>
              </li>
              <li>
                <Link to="/services#irrigation" className="text-primary-foreground/80 hover:text-primary transition-colors">
                  أنظمة الري
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
            </ul>
          </div>

          {/* Contact Info - [أضف بيانات التواصل] */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  {/* [أضف رقم الهاتف] */}
                  <a href="tel:+965XXXXXXXX" className="text-primary-foreground/80 hover:text-primary transition-colors">
                    +965-XXXX-XXXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  {/* [أضف البريد الإلكتروني] */}
                  <a href="mailto:info@example.com" className="text-primary-foreground/80 hover:text-primary transition-colors">
                    info@example.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {/* [أضف العنوان] */}
                <span className="text-primary-foreground/80">الكويت، المنطقة، الشارع</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                {/* [عدّل أوقات العمل] */}
                <span className="text-primary-foreground/80">الأحد - الخميس: 8ص - 6م</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            {/* [عدّل حسب بياناتك] */}
            © {new Date().getFullYear()} اسم الشركة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;