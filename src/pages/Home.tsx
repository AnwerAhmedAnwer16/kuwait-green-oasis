import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectGallery from "@/components/home/ProjectGallery";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* [عدّل العنوان والوصف حسب بياناتك] */}
        <title>تنسيق حدائق الكويت | تصميم وتنفيذ وصيانة الحدائق - اسم الشركة</title>
        <meta
          name="description"
          content="أفضل شركة تنسيق حدائق في الكويت. نقدم خدمات تصميم الحدائق، العشب الصناعي، أنظمة الري، البرجولات، إضاءة الحدائق والصيانة الدورية. احصل على استشارة مجانية الآن."
        />
        <meta
          name="keywords"
          content="تنسيق حدائق الكويت, تصميم حدائق, عشب صناعي الكويت, أنظمة ري, برجولات, إضاءة حدائق, صيانة حدائق, تنسيق حدائق منزلية"
        />
        <link rel="canonical" href="https://example.com" />
      </Helmet>

      <Layout>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <ProjectGallery />
        <Testimonials />
        <ContactSection />
      </Layout>
    </>
  );
};

export default Home;