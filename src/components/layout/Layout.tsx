import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import { Helmet } from "react-helmet-async";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "كويتي جاردنز",
            "url": "https://kuwaitigardens.com",
            "logo": "https://kuwaitigardens.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+96566101619",
              "contactType": "customer service",
              "areaServed": "KW",
              "availableLanguage": ["Arabic"]
            },
            "sameAs": [
              "https://www.instagram.com/tnsyq231/"
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <main className="flex-1 page-transition">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Layout;