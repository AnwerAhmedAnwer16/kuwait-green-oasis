import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { 
  Palette, Leaf, Droplets, Tent, Lightbulb, Wrench,
  CheckCircle, ArrowLeft, X
} from "lucide-react";
import { useState } from "react";

// Services data with full details
const services = [
  {
    id: "garden-design",
    icon: Palette,
    title: "تصميم الحدائق",
    subtitle: "تصميم ثلاثي الأبعاد احترافي",
    description: "نقدم خدمة تصميم الحدائق بأحدث البرامج ثلاثية الأبعاد. نساعدك على تصور حديقتك قبل التنفيذ مع مراعاة الذوق الشخصي والميزانية والمساحة المتاحة.",
    benefits: [
      "تصميم 3D واقعي لتصور النتيجة النهائية",
      "اختيار النباتات المناسبة لمناخ الكويت",
      "تخطيط المساحات والممرات بشكل عملي",
      "مراعاة الخصوصية والإطلالات",
    ],
    process: [
      { step: 1, title: "المعاينة", desc: "زيارة الموقع وأخذ القياسات" },
      { step: 2, title: "التصميم", desc: "إعداد التصميم ثلاثي الأبعاد" },
      { step: 3, title: "المراجعة", desc: "التعديلات حسب ملاحظاتكم" },
      { step: 4, title: "التنفيذ", desc: "البدء بتنفيذ المشروع" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80",
    ],
  },
  {
    id: "artificial-grass",
    icon: Leaf,
    title: "العشب الصناعي",
    subtitle: "عشب عالي الجودة يتحمل الحرارة",
    description: "نوفر أفضل أنواع العشب الصناعي المقاوم للحرارة والأشعة فوق البنفسجية. عشب يدوم لسنوات طويلة مع ضمان شامل.",
    benefits: [
      "مقاوم لحرارة الكويت الشديدة",
      "لا يحتاج ماء أو صيانة دورية",
      "آمن للأطفال والحيوانات الأليفة",
      "ضمان حتى 10 سنوات",
    ],
    process: [
      { step: 1, title: "القياس", desc: "قياس المساحة بدقة" },
      { step: 2, title: "التحضير", desc: "تجهيز الأرضية وتسويتها" },
      { step: 3, title: "التركيب", desc: "تركيب العشب بإتقان" },
      { step: 4, title: "التسليم", desc: "فحص الجودة والتسليم" },
    ],
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&q=80",
    ],
  },
  {
    id: "irrigation",
    icon: Droplets,
    title: "أنظمة الري",
    subtitle: "ري ذكي يوفر الماء",
    description: "نركب أحدث أنظمة الري الذكية بالتنقيط والرش. أنظمة موفرة للماء مع تحكم آلي وجدولة زمنية.",
    benefits: [
      "توفير حتى 70% من استهلاك الماء",
      "تحكم آلي عبر التطبيق",
      "أنظمة تنقيط ورش متنوعة",
      "صيانة دورية وقطع غيار متوفرة",
    ],
    process: [
      { step: 1, title: "الدراسة", desc: "دراسة احتياجات النباتات" },
      { step: 2, title: "التصميم", desc: "تصميم شبكة الري" },
      { step: 3, title: "التمديد", desc: "تمديد الأنابيب والرشاشات" },
      { step: 4, title: "البرمجة", desc: "برمجة نظام التحكم" },
    ],
    images: [
      "https://images.unsplash.com/photo-1564429238067-5f79bf6f3f23?w=400&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    ],
  },
  {
    id: "pergolas",
    icon: Tent,
    title: "البرجولات والجلسات",
    subtitle: "جلسات خارجية فاخرة",
    description: "نصمم وننفذ برجولات وجلسات خارجية بتصاميم عصرية. خشب طبيعي أو صناعي مقاوم للعوامل الجوية.",
    benefits: [
      "تصاميم حصرية ومخصصة",
      "خامات عالية الجودة",
      "مقاومة للحرارة والرطوبة",
      "إضافة أنظمة تبريد وإضاءة",
    ],
    process: [
      { step: 1, title: "التصميم", desc: "اختيار التصميم المناسب" },
      { step: 2, title: "الخامات", desc: "اختيار نوع الخشب" },
      { step: 3, title: "التصنيع", desc: "تصنيع القطع بدقة" },
      { step: 4, title: "التركيب", desc: "التركيب في الموقع" },
    ],
    images: [
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80",
    ],
  },
  {
    id: "lighting",
    icon: Lightbulb,
    title: "إضاءة الحدائق",
    subtitle: "إضاءة LED وشمسية",
    description: "نوفر حلول إضاءة متنوعة للحدائق. من الإضاءة الشمسية الموفرة إلى أنظمة LED الذكية مع تحكم عن بعد.",
    benefits: [
      "إضاءة LED موفرة للطاقة",
      "أنظمة شمسية لا تحتاج كهرباء",
      "تحكم عن بعد وألوان متعددة",
      "إبراز جمال الحديقة ليلاً",
    ],
    process: [
      { step: 1, title: "المعاينة", desc: "دراسة نقاط الإضاءة" },
      { step: 2, title: "التخطيط", desc: "تخطيط توزيع الإضاءة" },
      { step: 3, title: "التمديد", desc: "تمديد الأسلاك الكهربائية" },
      { step: 4, title: "التركيب", desc: "تركيب وحدات الإضاءة" },
    ],
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80",
      "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&q=80",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "الصيانة الدورية",
    subtitle: "باقات صيانة شهرية",
    description: "نقدم باقات صيانة شهرية شاملة للحفاظ على جمال حديقتك. قص العشب، تقليم الأشجار، مكافحة الآفات والمزيد.",
    benefits: [
      "زيارات دورية منتظمة",
      "قص وتشذيب النباتات",
      "مكافحة الآفات والأمراض",
      "فحص وصيانة أنظمة الري",
    ],
    process: [
      { step: 1, title: "التقييم", desc: "تقييم حالة الحديقة" },
      { step: 2, title: "الباقة", desc: "اختيار باقة الصيانة" },
      { step: 3, title: "الجدولة", desc: "جدولة الزيارات الدورية" },
      { step: 4, title: "التنفيذ", desc: "تنفيذ أعمال الصيانة" },
    ],
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80",
    ],
  },
];

// Portfolio images - [استبدل بصور مشاريعكم]
const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&q=80", category: "تصميم", alt: "تصميم حديقة" },
  { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80", category: "عشب صناعي", alt: "عشب صناعي" },
  { src: "https://images.unsplash.com/photo-1564429238067-5f79bf6f3f23?w=400&q=80", category: "أنظمة ري", alt: "نظام ري" },
  { src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&q=80", category: "برجولات", alt: "برجولة" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80", category: "إضاءة", alt: "إضاءة حديقة" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", category: "صيانة", alt: "صيانة حديقة" },
  { src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&q=80", category: "تصميم", alt: "تصميم حديقة 2" },
  { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80", category: "عشب صناعي", alt: "عشب صناعي 2" },
  { src: "https://images.unsplash.com/photo-1564429238067-5f79bf6f3f23?w=400&q=80", category: "أنظمة ري", alt: "نظام ري 2" },
  { src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&q=80", category: "برجولات", alt: "برجولة 2" },
  { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80", category: "إضاءة", alt: "إضاءة حديقة 2" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80", category: "صيانة", alt: "صيانة حديقة 2" },
];

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("الكل");

  const categories = ["الكل", "تصميم", "عشب صناعي", "أنظمة ري", "برجولات", "إضاءة", "صيانة"];
  
  const filteredImages = activeFilter === "الكل" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>خدمات تنسيق الحدائق في الكويت | عشب صناعي، ري، برجولات - اسم الشركة</title>
        <meta
          name="description"
          content="خدمات شاملة لتنسيق الحدائق: تصميم ثلاثي الأبعاد، تركيب عشب صناعي، أنظمة ري ذكية، برجولات وجلسات خارجية، إضاءة LED، صيانة دورية. اطلب عرض سعر الآن."
        />
        <link rel="canonical" href="https://example.com/services" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-foreground py-20 px-4">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              خدماتنا المتميزة
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              نقدم حلولاً متكاملة لتنسيق الحدائق في الكويت بأعلى معايير الجودة
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
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Process Steps */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {service.process.map((step) => (
                      <div key={step.step} className="text-center">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-2">
                          {step.step}
                        </div>
                        <p className="font-bold text-foreground text-sm">{step.title}</p>
                        <p className="text-muted-foreground text-xs">{step.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <a
                      href="https://wa.me/965XXXXXXXX" // [أضف رقم الواتساب]
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      اطلب الخدمة الآن
                      <ArrowLeft className="w-5 h-5 mr-2" />
                    </a>
                  </Button>
                </div>

                {/* Images - [استبدل بصور قبل/بعد] */}
                <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {service.images.map((img, i) => (
                    <div
                      key={i}
                      className={`rounded-xl overflow-hidden shadow-lg ${i === 0 ? "row-span-2" : ""}`}
                    >
                      <img
                        src={img}
                        alt={`${service.title} - صورة ${i + 1}`}
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

        {/* Portfolio Section */}
        <section id="portfolio" className="section-padding bg-foreground">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                معرض أعمالنا
              </h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                اطلع على مجموعة من مشاريعنا المنجزة في الكويت
              </p>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(img.src.replace("w=400", "w=1200"))}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              جاهز لتحويل حديقتك؟
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              احصل على استشارة مجانية وعرض سعر مفصل لمشروعك
            </p>
            <div className="max-w-md mx-auto bg-background rounded-2xl p-6">
              <ContactForm variant="compact" />
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-primary-foreground" />
            </button>
            <img
              src={selectedImage}
              alt="صورة مكبرة"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </Layout>
    </>
  );
};

export default Services;