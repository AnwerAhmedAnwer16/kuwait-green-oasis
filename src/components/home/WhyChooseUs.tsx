import { Award, Users, ShieldCheck, Clock, Banknote, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "خبرة +10 سنوات", // [عدّل حسب خبرتكم]
    description: "خبرة طويلة في تنسيق الحدائق بالكويت",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description: "مهندسون وفنيون محترفون في مجالهم",
  },
  {
    icon: ShieldCheck,
    title: "ضمان على الأعمال",
    description: "نوفر ضمان شامل على جميع خدماتنا",
  },
  {
    icon: Banknote,
    title: "أسعار تنافسية",
    description: "أفضل جودة بأسعار مناسبة للجميع",
  },
  {
    icon: Clock,
    title: "التزام بالمواعيد",
    description: "نلتزم بتسليم المشاريع في الوقت المحدد",
  },
  {
    icon: ThumbsUp,
    title: "رضا العملاء",
    description: "عملاؤنا راضون بنسبة 100%",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-lg mb-2 block">لماذا نحن</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              لماذا تختارنا؟
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {/* [عدّل الوصف حسب شركتك] */}
              نحن نؤمن بأن كل حديقة تستحق أن تكون تحفة فنية. نجمع بين الخبرة الطويلة 
              والتقنيات الحديثة لنقدم لك أفضل خدمات تنسيق الحدائق في الكويت.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - [استبدل بصورة من مشاريعكم] */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="حديقة منزلية في الكويت - تنسيق حدائق احترافي"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;