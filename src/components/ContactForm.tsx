import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  variant?: "default" | "compact";
  className?: string;
}

const ContactForm = ({ variant = "default", className = "" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const whatsappNumber = "96566101619";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const area = formData.get("area") as string;
    const details = formData.get("details") as string;

    // Construct WhatsApp message
    const message = `مرحباً، أنا ${name}
📱 رقم الهاتف: ${phone}
📍 المنطقة: ${area}
📝 تفاصيل المشروع:
${details}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-secondary rounded-xl p-8 text-center ${className}`}>
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground mb-2">تم إرسال طلبك!</h3>
        <p className="text-muted-foreground">سيتم فتح الواتساب للتواصل معنا مباشرة</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className={variant === "compact" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground font-medium">
            الاسم الكامل <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="أدخل اسمك"
            className="bg-background border-border focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-medium">
            رقم الهاتف <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+965 XXXX XXXX"
            className="bg-background border-border focus:border-primary"
            dir="ltr"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="area" className="text-foreground font-medium">
          المنطقة <span className="text-destructive">*</span>
        </Label>
        <Input
          id="area"
          name="area"
          type="text"
          required
          placeholder="مثال: السالمية، حولي، الجهراء..."
          className="bg-background border-border focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="details" className="text-foreground font-medium">
          تفاصيل المشروع
        </Label>
        <Textarea
          id="details"
          name="details"
          rows={variant === "compact" ? 3 : 4}
          placeholder="صف لنا مشروعك: نوع الخدمة المطلوبة، مساحة الحديقة، أي متطلبات خاصة..."
          className="bg-background border-border focus:border-primary resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg"
      >
        {isSubmitting ? (
          "جاري الإرسال..."
        ) : (
          <>
            أرسل عبر الواتساب
            <Send className="w-5 h-5 mr-2" />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;