import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectGallery from "@/components/home/ProjectGallery";


import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>كويتي جاردنز | أفضل شركة تنسيق وتصميم حدائق في الكويت</title>
        <meta
          name="description"
          content="كويتي جاردنز لخدمات الزراعة وتنسيق الحدائق. زرع وتوريد الأشجار والنخيل، تلقيح وتكريب ნخيل، إزالة الأشجار، وتركيب الثيل الصناعي وأنظمة الري المتطورة في الكويت."
        />
        <meta
          name="keywords"
          content="تنسيق حدائق الكويت, تصميم حدائق, ثيل صناعي الكويت, ثيل طبيعي, عشب صناعي, أنظمة ري, زرع أشجار الكويت, تلقيح نخيل, تكريب نخيل, خلع أشجار, إزالة أشجار, برجولات, إضاءة حدائق, صيانة حدائق, كويتي جاردنز"
        />
        <meta property="og:title" content="كويتي جاردنز | أفضل شركة تنسيق وتصميم حدائق في الكويت" />
        <meta property="og:description" content="كويتي جاردنز لخدمات الزراعة وتنسيق الحدائق. زرع وتوريد الأشجار والنخيل، تلقيح وتكريب نخيل، وإزالة الأشجار في الكويت بالإضافة لتركيب الثيل والري." />
        <meta property="og:image" content="/kg/gardens4.jpg" />
        <meta property="og:url" content="https://kuwaitigardens.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="كويتي جاردنز | أفضل شركة تنسيق وتصميم حدائق في الكويت" />
        <meta name="twitter:description" content="كويتي جاردنز لخدمات الزراعة وتنسيق الحدائق. زرع أشجار وتكريب نخيل وخلع أشجار وتركيب ثيل في الكويت." />
        <meta name="twitter:image" content="/kg/gardens4.jpg" />
        <link rel="canonical" href="https://kuwaitigardens.com" />
      </Helmet>

      <Layout>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <ProjectGallery />

        <ContactSection />
      </Layout>
    </>
  );
};

export default Home;