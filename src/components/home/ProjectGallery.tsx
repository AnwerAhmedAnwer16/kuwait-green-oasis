import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1635424709845-3a85ad5e1f5e?w=800&q=80",
    alt: "عزل الأسطح في الكويت - أعمال عزل مائي احترافية للأسطح باستخدام مواد متطورة",
    category: "عزل أسطح",
  },
  {
    src: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&q=80",
    alt: "عزل الحمامات ضد تسربات المياه والرطوبة في الكويت - طبقات عازلة عالية الجودة",
    category: "عزل حمامات",
  },
  {
    src: "https://images.unsplash.com/photo-1591645321243-3adc1e75cfdc?w=800&q=80",
    alt: "أعمال العزل المائي للمسابح والخزانات في المباني الحديثة بالكويت - حماية متكاملة",
    category: "عزل مسابح",
  },
  {
    src: "https://images.unsplash.com/photo-1543525324-dc2c9006d03d?w=800&q=80",
    alt: "عزل الفوم بالرش الأمريكي للمباني في الكويت - عزل حراري ومائي بتقنية الفوم",
    category: "عزل فوم",
  },
  {
    src: "https://images.unsplash.com/photo-1744217725753-3fe4a7801645?w=800&q=80",
    alt: "نظام العزل الفرنسي لمعالجة الرطوبة الأرضية وحماية الأساسات في الكويت",
    category: "عزل فرنسي",
  },
  {
    src: "https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?w=800&q=80",
    alt: "أعمال السكريد والصبة الخرسانية تحضيراً لتطبيق العزل المائي والحراري في الكويت",
    category: "سكريد وصبة",
  },
  {
    src: "https://images.unsplash.com/photo-1598346653523-10a11538b971?w=800&q=80",
    alt: "معالجة الرطوبة والعفن في المباني السكنية باستخدام مواد عازلة ضد الرطوبة في الكويت",
    category: "معالجة رطوبة",
  },
  {
    src: "https://images.unsplash.com/photo-1615309662243-70f6df917b59?w=800&q=80",
    alt: "عزل دكتات التكييف والتمديدات الحرارية - حماية من فقدان التبريد في مباني الكويت",
    category: "عزل دكتات",
  },
];

const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClose = useCallback(() => setSelectedImage(null), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, handleClose]);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-lg mb-2 block">أعمالنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            معرض أعمال العزل المائي والحراري في الكويت
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اطلع على مجموعة من أحدث مشاريعنا في العزل بجميع مناطق الكويت
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image.src)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedImage(image.src);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`عرض صورة: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-8">
          <a
            href="/services"
            className="inline-flex items-center text-accent font-bold hover:underline"
          >
            عرض جميع الخدمات
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="عرض صورة مكبرة"
        >
          <button
            className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="إغلاق"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>
          <img
            src={selectedImage}
            alt="صورة مكبرة لمشروع من أعمال عوازل"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;