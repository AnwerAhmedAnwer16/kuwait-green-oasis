import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - الصفحة غير موجودة | كويتي جاردنز</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Layout>
        <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
          <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">عذراً، الصفحة غير موجودة</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو أنها لم تعد موجودة.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-5 h-5" />
              العودة للرئيسية
            </Link>
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
