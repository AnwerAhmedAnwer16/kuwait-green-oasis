import { Link } from "react-router-dom";
import {
  Building2,
  Bath,
  Waves,
  SprayCanIcon as Spray,
  Triangle,
  Layers,
  Fan,
  Droplets,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "عزل الأسطح",
    description: "حماية من التسربات ومقاومة الحرارة لعزل الأسطح بمواد عالية الجودة",
    href: "/services#roof",
  },
  {
    icon: Bath,
    title: "عزل الحمامات",
    description: "عزل مائي متكامل للحمامات ضد تسربات المياه والرطوبة",
    href: "/services#bathroom",
  },
  {
    icon: Waves,
    title: "عزل المسابح",
    description: "عزل احترافي للمسابح والخزانات بمواد معتمدة تضمن عمراً طويلاً",
    href: "/services#pool",
  },
  {
    icon: Spray,
    title: "عزل الفوم (الرش الأمريكي)",
    description: "عزل حراري بالفوم الصناعي بتقنية الرش الأمريكي لعزل مثالي",
    href: "/services#foam",
  },
  {
    icon: Triangle,
    title: "العزل الفرنسي",
    description: "نظام عزل فرنسي متكامل لمعالجة الرطوبة الأرضية وحماية الأساسات",
    href: "/services#french",
  },
  {
    icon: Layers,
    title: "السكريد والصبة",
    description: "تنفيذ السكريد والصبة باحترافية لتحضير الأرضيات للعزل",
    href: "/services#screed",
  },
  {
    icon: Fan,
    title: "عزل دكتات التكييف",
    description: "عزل حراري لدكتات التكييف لمنع فقدان التبريد وتوفير الطاقة",
    href: "/services#duct",
  },
  {
    icon: Droplets,
    title: "عزل الخزانات",
    description: "عزل مائي للخزانات الأرضية والعلوية ضد التسربات والتلوث",
    href: "/services#foam",
  },
  {
    icon: ShieldCheck,
    title: "معالجة الرطوبة والعفن",
    description: "حلول متكاملة لمعالجة الرطوبة والعفن بمواد طاردة للماء",
    href: "/services#french",
  },
];

const ServicesOverview = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-lg mb-2 block">خدماتنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            حلول العزل المتكاملة في الكويت
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات العزل المائي والحراري لتلبية جميع احتياجاتك
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