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
  { id: "maintenance", name: "صيانة الحدائق" },
  { id: "design", name: "أفكار التصميم" },
  { id: "plants", name: "نباتات مناسبة للكويت" },
  { id: "irrigation", name: "نصائح الري" },
];

// Sample blog articles - [أضف مقالاتك الحقيقية]
const articles = [
  {
    id: "best-plants-kuwait",
    slug: "best-plants-kuwait",
    title: "أفضل 10 نباتات تتحمل حرارة الكويت",
    excerpt: "تعرف على أفضل النباتات التي تتحمل درجات الحرارة العالية في الكويت وكيفية العناية بها للحصول على حديقة خضراء طوال العام.",
    content: `
      <p>يواجه أصحاب الحدائق في الكويت تحدياً كبيراً في اختيار النباتات المناسبة التي تتحمل درجات الحرارة المرتفعة التي قد تصل إلى 50 درجة مئوية في الصيف. من المهم دمج هذه النباتات ضمن <a href="/services#garden-design" class="text-primary hover:underline">تصميم حدائق</a> احترافي يضمن لها الظل والري المناسب.</p>
      
      <h2>1. نخيل الزينة</h2>
      <p>يعتبر نخيل الزينة من أفضل الخيارات للحدائق الكويتية. يتحمل الحرارة الشديدة ويضيف لمسة استوائية جميلة لحديقتك.</p>
      
      <h2>2. الجهنمية (البوجنفيليا)</h2>
      <p>نبتة مزهرة رائعة بألوان متعددة، تتحمل الحرارة والجفاف، وتزهر معظم أوقات السنة.</p>
      
      <h2>3. الدفلة</h2>
      <p>شجيرة دائمة الخضرة بأزهار جميلة، مقاومة للحرارة والملوحة.</p>
      
      <h2>4. الياسمين الهندي</h2>
      <p>نبتة عطرية جميلة تتحمل حرارة الكويت وتنشر رائحة زكية في الحديقة.</p>
      
      <h2>5. السدر</h2>
      <p>شجرة محلية تتأقلم مع المناخ الصحراوي وتوفر ظلاً كثيفاً.</p>
      
      <h2>نصائح للعناية بالنباتات في الصيف</h2>
      <ul>
        <li>ري النباتات في الصباح الباكر أو المساء</li>
        <li>استخدام المهاد لحفظ رطوبة التربة</li>
        <li>توفير ظل جزئي للنباتات الحساسة</li>
        <li>استخدام <a href="/services#irrigation" class="text-primary hover:underline">أنظمة الري بالتنقيط</a> لتوفير الماء</li>
      </ul>
    `,
    category: "plants",
    categoryName: "نباتات مناسبة للكويت",
    image: "/kg/gardens21.jpg",
    author: "فريق التحرير", // [عدّل اسم الكاتب]
    date: "2024-01-15",
    readTime: 5,
  },
  {
    id: "smart-irrigation-guide",
    slug: "smart-irrigation-guide",
    title: "كيف توفر الماء مع أنظمة الري الذكية",
    excerpt: "دليل شامل لأنظمة الري الذكية وكيف يمكنها توفير حتى 70% من استهلاك الماء مع الحفاظ على صحة نباتاتك.",
    content: `
      <p>في ظل ارتفاع أسعار المياه وأهمية الحفاظ على الموارد، أصبحت <a href="/services#irrigation" class="text-primary hover:underline">أنظمة الري الذكية</a> ضرورة لكل حديقة في الكويت.</p>
      
      <h2>ما هو الري الذكي؟</h2>
      <p>أنظمة الري الذكية تستخدم أجهزة استشعار وتقنيات متقدمة لتوصيل كمية الماء المناسبة في الوقت المناسب.</p>
      
      <h2>أنواع أنظمة الري</h2>
      <h3>1. الري بالتنقيط</h3>
      <p>يوصل الماء مباشرة إلى جذور النباتات، مما يقلل الفاقد بالتبخر.</p>
      
      <h3>2. الرشاشات الذكية</h3>
      <p>رشاشات قابلة للبرمجة مع أجهزة استشعار للمطر والرطوبة.</p>
      
      <h2>فوائد الري الذكي</h2>
      <ul>
        <li>توفير حتى 70% من استهلاك الماء</li>
        <li>تحكم عن بعد عبر التطبيق</li>
        <li>جدولة آلية حسب احتياجات النبات</li>
        <li>تقليل نمو الأعشاب الضارة</li>
      </ul>
    `,
    category: "irrigation",
    categoryName: "نصائح الري",
    image: "/kg/483529366_17968829630839358_870485787341361304_n.webp",
    author: "فريق التحرير",
    date: "2024-01-10",
    readTime: 4,
  },
  {
    id: "artificial-grass-guide",
    slug: "artificial-grass-guide",
    title: "دليل اختيار الثيل (العشب الصناعي) المناسب",
    excerpt: "كل ما تحتاج معرفته عن أنواع الثيل وكيفية اختيار النوع الأفضل لحديقتك في الكويت.",
    content: `
      <p><a href="/services#artificial-grass" class="text-primary hover:underline">الثيل (العشب الصناعي)</a> حل مثالي للحدائق في الكويت حيث يوفر مظهراً أخضر طوال العام دون الحاجة للماء أو الصيانة المستمرة.</p>
      
      <h2>أنواع الثيل</h2>
      <h3>1. الثيل السكني</h3>
      <p>مثالي للحدائق المنزلية، ناعم ومريح للمشي.</p>
      
      <h2>معايير الجودة</h2>
      <ul>
        <li>مقاومة الأشعة فوق البنفسجية</li>
        <li>كثافة الألياف</li>
        <li>ارتفاع الثيل</li>
        <li>نظام التصريف</li>
      </ul>
    `,
    category: "maintenance",
    categoryName: "صيانة الحدائق",
    image: "/kg/gardens1.jpg",
    author: "فريق التحرير",
    date: "2024-01-05",
    readTime: 6,
  },
  {
    id: "small-garden-ideas",
    slug: "small-garden-ideas",
    title: "أفكار إبداعية لتصميم الحدائق الصغيرة",
    excerpt: "استغل كل شبر في حديقتك الصغيرة مع هذه الأفكار الإبداعية للتصميم والتنسيق.",
    content: `
      <p>لا تدع صغر المساحة يمنعك من الحصول على حديقة جميلة. إليك أفكار إبداعية لـ <a href="/services#garden-design" class="text-primary hover:underline">تصميم الحدائق الصغيرة</a> وتحويل أي مساحة إلى واحة خضراء.</p>
      
      <h2>1. الحدائق العمودية</h2>
      <p>استغل الجدران لزراعة النباتات عمودياً وتوفير المساحة الأرضية.</p>
      
      <h2>2. الأصص المعلقة</h2>
      <p>أضف بعداً جديداً لحديقتك مع النباتات المعلقة.</p>
      
      <h2>3. المرايا الحديقية</h2>
      <p>استخدم المرايا لخلق وهم بمساحة أكبر.</p>
      
      <h2>4. الأثاث متعدد الاستخدامات</h2>
      <p>اختر أثاثاً يمكن طيه أو له وظائف تخزين.</p>
    `,
    category: "design",
    categoryName: "أفكار التصميم",
    image: "/kg/gardens.jpg",
    author: "فريق التحرير",
    date: "2024-01-01",
    readTime: 4,
  },
  {
    id: "pergola-types",
    slug: "pergola-types",
    title: "أنواع البرجولات وكيفية اختيار الأنسب لحديقتك",
    excerpt: "تعرف على أنواع البرجولات المختلفة ومميزات كل نوع لاختيار الأفضل لمساحتك الخارجية.",
    content: `
      <p><a href="/services#pergolas" class="text-primary hover:underline">البرجولات</a> تضيف لمسة فاخرة لأي حديقة وتوفر ظلاً مريحاً للاستمتاع بالأجواء الخارجية في الكويت.</p>
      
      <h2>أنواع البرجولات</h2>
      <h3>1. البرجولات الخشبية</h3>
      <p>كلاسيكية ودافئة، متوفرة بأنواع خشب متعددة.</p>
      
      <h3>2. البرجولات المعدنية</h3>
      <p>حديثة ومتينة، مقاومة للعوامل الجوية.</p>
      
      <h3>3. البرجولات القماشية</h3>
      <p>مرنة وقابلة للطي، مثالية للمناسبات.</p>
    `,
    category: "design",
    categoryName: "أفكار التصميم",
    image: "/kg/woody_setting.jpg",
    author: "فريق التحرير",
    date: "2023-12-28",
    readTime: 5,
  },
  {
    id: "garden-lighting-tips",
    slug: "garden-lighting-tips",
    title: "نصائح لإضاءة حديقتك بشكل احترافي",
    excerpt: "تعلم كيف تضيء حديقتك بطريقة تبرز جمالها وتخلق أجواء ساحرة في الليل.",
    content: `
      <p><a href="/services#lighting" class="text-primary hover:underline">إضاءة الحدائق</a> الصحيحة تحول حديقتك العادية إلى لوحة فنية ليلية وتمدد وقت استمتاعك بالمساحات الخارجية.</p>
      
      <h2>أنواع الإضاءة</h2>
      <h3>1. الإضاءة المحيطية</h3>
      <p>توفر إضاءة عامة ناعمة للمساحة.</p>
      
      <h3>2. إضاءة التركيز</h3>
      <p>لإبراز عناصر معينة كالأشجار أو النوافير.</p>
      
      <h3>3. إضاءة الممرات</h3>
      <p>للأمان والتوجيه في المسارات.</p>
    `,
    category: "design",
    categoryName: "أفكار التصميم",
    image: "/kg/lightings.jpg",
    author: "فريق التحرير",
    date: "2023-12-25",
    readTime: 4,
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
        <title>مدونة كويتي جاردنز | نصائح وأفكار لتنسيق الحدائق في الكويت</title>
        <meta
          name="description"
          content="اكتشف أحدث الأفكار والنصائح للعناية بحديقتك، اختيار الثيل الصناعي، وتصاميم الجلسات الخارجية، بالاضافة لمعلومات قيمة حول زرع الأشجار وتكريب وتلقيح النخيل في الكويت."
        />
        <meta name="keywords" content="تنسيق حدائق الكويت, تصميم حدائق, ثيل صناعي الكويت, أنظمة ري, برجولات, زرع أشجار الكويت, تكريب نخيل, تلقيح نخيل, صيانة حدائق, نصائح زراعية" />
        <meta property="og:title" content="مدونة كويتي جاردنز | نصائح وأفكار لتنسيق الحدائق في الكويت" />
        <meta property="og:description" content="اكتشف أحدث الأفكار والنصائح للعناية بحديقتك، اختيار أفضل أنواع الثيل الصناعي، ومعلومات قيمة حول زراعة الأشجار وتكريب النخيل." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/kg/gardens21.jpg" />
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
              مدونة كويتي جاردنز - نصائح وأفكار لتنسيق الحدائق
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              نصائح، أفكار، ومقالات متخصصة في عالم الحدائق
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
      "name": "كويتي جاردنز",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "keywords": `${article.title}, تنسيق حدائق الكويت, ${article.categoryName}`,
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
        <title>{article.title} | مدونة كويتي جاردنز</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={`${article.title}, تنسيق حدائق الكويت, ${article.categoryName}`} />
        <meta property="og:title" content={`${article.title} | مدونة كويتي جاردنز`} />
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
                alt={`${article.title} - كويتي جاردنز لتنسيق الحدائق في الكويت`}
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
                هل تحتاج مساعدة في حديقتك؟
              </h3>
              <p className="text-center mb-6 text-muted-foreground">
                اكتشف <Link to="/services" className="text-primary font-bold hover:underline">خدمات تنسيق الحدائق</Link> المتكاملة التي نقدمها في الكويت.
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