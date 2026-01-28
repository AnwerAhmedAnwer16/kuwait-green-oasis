import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image - [استبدل بصورة خلفية حقيقية] */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">خبرة أكثر من 10 سنوات</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            نحوّل مساحتك إلى
            <span className="text-primary block mt-2">حديقة أحلامك</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            {/* [عدّل الوصف حسب شركتك] */}
            نقدم خدمات تنسيق وتصميم الحدائق في الكويت بأعلى معايير الجودة. 
            من التصميم ثلاثي الأبعاد إلى التنفيذ والصيانة الدورية.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg"
            >
              <a
                href="https://wa.me/965XXXXXXXX" // [أضف رقم الواتساب]
                target="_blank"
                rel="noopener noreferrer"
              >
                احصل على استشارة مجانية
                <ArrowLeft className="w-5 h-5 mr-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-bold px-8 py-6 text-lg"
            >
              <a href="#services">تصفح خدماتنا</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {/* [عدّل الأرقام حسب بياناتك] */}
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">+500</p>
              <p className="text-primary-foreground/70">مشروع منجز</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">+10</p>
              <p className="text-primary-foreground/70">سنوات خبرة</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="text-primary-foreground/70">رضا العملاء</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;