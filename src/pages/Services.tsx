import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import {
  Palette, Leaf, Droplets, Tent, Lightbulb, Wrench,
  CheckCircle, ArrowLeft, TreePine, Scissors, Sprout
} from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";

// ── Real project photos from /public/kg ───────────────────────────────
// Garden Design — full garden with palm trees + fountain, garden+pergola composite
const IMG_DESIGN_1 = "/kg/gardens21.jpg";   // Kuwaiti villa garden with palm trees
const IMG_DESIGN_2 = "/kg/gardens.jpg";     // Garden design with pergola + stepping stones

// Artificial Grass — real grass installations
const IMG_GRASS_1 = "/kg/gardens2.jpg";    // Wall-to-wall professional green turf
const IMG_GRASS_2 = "/kg/gardens1.jpg";    // Artificial grass + outdoor deck

// Irrigation — reuse garden shots showing irrigated lawns
const IMG_IRRIG_1 = "/kg/483529366_17968829630839358_870485787341361304_n.webp"; // large lawn showing irrigation coverage
const IMG_IRRIG_2 = "/kg/gardens21.jpg";   // well-irrigated garden with fountain

// Pergolas / Outdoor Seating — actual project pergolas
const IMG_PERG_1 = "/kg/woody_setting.jpg";  // wooden pergola seating area
const IMG_PERG_2 = "/kg/lightings.jpg";       // bamboo pergola with warm lights

// Lighting — pergola with warm ambient lighting
const IMG_LIGHT_1 = "/kg/lightings.jpg";   // bamboo pergola + warm garden lights
const IMG_LIGHT_2 = "/kg/gardens222.jpg";  // wooden pergola with wall lights

// Maintenance — well-maintained lawns from our projects
const IMG_MAINT_1 = "/kg/gardens22.jpg";   // artificial grass maintained entrance
const IMG_MAINT_2 = "/kg/gardens2.jpg";    // pristine green turf maintenance

// Trees & Palms
const IMG_PLANT_1 = "/kg/gardens21.jpg";
const IMG_PLANT_2 = "/kg/gardens.jpg";

const IMG_PALM_1 = "/kg/gardens4.jpg";
const IMG_PALM_2 = "/kg/gardens21.jpg";

const IMG_REMOVE_1 = "/kg/gardens.jpg"; // Utilizing generic appropriate visuals for tree related text where explicit removal isn't present
const IMG_REMOVE_2 = "/kg/gardens22.jpg";

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
    images: [IMG_DESIGN_1, IMG_DESIGN_2],
  },
  {
    id: "artificial-grass",
    icon: Leaf,
    title: "الثيل الصناعي والطبيعي",
    subtitle: "ثيل عالي الجودة يتحمل الحرارة",
    description: "نوفر أفضل أنواع الثيل (العشب) الصناعي المقاوم للحرارة والأشعة فوق البنفسجية. ثيل يدوم لسنوات طويلة مع ضمان شامل.",
    benefits: [
      "مقاوم لحرارة الكويت الشديدة",
      "لا يحتاج ماء أو صيانة دورية",
      "آمن للأطفال والحيوانات الأليفة",
      "ضمان حتى 10 سنوات",
    ],
    process: [
      { step: 1, title: "القياس", desc: "قياس المساحة بدقة" },
      { step: 2, title: "التحضير", desc: "تجهيز الأرضية وتسويتها" },
      { step: 3, title: "التركيب", desc: "تركيب الثيل بإتقان" },
      { step: 4, title: "التسليم", desc: "فحص الجودة والتسليم" },
    ],
    images: [IMG_GRASS_1, IMG_GRASS_2],
  },
  {
    id: "irrigation",
    icon: Droplets,
    title: "شبكات الري",
    subtitle: "شبكات ري (عادي وأتوماتيك) توفر الماء",
    description: "نركب أحدث شبكات الري العادية والأتوماتيكية بالتنقيط والرش. شبكات موفرة للماء مع تحكم آلي وجدولة زمنية.",
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
    images: [IMG_IRRIG_1, IMG_IRRIG_2],
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
    images: [IMG_PERG_1, IMG_PERG_2],
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
    images: [IMG_LIGHT_1, IMG_LIGHT_2],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "الصيانة الدورية",
    subtitle: "باقات صيانة شهرية",
    description: "نقدم باقات صيانة شهرية شاملة للحفاظ على جمال حديقتك. قص الثيل، تقليم الأشجار، ومراقبة أنظمة الري.",
    benefits: [
      "زيارات دورية منتظمة",
      "قص وتشذيب النباتات",
      "فحص وصيانة أنظمة الري",
    ],
    process: [
      { step: 1, title: "التقييم", desc: "تقييم حالة الحديقة" },
      { step: 2, title: "الباقة", desc: "اختيار باقة الصيانة" },
      { step: 3, title: "الجدولة", desc: "جدولة الزيارات الدورية" },
      { step: 4, title: "التنفيذ", desc: "تنفيذ أعمال الصيانة" },
    ],
    images: [IMG_MAINT_1, IMG_MAINT_2],
  },
  {
    id: "planting",
    icon: Sprout,
    title: "زرع الأشجار والنخيل",
    subtitle: "مجموعة متنوعة تتناسب مع مناخ الكويت",
    description: "نقدم خدمة توريد وزراعة كافة أنواع الأشجار والنخيل التي تتناسب مع درجات الحرارة والبيئة في الكويت. نضمن أفضل الأنواع الجاهزة للنمو والإثمار.",
    benefits: [
      "توريد أشجار ونخيل خالية من الأمراض",
      "زراعة بطرق علمية تضمن نمو الجذور السليم",
      "توفير بيئة تربة مناسبة وغنية بالمعادن",
    ],
    process: [
      { step: 1, title: "الاختيار", desc: "اختيار الأشجار المناسبة للمساحة والجو" },
      { step: 2, title: "التجهيز", desc: "تجهيز حفر الزراعة والتربة" },
      { step: 3, title: "الزراعة", desc: "عملية الزراعة والتثبيت السليم" },
      { step: 4, title: "المتابعة", desc: "الري الأولي والمتابعة للمناعة" },
    ],
    images: [IMG_PLANT_1, IMG_PLANT_2],
  },
  {
    id: "palm-care",
    icon: TreePine,
    title: "تلقيح وتكريب النخيل",
    subtitle: "لزيادة الإنتاج والمحافظة على النخلة",
    description: "خدمات احترافية في العناية بالنخلة من مرحلة التلقيح (التنبيت) وحتى مرحلة التكريب (قص السعف اليابس وتكريب الجذع) لضمان بيئة نظيفة وثمار بجودة عالية.",
    benefits: [
      "تلقيح دقيق لضمان محصول وفي ومثمر",
      "تكريب وتخليص النخلة من السعف الميت والآفات",
      "تحسين المنظر الجمالي لجذع النخلة",
    ],
    process: [
      { step: 1, title: "الفحص", desc: "فحص حالة النخلة والطلع" },
      { step: 2, title: "التلقيح", desc: "عملية التلقيح في الوقت المناسب" },
      { step: 3, title: "التكريب", desc: "قص السعف الجاف وتكريب الجذع" },
      { step: 4, title: "التنظيف", desc: "إزالة المخلفات من الموقع" },
    ],
    images: [IMG_PALM_1, IMG_PALM_2],
  },
  {
    id: "tree-removal",
    icon: Scissors,
    title: "خلع وإزالة الأشجار",
    subtitle: "إزالة احترافية وآمنة للأشجار",
    description: "إزالة וخلع الأشجار الميتة أو التي تتسبب بأضرار للمبنى والجدران بطرق آمنة ومدروسة دون التأثير على البيئة المحيطة أو التمديدات.",
    benefits: [
      "معدات متخصصة وآمنة لخلع الأشجار",
      "دقة في العمل وتجنب التسبب بأضرار",
      "تقطيع الشجرة وتخليص الموقع من المخلفات",
    ],
    process: [
      { step: 1, title: "التقييم", desc: "تقييم الشجرة والمكان المحيط" },
      { step: 2, title: "التقطيع", desc: "التدرج في الإزالة والتقطيع" },
      { step: 3, title: "الخلع", desc: "خلع الجذور العميقة بأمان" },
      { step: 4, title: "التنظيف", desc: "تسوية الأرضية وتنقيتها" },
    ],
    images: [IMG_REMOVE_1, IMG_REMOVE_2],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>خدماتنا | تنسيق حدائق، ثيل صناعي، وبرجولات - كويتي جاردنز</title>
        <meta
          name="description"
          content="استعرض خدمات كويتي جاردنز المتكاملة: تصميم لاندسكيب، تركيب ثيل صناعي وطبيعي، شبكات ري، وزرع أشجار وتكريب وتلقيح النخيل وخلع الأشجار في الكويت."
        />
        <meta
          name="keywords"
          content="خدمات تنسيق حدائق, تركيب ثيل صناعي الكويت, تصميم لاندسكيب, شبكات ري عادي وأتوماتيك, زرع أشجار الكويت, تلقيح نخيل, تكريب نخيل, تنظيف نخل, خلع أشجار, إزالة أشجار, صيانة حدائق منزلية"
        />
        <meta property="og:title" content="خدماتنا | تنسيق حدائق، ثيل صناعي، شبكات ري، وزرع وتكريب النخيل - كويتي جاردنز" />
        <meta property="og:description" content="استعرض خدمات كويتي جاردنز المتكاملة: تصميم لاندسكيب، تركيب ثيل صناعي وطبيعي، شبكات ري (عادي وأتوماتيك)، وزرع وتكريب النخيل وإزالة الأشجار." />
        <meta property="og:image" content="/kg/gardens21.jpg" />
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
              خدمات تنسيق وتصميم الحدائق المتكاملة
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
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                      <h3 className="text-primary font-medium">{service.subtitle}</h3>
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
                        alt={`${service.title} في الكويت - مشروع كويتي جاردنز ${i + 1}`}
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
      </Layout>
    </>
  );
};

export default Services;