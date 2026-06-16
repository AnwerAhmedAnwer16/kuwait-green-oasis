import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";

// Blog categories
const categories = [
  { id: "all", name: "الكل" },
  { id: "waterproofing", name: "عزل مائي" },
  { id: "thermal", name: "عزل حراري" },
  { id: "foam", name: "عزل الفوم" },
  { id: "moisture", name: "معالجة الرطوبة" },
];

// Blog articles about waterproofing & insulation
const articles = [
  {
    id: "best-roof-waterproofing",
    slug: "best-roof-waterproofing",
    title: "أفضل طرق عزل الأسطح في الكويت",
    excerpt: "دليل شامل لأفضل طرق عزل الأسطح المائي والحراري في الكويت. تعرف على المواد والتقنيات المستخدمة لضمان حماية منزلك من التسربات والحرارة.",
    content: `
      <p>تعتبر عملية <a href="/services#roof" class="text-primary hover:underline">عزل الأسطح</a> من أهم الاستثمارات التي يمكن أن تقوم بها لمنزلك في الكويت، خاصة مع درجات الحرارة المرتفعة والأمطار الموسمية.</p>

      <h2>أهمية عزل الأسطح</h2>
      <p>عزل السطح يحمي منزلك من أضرار تسربات المياه التي قد تؤدي إلى تشققات في الجدران وأسقف الغرف، كما يخفض درجة حرارة المنزل الداخلية بشكل كبير.</p>

      <h2>أنواع العزل المستخدمة</h2>
      <h3>1. العزل المائي (الإسمنتي)</h3>
      <p>يستخدم لعزل الأسطح ضد تسربات الأمطار، ويتكون من طبقات إسمنتية عازلة مع إضافات كيميائية مقاومة للماء.</p>

      <h3>2. العزل الحراري بالفوم</h3>
      <p>يتم <a href="/services#foam" class="text-primary hover:underline">عزل الفوم بالرش الأمريكي</a> على سطح المبنى ليعزل حرارياً ومائياً في آن واحد.</p>

      <h3>3. العزل بالبيتومين</h3>
      <p>مادة عازلة تقليدية فعالة للأسطح المسطحة، توفر حماية ممتازة من الرطوبة.</p>

      <h2>نصائح لعزل السطح</h2>
      <ul>
        <li>تنظيف السطح جيداً قبل البدء بالعزل</li>
        <li>معالجة التشققات والشروخ أولاً</li>
        <li>تطبيق أكثر من طبقة عازلة للحماية القصوى</li>
        <li>الاستعانة بفريق متخصص لضمان التنفيذ الصحيح</li>
      </ul>
    `,
    category: "waterproofing",
    categoryName: "عزل مائي",
    image: "https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?w=800&q=80",
    author: "فريق عوازل",
    date: "2024-01-15",
    readTime: 6,
  },
  {
    id: "bathroom-waterproofing-guide",
    slug: "bathroom-waterproofing-guide",
    title: "دليل عزل الحمامات - خطوة بخطوة",
    excerpt: "تعرف على الطريقة الصحيحة لعزل الحمامات لحماية منزلك من تسربات المياه والرطوبة. دليل شامل من الألف إلى الياء.",
    content: `
      <p>يعتبر <a href="/services#bathroom" class="text-primary hover:underline">عزل الحمامات</a> من أهم خطوات التشطيب التي لا يمكن التغاضي عنها. فالعزل الجيد يحمي منزلك من أضرار الرطوبة التي قد تكلفك آلاف الدنانير للعلاج.</p>

      <h2>لماذا تحتاج الحمامات للعزل؟</h2>
      <p>الحمامات تتعرض يومياً للمياه والرطوبة، وبدون عزل مناسب تتسرب المياه إلى الجدران والأرضيات وتصل إلى الطوابق السفلية محدثة أضراراً كبيرة.</p>

      <h2>خطوات عزل الحمامات</h2>
      <h3>1. تجهيز السطح</h3>
      <p>تنظيف الأرضية والجدران جيداً من الأتربة والدهون. معالجة أي شقوق أو فجوات.</p>

      <h3>2. تطبيق طبقة العزل الأولى</h3>
      <p>يتم فرد المادة العازلة (مانع تسرب) على الأرضية بارتفاع 30 سم على الجدران.</p>

      <h3>3. تطبيق طبقة العزل الثانية</h3>
      <p>بعد جفاف الطبقة الأولى، تطبق طبقة ثانية في الاتجاه المعاكس للضمان.</p>

      <h3>4. اختبار العزل</h3>
      <p>ملء الحمام بالماء وتركه 24 ساعة للتأكد من عدم وجود تسربات.</p>

      <h2>مواد العزل الموصى بها</h2>
      <ul>
        <li>مواد عازلة إسمنتية ثنائية المرونة</li>
        <li>أغشية عازلة من البولي يوريثان</li>
        <li>مواد عازلة أكريليكية عالية الجودة</li>
      </ul>
    `,
    category: "waterproofing",
    categoryName: "عزل مائي",
    image: "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?w=800&q=80",
    author: "فريق عوازل",
    date: "2024-01-10",
    readTime: 5,
  },
  {
    id: "spray-foam-benefits",
    slug: "spray-foam-benefits",
    title: "فوائد عزل الفوم بالرش الأمريكي",
    excerpt: "اكتشف لماذا يعتبر عزل الفوم بالرش الأمريكي الخيار الأمثل للعزل الحراري والمائي في الكويت.",
    content: `
      <p>يعد <a href="/services#foam" class="text-primary hover:underline">عزل الفوم بالرش الأمريكي</a> من أحدث وأفضل تقنيات العزل المتوفرة في الكويت. يجمع بين العزل المائي والحراري في خطوة واحدة.</p>

      <h2>ما هو الفوم الصناعي؟</h2>
      <p>الفوم الصناعي (البولي يوريثان) هو مادة عازلة يتم رشها على الأسطح على شكل رغوة تتمدد وتتصلب لتشكل طبقة عازلة متكاملة بدون فواصل.</p>

      <h2>المميزات الرئيسية</h2>
      <h3>1. عزل حراري فائق</h3>
      <p>يخفض استهلاك الطاقة حتى 40%، ويقلل درجة حرارة المنزل في الصيف بشكل ملحوظ.</p>

      <h3>2. عزل مائي كامل</h3>
      <p>نظراً لخلوه من الفواصل واللحامات، يوفر الفوم عزلاً مائياً مثالياً ضد تسربات الأمطار.</p>

      <h3>3. خفيف الوزن</h3>
      <p>لا يضيف أحمالاً إضافية على هيكل المبنى مقارنة بمواد العزل التقليدية.</p>

      <h2>مجالات استخدام الفوم</h2>
      <ul>
        <li>عزل أسطح المباني والفلل</li>
        <li>عزل الخزانات الأرضية والعلوية</li>
        <li>عزل دكتات التكييف</li>
        <li>عزل الجدران الداخلية والخارجية</li>
      </ul>
    `,
    category: "foam",
    categoryName: "عزل الفوم",
    image: "https://images.unsplash.com/photo-1674485190969-4347f72aad0e?w=800&q=80",
    author: "فريق عوازل",
    date: "2024-01-05",
    readTime: 5,
  },
  {
    id: "choose-insulation-company",
    slug: "choose-insulation-company",
    title: "كيف تختار شركة عزل موثوقة في الكويت؟",
    excerpt: "نصائح مهمة لاختيار أفضل شركة عزل في الكويت. ما الذي تبحث عنه وما الأسئلة التي يجب أن تطرحها قبل التعاقد.",
    content: `
      <p>مع كثرة شركات العزل في الكويت، يصبح اختيار <a href="/" class="text-primary hover:underline">شركة عوازل موثوقة</a> تحدياً حقيقياً. إليك المعايير التي يجب أن تراعيها لضمان اختيار الأفضل.</p>

      <h2>مؤهلات شركة العزل الموثوقة</h2>
      <h3>1. الخبرة والسمعة</h3>
      <p>ابحث عن شركة ذات خبرة لا تقل عن 5 سنوات في مجال العزل في الكويت. اسأل عن مشاريع سابقة واطلب صوراً للأعمال.</p>

      <h3>2. المواد المستخدمة</h3>
      <p>تأكد من أن الشركة تستخدم مواد عزل معتمدة عالمياً وذات جودة عالية. لا تقبل بمواد رخيصة قد تفشل بعد موسم واحد.</p>

      <h3>3. الضمانات</h3>
      <p>شركة العزل الجيدة تقدم ضماناً على أعمالها لا يقل عن 5 سنوات. الضمان دليل على ثقة الشركة بجودة عملها.</p>

      <h2>أسئلة يجب طرحها</h2>
      <ul>
        <li>كم سنة لكم في مجال العزل بالكويت؟</li>
        <li>هل توفرون معاينة مجانية قبل تقديم السعر؟</li>
        <li>ما هي المواد العازلة التي تستخدمونها؟</li>
        <li>هل يوجد ضمان على العزل وكم مدته؟</li>
        <li>هل لديكم مراجع من عملاء سابقين؟</li>
      </ul>

      <p>للحصول على استشارة مجانية، <a href="https://wa.me/96560786063" class="text-primary font-bold hover:underline">تواصل مع فريق عوازل عبر واتساب</a>.</p>
    `,
    category: "moisture",
    categoryName: "معالجة الرطوبة",
    image: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?w=800&q=80",
    author: "فريق عوازل",
    date: "2024-01-01",
    readTime: 5,
  },
  {
    id: "dampness-treatment",
    slug: "dampness-treatment",
    title: "معالجة الرطوبة والعفن في المنازل والمباني",
    excerpt: "حلول نهائية لمشكلة الرطوبة والعفن في المنازل والمباني في الكويت. تعرف على الأسباب وطرق المعالجة والوقاية.",
    content: `
      <p>تعد مشكلة الرطوبة والعفن من أكثر المشاكل شيوعاً في المباني في الكويت، خاصة في المناطق الساحلية. <a href="/services#french" class="text-primary hover:underline">العزل الفرنسي</a> يقدم حلاً جذرياً لهذه المشكلة.</p>

      <h2>أسباب ظهور الرطوبة والعفن</h2>
      <h3>1. تسربات المياه</h3>
      <p>تسربات من الحمامات أو الأسطح أو الخزانات تصل إلى الجدران وتسبب رطوبة مستمرة.</p>

      <h3>2. الرطوبة الأرضية</h3>
      <p>ارتفاع منسوب المياه الجوفية يؤدي لصعود الرطوبة عبر الجدران (خاصة في المباني القديمة).</p>

      <h3>3. سوء التهوية</h3>
      <p>نقص التهوية في الغرف يؤدي لتكاثف بخار الماء وظهور العفن.</p>

      <h2>طرق المعالجة</h2>
      <h3>العزل الخارجي (العزل الفرنسي)</h3>
      <p>يتضمن حفر حول المبنى وعزل الأساسات مع تركيب نظام تصريف للمياه الجوفية. حل دائم للمشكلة.</p>

      <h3>العزل الداخلي</h3>
      <p>معالجة الجدران المصابة بإزالة الدهان المتضرر وتطبيق مواد عازلة ومعالجة للعفن.</p>

      <h2>نصائح للوقاية</h2>
      <ul>
        <li>تهوية المنزل يومياً لعدة دقائق</li>
        <li>إصلاح أي تسربات مياه فور اكتشافها</li>
        <li>استخدام شفاطات في الحمامات والمطابخ</li>
        <li>الصيانة الدورية لنظام العزل كل 3-5 سنوات</li>
      </ul>
    `,
    category: "moisture",
    categoryName: "معالجة الرطوبة",
    image: "https://images.unsplash.com/photo-1744217725753-3fe4a7801645?w=800&q=80",
    author: "فريق عوازل",
    date: "2023-12-28",
    readTime: 6,
  },
  {
    id: "french-drainage-guide",
    slug: "french-drainage-guide",
    title: "العزل الفرنسي: الحل الأمثل للرطوبة الأرضية",
    excerpt: "تعرف على نظام العزل الفرنسي المتكامل لمعالجة مشاكل الرطوبة الأرضية وحماية أساسات المباني في الكويت.",
    content: `
      <p>يعد <a href="/services#french" class="text-primary hover:underline">العزل الفرنسي</a> من أكثر الحلول فعالية لمعالجة مشاكل الرطوبة الأرضية في المباني في الكويت. سمي بهذا الاسم نسبة إلى التقنية الفرنسية المتطورة في معالجة الرطوبة.</p>

      <h2>ما هو العزل الفرنسي؟</h2>
      <p>نظام متكامل يشمل حفر خندق حول المبنى بالعمق المناسب للوصول إلى الأساسات، ثم تنظيف الأساسات وتطبيق مواد عازلة، وتركيب مواسير تصريف مياه محفورة مع طبقة من الحصى لتصريف المياه بعيداً عن المبنى.</p>

      <h2>مكونات النظام</h2>
      <h3>1. الحفر حول المبنى</h3>
      <p>يتم حفر خندق بعمق يصل إلى مستوى الأساسات وبعرض مناسب لضمان الوصول الكامل.</p>

      <h3>2. العزل المائي للأساسات</h3>
      <p>تطبيق طبقات متعددة من المواد العازلة على جدران الأساسات الخارجية.</p>

      <h3>3. نظام الصرف (الدرن)</h3>
      <p>تركيب مواسير صرف محفورة (بايب درين) مع طبقة من الحصى والرمل لتصريف المياه.</p>

      <h2>متى تحتاج للعزل الفرنسي؟</h2>
      <ul>
        <li>ظهور بقع رطوبة في الجدران الطابقية السفلية</li>
        <li>تقشير الدهان والجبس في الجدران القريبة من الأرض</li>
        <li>رائحة عفن في الغرف السفلية والقبو</li>
        <li>ارتفاع منسوب المياه الجوفية في المنطقة</li>
      </ul>
    `,
    category: "waterproofing",
    categoryName: "عزل مائي",
    image: "https://images.unsplash.com/photo-1635424824800-692767998d07?w=800&q=80",
    author: "فريق عوازل",
    date: "2023-12-25",
    readTime: 5,
  },
];

// Blog List Component
const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = activeCategory === "all"
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>مدونة عوازل | نصائح وأفكار للعزل المائي والحراري في الكويت</title>
        <meta
          name="description"
          content="اكتشف أحدث المقالات والنصائح حول العزل المائي والحراري في الكويت. عزل الأسطح والحمامات والمسابح والفوم والعزل الفرنسي ومعالجة الرطوبة."
        />
        <meta name="keywords" content="عزل الكويت, عزل مائي, عزل حراري, عزل أسطح, عزل حمامات, عزل فوم, عزل فرنسي, معالجة رطوبة, شركة عوازل, نصائح عزل" />
        <meta property="og:title" content="مدونة عوازل | نصائح وأفكار للعزل المائي والحراري في الكويت" />
        <meta property="og:description" content="اكتشف أحدث المقالات والنصائح حول العزل المائي والحراري. عزل الأسطح والحمامات والمسابح والفوم والعزل الفرنسي." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1723124280643-f883fd318ce5?w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kuwaitigardens.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "الرئيسية",
                "item": "https://kuwaitigardens.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "المدونة",
                "item": "https://kuwaitigardens.com/blog"
              }
            ]
          })}
        </script>
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="bg-foreground py-20 px-4">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              مدونة عوازل - نصائح وخبرات في العزل المائي والحراري
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              نصائح، أدلة، ومقالات متخصصة في عالم العزل في الكويت
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="bg-secondary py-6 sticky top-16 md:top-20 z-40">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-primary/10"
                    }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Link key={article.id} to={`/blog/${article.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                        {article.categoryName}
                      </Badge>
                      <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString("ar-KW")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime} دقائق
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// Article Detail Component
const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold">المقال غير موجود</h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">
            العودة للمدونة
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "عوازل",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "keywords": `${article.title}, عزل الكويت, ${article.categoryName}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kuwaitigardens.com/blog/${article.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://kuwaitigardens.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "المدونة",
        "item": "https://kuwaitigardens.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://kuwaitigardens.com/blog/${article.slug}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | مدونة عوازل</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={`${article.title}, عزل الكويت, ${article.categoryName}`} />
        <meta property="og:title" content={`${article.title} | مدونة عوازل`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://kuwaitigardens.com/blog/${article.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Layout>
        <article className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-primary">الرئيسية</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary">المدونة</Link>
              <span>/</span>
              <span className="text-foreground">{article.title}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary">
                <Tag className="w-3 h-3 ml-1" />
                {article.categoryName}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {article.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString("ar-KW")}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime} دقائق قراءة
                </span>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-8">
              <img
                src={article.image}
                alt={`${article.title} - عوازل للعزل المائي والحراري في الكويت`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA */}
            <div className="bg-secondary rounded-2xl p-8 mb-12">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                هل تحتاج إلى خدمات العزل؟
              </h3>
              <p className="text-center mb-6 text-muted-foreground">
                اكتشف <Link to="/services" className="text-primary font-bold hover:underline">خدمات العزل المائي والحراري المتكاملة</Link> التي نقدمها في الكويت.
              </p>
              <ContactForm variant="compact" />
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">مقالات ذات صلة</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedArticles.map((relArticle) => (
                    <Link key={relArticle.id} to={`/blog/${relArticle.slug}`}>
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relArticle.image}
                            alt={relArticle.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {relArticle.title}
                          </h3>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </Layout>
    </>
  );
};

// Main Blog Component - decides which view to render
const Blog = () => {
  const { slug } = useParams();

  if (slug) {
    return <ArticleDetail />;
  }

  return <BlogList />;
};

export default Blog;