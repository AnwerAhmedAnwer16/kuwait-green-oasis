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
        <title>عوازل | أفضل شركة عزل مائي وحراري في الكويت - عزل الأسطح والحمامات والفوم</title>
        <meta
          name="description"
          content="شركة عوازل لخدمات العزل المائي والحراري في الكويت. عزل الأسطح، عزل الحمامات، عزل المسابح، عزل الفوم (الرش الأمريكي)، العزل الفرنسي، والسكريد والصبة. حلول هندسية بمواد معتمدة."
        />
        <meta
          name="keywords"
          content="عزل الكويت, عزل مائي الكويت, عزل حراري الكويت, عزل الأسطح, عزل الحمامات, عزل المسابح, عزل الفوم, الرش الأمريكي, العزل الفرنسي, السكريد والصبة, عزل دكتات التكييف, شركة عوازل الكويت, معالجة الرطوبة, مقاومة تسرب المياه, waterproofing Kuwait, insulation contractor Kuwait, roof leakage repair Kuwait, spray foam Kuwait"
        />
        <meta property="og:title" content="عوازل | أفضل شركة عزل مائي وحراري في الكويت" />
        <meta property="og:description" content="شركة عوازل لخدمات العزل المائي والحراري في الكويت. عزل الأسطح والحمامات والمسابح والفوم والعزل الفرنسي." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1723124280643-f883fd318ce5?w=1200&q=80" />
        <meta property="og:url" content="https://kuwaitigardens.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="عوازل | أفضل شركة عزل مائي وحراري في الكويت" />
        <meta name="twitter:description" content="شركة عوازل - خدمات العزل المائي والحراري في الكويت. عزل أسطح وحمامات ومسابح وفوم." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1723124280643-f883fd318ce5?w=1200&q=80" />
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