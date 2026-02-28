import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";


import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>كويتي جاردنز | أفضل شركة تنسيق وتصميم حدائق في الكويت</title>
        <meta
          name="description"
          content="كويتي جاردنز متخصصة في تصميم وتنسيق الحدائق المنزلية، تركيب الثيل الصناعي، أنظمة الري، والبرجولات في الكويت. حول حديقتك إلى واحة خضراء بلمسة احترافية."
        />
        <meta
          name="keywords"
          content="تنسيق حدائق الكويت, تصميم حدائق, عشب صناعي الكويت, أنظمة ري, برجولات, إضاءة حدائق, صيانة حدائق, تنسيق حدائق منزلية, كويتي جاردنز"
        />
        <meta property="og:title" content="كويتي جاردنز | أفضل شركة تنسيق وتصميم حدائق في الكويت" />
        <meta property="og:description" content="كويتي جاردنز متخصصة في تصميم وتنسيق الحدائق المنزلية، تركيب الثيل الصناعي، أنظمة الري، والبرجولات في الكويت." />
        <meta property="og:image" content="/kg/gardens4.jpg" />
        <meta property="og:url" content="https://kuwaitigardens.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="كويتي جاردنز | أفضل شركة تنسيق وتصميم حدائق في الكويت" />
        <meta name="twitter:description" content="كويتي جاردنز متخصصة في تصميم وتنسيق الحدائق المنزلية، تركيب الثيل الصناعي، أنظمة الري، والبرجولات في الكويت." />
        <meta name="twitter:image" content="/kg/gardens4.jpg" />
        <link rel="canonical" href="https://kuwaitigardens.com" />
      </Helmet>

      <Layout>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />

        <ContactSection />
      </Layout>
    </>
  );
};

export default Home;