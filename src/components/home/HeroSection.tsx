import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";

const HeroSection = () => {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1723124280643-f883fd318ce5?w=1920&q=80')`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-foreground/95 via-foreground/85 to-foreground/65" />
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">خبرة هندسية في الكويت - مواد معتمدة دولياً</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            عوازل - خبراء
            <span className="text-accent block mt-2">العزل المائي والحراري في الكويت</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            نقدم حلولاً هندسية احترافية للعزل المائي والحراري. حماية من التسربات ومقاومة الحرارة
            لعزل الأسطح والحمامات والمسابح والفوم. فريق متخصص وتنفيذ عالي الجودة بمواد معتمدة.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg"
            >
              <a
                href={WHATSAPP_URL()}
                target="_blank"
                rel="noopener noreferrer"
              >
                احصل على معاينة مجانية
                <ArrowLeft className="w-5 h-5 mr-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-foreground font-bold px-8 py-6 text-lg cursor-pointer transition-all duration-300"
            >
              تصفح خدماتنا
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">+500</p>
              <p className="text-primary-foreground/70">مشروع منجز في الكويت</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">+12</p>
              <p className="text-primary-foreground/70">سنوات خبرة في العزل</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-primary-foreground/70">حلول مضمونة ومواد معتمدة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;