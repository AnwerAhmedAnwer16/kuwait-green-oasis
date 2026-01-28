import { Link } from "react-router-dom";
import { 
  Palette, 
  Leaf, 
  Droplets, 
  Tent, 
  Lightbulb, 
  Wrench,
  ArrowLeft 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "تصميم الحدائق",
    description: "تصميم ثلاثي الأبعاد احترافي يناسب ذوقك ومساحتك",
    href: "/services#garden-design",
  },
  {
    icon: Leaf,
    title: "العشب الصناعي",
    description: "عشب صناعي عالي الجودة يتحمل حرارة الكويت",
    href: "/services#artificial-grass",
  },
  {
    icon: Droplets,
    title: "أنظمة الري",
    description: "أنظمة ري ذكية توفر الماء والجهد",
    href: "/services#irrigation",
  },
  {
    icon: Tent,
    title: "البرجولات والجلسات",
    description: "جلسات خارجية فاخرة وبرجولات بتصاميم عصرية",
    href: "/services#pergolas",
  },
  {
    icon: Lightbulb,
    title: "إضاءة الحدائق",
    description: "إضاءة LED وشمسية لإبراز جمال حديقتك",
    href: "/services#lighting",
  },
  {
    icon: Wrench,
    title: "الصيانة الدورية",
    description: "باقات صيانة شهرية للحفاظ على حديقتك",
    href: "/services#maintenance",
  },
];

const ServicesOverview = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg mb-2 block">ماذا نقدم</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات تنسيق الحدائق لتلبية جميع احتياجاتك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} to={service.href}>
              <Card className="h-full bg-background border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-primary font-medium">
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4 mr-1 group-hover:translate-x-[-4px] transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;