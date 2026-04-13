import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { WHATSAPP_URL, CONTACT } from "@/config/site";

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button — official icon + official green */}
      <a
        href={WHATSAPP_URL()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#1ebe5d] transition-all duration-300"
        aria-label="تواصل عبر الواتساب"
      >
        <WhatsAppIcon className="w-7 h-7" />
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-3 py-2 bg-foreground text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          واتساب
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={CONTACT.phoneHref}
        className="group relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="اتصل بنا"
      >
        <Phone className="w-7 h-7 text-primary-foreground" />
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-3 py-2 bg-foreground text-primary-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          اتصل الآن
        </span>
      </a>
    </div>
  );
};

export default FloatingContact;