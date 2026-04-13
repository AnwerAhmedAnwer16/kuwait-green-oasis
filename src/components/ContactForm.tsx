import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/config/site";

interface ContactFormProps {
  variant?: "default" | "compact";
  className?: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  area?: string;
}

const ContactForm = ({ variant = "default", className = "" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (data: { name: string; phone: string; area: string }): boolean => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "الاسم مطلوب";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    } else if (!/^[\d\s+\-()]{8,}$/.test(data.phone.trim())) {
      newErrors.phone = "رقم هاتف غير صالح";
    }

    if (!data.area.trim()) {
      newErrors.area = "المنطقة مطلوبة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const phone = (formData.get("phone") as string).trim();
    const area = (formData.get("area") as string).trim();
    const details = (formData.get("details") as string).trim();

    if (!validate({ name, phone, area })) return;

    setIsSubmitting(true);

    const message = `مرحباً، أنا ${name}\n📱 رقم الهاتف: ${phone}\n📍 المنطقة: ${area}\n📝 تفاصيل المشروع:\n${details}`;

    const whatsappUrl = WHATSAPP_URL(message);
    const newWindow = window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      if (!newWindow || newWindow.closed || newWindow.closed === undefined) {
        alert("يرجى السماح بفتح الواتساب للتواصل معنا");
      }

      setTimeout(() => {
        setIsSubmitted(false);
        e.currentTarget.reset();
      }, 3000);
    }, 500);
  };

  const renderInput = (
    id: string,
    label: string,
    name: string,
    type: string,
    placeholder: string,
    required?: boolean,
    extra?: Record<string, unknown>,
  ) => {
    const error = errors[id as keyof FormErrors];
    return (
      <div className="space-y-2">
        <Label htmlFor={id} className="text-foreground font-medium">
          {label}
          {required && <span className="text-destructive">*</span>}
        </Label>
        <Input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`bg-background border-border focus:border-primary ${error ? "border-destructive" : ""}`}
          dir={type === "tel" ? "ltr" : undefined}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...extra}
        />
        {error && (
          <p id={`${id}-error`} className="text-destructive text-sm flex items-center gap-1" role="alert">
            <AlertCircle className="w-4 h-4" />
            {error}
          </p>
        )}
      </div>
    );
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
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      <div className={variant === "compact" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4"}>
        {renderInput("name", "الاسم الكامل", "name", "text", "أدخل اسمك", true)}
        {renderInput("phone", "رقم الهاتف", "phone", "tel", "+965 XXXX XXXX", true)}
      </div>

      {renderInput("area", "المنطقة", "area", "text", "مثال: السالمية، حولي، الجهراء...", true)}

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