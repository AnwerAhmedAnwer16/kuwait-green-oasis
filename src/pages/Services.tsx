import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import {
  Building2, Bath, Waves, SprayCanIcon as Spray, Triangle, Layers, Fan,
  CheckCircle, ArrowLeft, ShieldCheck, HardHat, Droplets, Thermometer
} from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";

// Services data with full details
const services = [
  {
    id: "roof",
    icon: Building2,
    title: "عزل الأسطح",
    subtitle: "حماية كاملة من التسربات الحرارية والمائية",
    description: "نقدم خدمة عزل الأسطح بمواد عالية الجودة تحمي منزلك من تسربات المياه والحرارة. نستخدم أحدث تقنيات العزل المائي والحراري لضمان حماية طويلة الأمد لسطح المبني. فريقنا المتخصص ينفذ العزل باحترافية وفق أعلى المعايير الهندسية.",
    benefits: [
      "حماية من تسربات الأمطار والمياه",
      "عزل حراري يخفض درجة الحرارة حتى 8 درجات",
      "مواد عازلة معتمدة دولياً وطويلة العمر",
      "ضمان شامل على أعمال العزل",
    ],
    process: [
      { step: 1, title: "المعاينة", desc: "زيارة الموقع وتقييم السطح" },
      { step: 2, title: "التجهيز", desc: "تنظيف السطح وتجهيزه للعزل" },
      { step: 3, title: "العزل", desc: "تطبيق طبقات العزل المائي والحراري" },
      { step: 4, title: "الفحص", desc: "اختبار جودة العزل والتسليم" },
    ],
    images: ["https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=800&q=80", "https://images.unsplash.com/photo-1635424824800-692767998d07?w=800&q=80"],
  },
  {
    id: "bathroom",
    icon: Bath,
    title: "عزل الحمامات",
    subtitle: "عزل مائي متكامل للحمامات ضد الرطوبة",
    description: "نوفر خدمة عزل الحمامات المتكامل لحماية الجدران والأرضيات من تسربات المياه والرطوبة. نستخدم مواد عازلة مرنة وعالية الجودة تضمن عدم تسرب المياه للطوابق السفلية. تنفيذ احترافي مع ضمان شامل.",
    benefits: [
      "حماية من تسربات المياه للجدران والأرضيات",
      "منع ظهور الرطوبة والعفن في الحمامات",
      "مواد عازلة مرنة تتحمل التمدد والانكماش",
      "ضمان ضد عيوب العزل لمدة تصل إلى 10 سنوات",
    ],
    process: [
      { step: 1, title: "الفحص", desc: "فحص الحمام وتحديد نقاط العزل" },
      { step: 2, title: "التجهيز", desc: "تجهيز الأرضية والجدران" },
      { step: 3, title: "العزل", desc: "تطبيق طبقات العزل المائي" },
      { step: 4, title: "الاختبار", desc: "اختبار العزل بالماء والتسليم" },
    ],
    images: ["https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&q=80", "https://images.unsplash.com/photo-1587527901949-ab0341697c1e?w=800&q=80"],
  },
  {
    id: "pool",
    icon: Waves,
    title: "عزل المسابح",
    subtitle: "عزل احترافي للمسابح والخزانات",
    description: "نقدم خدمة عزل المسابح والخزانات بمواد عازلة متخصصة تضمن عدم تسرب المياه والحفاظ على جودة المياه. نستخدم أحدث أنظمة العزل المرنة التي تتحمل الضغط والتمدد مع ضمان طويل الأمد.",
    benefits: [
      "عزل كامل ضد تسرب المياه من المسبح",
      "حماية هيكل المسبح من التشققات والتآكل",
      "مواد عازلة آمنة وصديقة للبيئة",
      "ضمان طويل الأمد على أعمال العزل",
    ],
    process: [
      { step: 1, title: "المعاينة", desc: "فحص المسبح وتقييم حالته" },
      { step: 2, title: "التجهيز", desc: "تنظيف السطح وتجهيزه" },
      { step: 3, title: "العزل", desc: "تطبيق طبقات العزل المتعددة" },
      { step: 4, title: "الاختبار", desc: "ملء المسبح واختبار العزل" },
    ],
    images: ["https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?w=800&q=80", "https://images.unsplash.com/photo-1608093754564-5cd7922674fe?w=800&q=80"],
  },
  {
    id: "foam",
    icon: Spray,
    title: "عزل الفوم (الرش الأمريكي)",
    subtitle: "عزل حراري بالفوم الصناعي بتقنية الرش",
    description: "نقدم خدمة عزل الفوم بالرش الأمريكي باستخدام أحدث معدات الرش. الفوم الصناعي يعزل حرارياً ومائياً بشكل مثالي، ويستخدم لعزل الأسطح والخزانات والدكتات. يتميز بخفة وزنه وقوته العازلة الفائقة.",
    benefits: [
      "عزل حراري ممتاز يخفض استهلاك الطاقة حتى 40%",
      "عزل مائي كامل بدون فواصل أو لحامات",
      "يلتصق بجميع الأسطح ويغطي الفراغات",
      "خفيف الوزن ولا يسبب أحمالاً على الأسطح",
    ],
    process: [
      { step: 1, title: "المعاينة", desc: "تقييم السطح وقياس المساحة" },
      { step: 2, title: "التجهيز", desc: "تجهيز السطح ومعدات الرش" },
      { step: 3, title: "الرش", desc: "رش الفوم بتقنية أمريكية" },
      { step: 4, title: "التسوية", desc: "تسوية السطح وفحص الجودة" },
    ],
    images: ["https://images.unsplash.com/photo-1543525324-dc2c9006d03d?w=800&q=80", "https://images.unsplash.com/photo-1674485190969-4347f72aad0e?w=800&q=80"],
  },
  {
    id: "french",
    icon: Triangle,
    title: "العزل الفرنسي",
    subtitle: "نظام عزل فرنسي متكامل لمعالجة الرطوبة",
    description: "نظام العزل الفرنسي هو حل متكامل لمعالجة مشاكل الرطوبة الأرضية وحماية الأساسات. يشمل النظام تركيب مواسير تصريف حول المبنى مع طبقات عازلة لمنع تسرب المياه الجوفية للجدران والأساسات.",
    benefits: [
      "حماية الأساسات من المياه الجوفية",
      "معالجة الرطوبة الأرضية نهائياً",
      "نظام تصريف متكامل حول المبنى",
      "حل دائم لمشاكل الرطوبة والعفن",
    ],
    process: [
      { step: 1, title: "الدراسة", desc: "دراسة حالة التربة والرطوبة" },
      { step: 2, title: "الحفر", desc: "حفر حول المبنى للوصول للأساس" },
      { step: 3, title: "العزل", desc: "تركيب العازل ومواسير التصريف" },
      { step: 4, title: "الردم", desc: "ردم التربة وإعادة التأهيل" },
    ],
    images: ["https://images.unsplash.com/photo-1744217725753-3fe4a7801645?w=800&q=80", "https://images.unsplash.com/photo-1685464197644-41d9b07e1e73?w=800&q=80"],
  },
  {
    id: "screed",
    icon: Layers,
    title: "السكريد والصبة",
    subtitle: "تحضير الأرضيات للعزل باحترافية",
    description: "نقدم خدمات السكريد والصبة كخطوة أساسية قبل تطبيق العزل. ننفذ طبقات التسوية والصبة الخرسانية بأعلى جودة لضمان سطح مثالي للعزل. نستخدم خلطات خرسانية مدروسة تناسب مختلف أنواع العزل.",
    benefits: [
      "تسوية الأرضيات تحضيراً للعزل",
      "صبة خرسانية متينة وقوية",
      "ضمان جودة التنفيذ حسب المواصفات",
      "إعداد مثالي لطبقات العزل اللاحقة",
    ],
    process: [
      { step: 1, title: "المعاينة", desc: "قياس المساحة وتحديد المستويات" },
      { step: 2, title: "التجهيز", desc: "تنظيف السطح وتجهيز الخلطة" },
      { step: 3, title: "الصب", desc: "صب الخرسانة وتسويتها" },
      { step: 4, title: "المعالجة", desc: "معالجة الخرسانة والتجفيف" },
    ],
    images: ["https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?w=800&q=80", "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80"],
  },
  {
    id: "duct",
    icon: Fan,
    title: "عزل دكتات التكييف",
    subtitle: "عزل حراري لدكتات التكييف لتوفير الطاقة",
    description: "نقدم خدمة عزل دكتات التكييف لمنع فقدان التبريد وتوفير استهلاك الطاقة. نستخدم مواد عازلة للحرارة عالية الجودة تغلف مجاري الهواء بالكامل. يضمن العزل وصول التبريد بكفاءة لجميع الغرف.",
    benefits: [
      "منع فقدان التبريد في مجاري الهواء",
      "خفض استهلاك الكهرباء حتى 25%",
      "منع تكاثف الماء على الدكتات",
      "إطالة عمر نظام التكييف",
    ],
    process: [
      { step: 1, title: "الفحص", desc: "فحص الدكتات ونظام التكييف" },
      { step: 2, title: "التجهيز", desc: "تنظيف الدكتات وتجهيزها" },
      { step: 3, title: "العزل", desc: "تغليف الدكتات بالمادة العازلة" },
      { step: 4, title: "الفحص", desc: "فحص جودة العزل والتسليم" },
    ],
    images: ["https://images.unsplash.com/photo-1615309662243-70f6df917b59?w=800&q=80", "https://images.unsplash.com/photo-1707596830261-9c6138a6dd3b?w=800&q=80"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>خدمات العزل المائي والحراري | عزل أسطح وحمامات وفوم - عوازل الكويت</title>
        <meta
          name="description"
          content="استعرض خدمات شركة عوازل المتكاملة: عزل الأسطح، عزل الحمامات، عزل المسابح، عزل الفوم بالرش الأمريكي، العزل الفرنسي، السكريد والصبة، وعزل دكتات التكييف في الكويت."
        />
        <meta
          name="keywords"
          content="خدمات عزل الكويت, عزل أسطح الكويت, عزل حمامات الكويت, عزل مسابح, عزل فوم رش أمريكي, عزل فرنسي, سكريد وصبة, عزل دكتات تكييف, معالجة رطوبة الكويت, شركة عوازل"
        />
        <meta property="og:title" content="خدمات العزل المائي والحراري | عزل أسطح وحمامات وفوم - عوازل الكويت" />
        <meta property="og:description" content="استعرض خدمات شركة عوازل المتكاملة للعزل المائي والحراري في الكويت: عزل الأسطح والحمامات والمسابح والفوم والعزل الفرنسي." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1723124280643-f883fd318ce5?w=1200&q=80" />
        <meta property="og:url" content="https://kuwaitigardens.com/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kuwaitigardens.com/services" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-foreground py-20 px-4">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              حلول العزل المائي والحراري المتكاملة في الكويت
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              نقدم حلولاً هندسية احترافية للعزل بمواد معتمدة وفريق متخصص في جميع مناطق الكويت
            </p>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                      <h3 className="text-accent font-medium">{service.subtitle}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Process Steps */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {service.process.map((step) => (
                      <div key={step.step} className="text-center">
                        <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center mx-auto mb-2">
                          {step.step}
                        </div>
                        <p className="font-bold text-foreground text-sm">{step.title}</p>
                        <p className="text-muted-foreground text-xs">{step.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a
                      href={WHATSAPP_URL()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      اطلب الخدمة الآن
                      <ArrowLeft className="w-5 h-5 mr-2" />
                    </a>
                  </Button>
                </div>

                {/* Images */}
                <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {service.images.map((img, i) => (
                    <div
                      key={i}
                      className={`rounded-xl overflow-hidden shadow-lg ${i === 0 ? "row-span-2" : ""}`}
                    >
                      <img
                        src={img}
                        alt={`${service.title} في الكويت - شركة عوازل ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              جاهز لعزل منزلك أو منشأتك؟
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              احصل على معاينة مجانية وعرض سعر مفصل لمشروع العزل الخاص بك
            </p>
            <div className="max-w-md mx-auto bg-background rounded-2xl p-6">
              <ContactForm variant="compact" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;