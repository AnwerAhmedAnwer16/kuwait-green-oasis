import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/kg/gardens21.jpg",
    alt: "تصميم حديقة منزلية متكاملة مع ثيل طبيعي في الكويت",
    category: "تصميم",
  },
  {
    src: "/kg/gardens1.jpg",
    alt: "تركيب ثيل صناعي عالي الجودة في الكويت",
    category: "ثيل صناعي",
  },
  {
    src: "/kg/gardens.jpg",
    alt: "ممشى حجري مع الثيل وتصميم حديقة رائع",
    category: "تصميم",
  },
  {
    src: "/kg/woody_setting.jpg",
    alt: "برجولة خشبية حديثة مع جلسة خارجية في الكويت",
    category: "برجولات",
  },
  {
    src: "/kg/lightings.jpg",
    alt: "إضاءة حديقة ليلية مع جلسة خارجية",
    category: "إضاءة",
  },
  {
    src: "/kg/gardens2.jpg",
    alt: "تركيب ثيل صناعي فاخر للحدائق",
    category: "ثيل صناعي",
  },
  {
    src: "/kg/gardens22.jpg",
    alt: "صيانة حدائق وقص الثيل في الكويت",
    category: "صيانة",
  },
  {
    src: "/kg/483529366_17968829630839358_870485787341361304_n.webp",
    alt: "تنسيق حديقة كبيرة مع أنظمة ري حديثة في الكويت",
    category: "تنسيق حدائق",
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
          <span className="text-primary font-semibold text-lg mb-2 block">أعمالنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            معرض أعمالنا في تنسيق الحدائق بالكويت
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            اطلع على مجموعة من أحدث مشاريعنا في تنسيق الحدائق بالكويت
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
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
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
            href="/services#portfolio"
            className="inline-flex items-center text-primary font-bold hover:underline"
          >
            عرض جميع المشاريع
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
            alt="صورة مكبرة لمشروع من أعمال كويتي جاردنز"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;