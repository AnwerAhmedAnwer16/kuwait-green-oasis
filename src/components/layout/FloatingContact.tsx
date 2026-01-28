import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  // [أضف رقم الواتساب والهاتف]
  const whatsappNumber = "965XXXXXXXX"; // Replace with actual WhatsApp number
  const phoneNumber = "+965XXXXXXXX"; // Replace with actual phone number

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أرغب بالاستفسار عن خدمات تنسيق الحدائق")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse-glow"
        aria-label="تواصل عبر الواتساب"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          واتساب
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="اتصل بنا"
      >
        <Phone className="w-7 h-7 text-primary-foreground" />
        {/* Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          اتصل الآن
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;