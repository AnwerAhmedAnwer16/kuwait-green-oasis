import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "أحمد الخالدي",
    area: "السالمية",
    rating: 5,
    text: "عمل احترافي ومتميز. الفريق كان ملتزماً بالمواعيد والنتيجة فاقت توقعاتي. أنصح الجميع بالتعامل معهم.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
  },
  {
    name: "فاطمة العلي",
    area: "حولي",
    rating: 5,
    text: "تعاملت معهم لعزل منزلي وكانت تجربة ممتازة. الفريق محترف والمواد المستخدمة عالية الجودة. سعيدة جداً بالنتيجة وأنصح الجميع.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
  },
  {
    name: "محمد الرشيدي",
    area: "الجهراء",
    rating: 5,
    text: "خدمة ممتازة وأسعار مناسبة. قاموا بعزل سطح منزلي بالفوم الأمريكي والنتيجة رائعة. انخفضت حرارة المنزل بشكل ملحوظ. شكراً عوازل.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg mb-2 block">آراء العملاء</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نفتخر بثقة عملائنا الكرام وآرائهم الإيجابية عن خدماتنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.area}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;