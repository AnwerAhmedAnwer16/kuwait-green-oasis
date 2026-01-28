import { useState } from "react";
import { X } from "lucide-react";

// [استبدل بصور مشاريعكم الحقيقية]
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80",
    alt: "تصميم حديقة منزلية في الكويت",
    category: "تصميم",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80",
    alt: "تركيب عشب صناعي الكويت",
    category: "عشب صناعي",
  },
  {
    src: "https://images.unsplash.com/photo-1564429238067-5f79bf6f3f23?w=600&q=80",
    alt: "نظام ري ذكي للحدائق",
    category: "أنظمة ري",
  },
  {
    src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80",
    alt: "برجولة خشبية حديثة",
    category: "برجولات",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80",
    alt: "إضاءة حديقة ليلية",
    category: "إضاءة",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    alt: "صيانة حدائق الكويت",
    category: "صيانة",
  },
];

const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg mb-2 block">أعمالنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            معرض المشاريع
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
              onClick={() => setSelectedImage(image.src.replace("w=600", "w=1200"))}
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
        >
          <button
            className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="إغلاق"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>
          <img
            src={selectedImage}
            alt="صورة مكبرة"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;