import { Award, Users, ShieldCheck, Banknote, Clock, HardHat } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "فريق متخصص",
    description: "مهندسون وفنيون محترفون في العزل المائي والحراري",
  },
  {
    icon: Users,
    title: "خبرة هندسية في الكويت",
    description: "أكثر من 12 عاماً من الخبرة في مجال العزل",
  },
  {
    icon: ShieldCheck,
    title: "مواد معتمدة",
    description: "نستخدم أجود المواد العالمية المعتمدة في العزل",
  },
  {
    icon: Banknote,
    title: "أسعار تنافسية",
    description: "أفضل جودة بأسعار مناسبة للجميع مع ضمان شامل",
  },
  {
    icon: HardHat,
    title: "حلول مضمونة",
    description: "تنفيذ احترافي وضمان على جميع أعمال العزل",
  },
  {
    icon: Clock,
    title: "التزام بالمواعيد",
    description: "نلتزم بتسليم المشاريع في الوقت المحدد وبأعلى جودة",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-lg mb-2 block">لماذا نحن</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              لماذا تختار عوازل لخدمات العزل في الكويت؟
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              نحن شركة عوازل رائدة في الكويت متخصصة في العزل المائي والحراري. نقدم حلولاً هندسية
              احترافية بمواد عالية الجودة لضمان حماية طويلة الأمد لمنشآتك من التسربات والرطوبة والحرارة.
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

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=800&q=80"
                alt="مهندس متخصص في العزل المائي والحراري يخطط لأعمال العزل في الكويت - شركة عوازل"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;