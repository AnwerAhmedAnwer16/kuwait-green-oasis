import { Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg mb-2 block">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            احصل على استشارة مجانية
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            أرسل لنا تفاصيل مشروعك وسنتواصل معك في أقرب وقت
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">اتصل بنا</h3>
                <a href="tel:+96566101619" className="text-muted-foreground hover:text-primary">
                  +965 66101619
                </a>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">العنوان</h3>
                <p className="text-muted-foreground">الكويت</p>
              </div>
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">أوقات العمل</h3>
                <p className="text-muted-foreground">الأحد - الخميس: 8ص - 6م</p>
              </div>
            </div>

            {/* Google Map - [أضف رابط خرائط جوجل الصحيح] */}
            <div className="rounded-xl overflow-hidden shadow-sm h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222871.91988075475!2d47.78062193671874!3d29.3116684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c8c4c4f8f8f%3A0x8d8a8f8f8f8f8f8f!2sKuwait!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-6">أرسل طلبك</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;